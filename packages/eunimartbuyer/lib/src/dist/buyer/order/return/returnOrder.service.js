import { onOrderReturn } from "../../../shared/utils/protocolApis/index.js";
import { PROTOCOL_CONTEXT } from "../../../shared/utils/buyer_enums.js";
// import {addOrUpdateOrderWithTransactionId, getOrderById} from "../../../shared/db/dbService.js";

import BppReturnService from "./bppReturn.service.js";
import ContextFactory from "../../../shared/factories/ContextFactory.js";
import CustomError from "../../../shared/lib/errors/custom.error.js";
import NoRecordFoundError from "../../../shared/lib/errors/no-record-found.error.js";
import OrderMongooseModel from '../../../shared/db/order.js';
import BAPValidator from "../../../shared/utils/validations/bap_validations/validations.js";
import { v4 as uuidv4} from 'uuid';
import { Configuration } from "../../config/config.js";
const bppReturnService = new BppReturnService();

class ReturnOrderService {

    /**
    * return order
    * @param {Object} orderRequest
    */
    async returnOrder(orderRequest) {
        try {

            // const orderDetails = await getOrderById(orderRequest.message.order_id);

            const { context: requestContext = {}, message: message = {} } = orderRequest || {};

            const contextFactory = new ContextFactory();
            // domain, country, city, action, bap 2, time stamp
            const context = contextFactory.create({
                domain: requestContext.domain ? requestContext.domain : Configuration?.DOMAIN,
                country: requestContext.country ? requestContext.country : Configuration?.COUNTRY,
                city: requestContext.city ? requestContext.city : Configuration?.CITY,
                action: requestContext.action ? requestContext.action : PROTOCOL_CONTEXT.RETURN,
                core_version: requestContext.core_version ? requestContext.core_version : PROTOCOL_CONTEXT.CORE_VERSION,
                ttl: requestContext.ttl ? requestContext.ttl : null,
                message_id: requestContext.message_id ? requestContext.message_id : uuidv4(),
                timestamp: requestContext.timestamp ? requestContext.timestamp  : new Date().toISOString(),
                transactionId: requestContext.transaction_id,
                bppId: requestContext.bpp_id,
                bppUrl: requestContext.bpp_uri,
                bapId: requestContext.bap_id ? requestContext.bap_id : Configuration?.BAP_ID,
                bapUrl: requestContext.bap_uri ? requestContext.bap_id : Configuration.BAP_URL,
                });

            const { order_id, return_reason_id } = message || {};

            if (!(context?.bpp_id)) {
                throw new CustomError("BPP Id is mandatory");
            }

            return await bppReturnService.returnOrder(
                context,
                order_id,
                return_reason_id
            );
        }
        catch (err) {
            throw err;
        }
    }


    /**
    * return order
    * @param {Object} orderRequest
    */
     async ONDCReturnOrder(orderRequest) {
        try {

            const { context: requestContext = {}, message: order = {} } = orderRequest || {};

            if (!(requestContext?.bpp_id)) {
                throw new CustomError("BPP Id is mandatory");
            }

            var validation_flag = new BAPValidator().validateReturn(orderRequest)

            if(!validation_flag){
                return res.status(401)
                .json({ message : { 
                        "ack": { "status": "NACK" },  
                        "error": { "type": "Gateway", "code": "10000", "message": "Bad or Invalid request error" } } 
                    })
            }

            return await bppReturnService.ONDCReturnOrder(
                requestContext.bpp_uri,
                requestContext,
                orderRequest
            );
        }
        catch (err) {
            throw err;
        }
    }

    async ONDCReturnOrderEvent(orderRequest) {
        try {

            // const orderDetails = await getOrderById(orderRequest.message.order_id);

            const { context: requestContext = {}, message: order = {} } = orderRequest || {};
            if (!(requestContext?.bpp_id)) {
                throw new CustomError("BPP Id is mandatory");
            }

            var validation_flag = new BAPValidator().validateReturn(orderRequest)
            if(!validation_flag){
                return res.status(401)
                .json({ message : { 
                        "ack": { "status": "NACK" },  
                        "error": { "type": "Gateway", "code": "10000", "message": "Bad or Invalid request error" } } 
                    })
            }
            return await bppReturnService.ONDCReturnOrder(
                requestContext.bpp_uri,
                requestContext,
                orderRequest
            );
        }
        catch (err) {
            throw err;
        }
    }

    /**
    * on return order
    * @param {Object} messageId
    */
    async onReturnOrder(messageId) {
        try {
            let protocolReturnResponse = await onOrderReturn(messageId);

            if (!(protocolReturnResponse && protocolReturnResponse.length)) {
                const contextFactory = new ContextFactory();
                const context = contextFactory.create({
                    messageId: messageId,
                    action: PROTOCOL_CONTEXT.ON_RETURN
                });

                return {
                    context,
                    error: {
                        message: "No data found"
                    }
                };
            }
            else {
                if (!(protocolReturnResponse?.[0].error)) {

                    protocolReturnResponse = protocolReturnResponse?.[0];

                    const dbResponse = await OrderMongooseModel.find({
                        transactionId: protocolReturnResponse.context.transaction_id
                    });


                    if (!(dbResponse || dbResponse.length))
                        throw new NoRecordFoundError();
                    else {
                        const orderSchema = dbResponse?.[0].toJSON();
                        orderSchema.state = protocolReturnResponse?.message?.order?.state;

                        // await addOrUpdateOrderWithTransactionId(
                        //     protocolReturnResponse.context.transaction_id,
                        //     { ...orderSchema }
                        // );
                    }
                }
                
                return protocolReturnResponse;
            }

        }
        catch (err) {
            throw err;
        }
    }

    /**
    * bpp return order
    * @param {Object} orderRequest
    * @param {Boolean} isMultiSellerRequest
    */
     async bppOnReturnOrderResponse(uri, orderRequest) {
        try {
            const bppResponse = await bppReturnService.bppOnReturnResponse(
                uri,
                orderRequest
            );

            return bppResponse;
        }
        catch (err) {
            throw err;
        }
    }

}

export default ReturnOrderService;
