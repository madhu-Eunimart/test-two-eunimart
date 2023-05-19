import { JUSPAY_PAYMENT_STATUS, PAYMENT_TYPES, PROTOCOL_CONTEXT, PROTOCOL_PAYMENT, SUBSCRIBER_TYPE } from "../../../shared/utils/buyer_enums.js";
import ContextFactory from "../../../shared/factories/ContextFactory.js";
import BppConfirmService from "./bppConfirm.service.js";
// import JuspayService from "../../bap_client/payment/juspay.service.js";
import { v4 as uuidv4 } from 'uuid';
import { Configuration } from "../../config/config.js";
const bppConfirmService = new BppConfirmService();
// const juspayService = new JuspayService();

class ConfirmOrderService {
  /**
   * 
   * @param {Array} items 
   * @returns Boolean
   */
  areMultipleBppItemsSelected(items) {
    return items ? [...new Set(items.map(item => item.bpp_id))].length > 1 : false;
  }

  /**
   * 
   * @param {Array} items 
   * @returns Boolean
   */
  // areMultipleProviderItemsSelected(items) {
  //     return items ? [...new Set(items.map(item => item.provider.id))].length > 1 : false;
  // }

  /**
   * 
   * @param {Object} payment
   * @param {String} orderId
   * @param {Boolean} confirmPayment
   * @returns Boolean
   */
  async arePaymentsPending(payment, orderId, total, confirmPayment = true) {
    if (payment?.type !== PAYMENT_TYPES["ON-ORDER"]) return false;

    // const paymentDetails = (confirmPayment && await juspayService.getOrderStatus(orderId)) || {};

    // return payment == null ||
    //     payment.paid_amount <= 0 ||
    //     total <= 0 ||
    //     (
    //         confirmPayment &&
    //         ((process.env.NODE_ENV === "prod" &&
    //             total !== paymentDetails?.amount) ||
    //             paymentDetails?.status !== JUSPAY_PAYMENT_STATUS.CHARGED.status)
    //     );
    return false;
  }

  /**
  * confirm order
  * @param {Object} orderRequest
  */
  async confirmOrder(orderRequest) {
    try {
      const {
        context: requestContext,
        message: order = {}
      } = orderRequest || {};

      // const contextFactory = new ContextFactory();
      // const context = contextFactory.create({
      //     domain: requestContext.domain ? requestContext.domain : Configuration?.DOMAIN,
      //     country: requestContext.country ? requestContext.country : Configuration?.COUNTRY,
      //     city: requestContext.city ? requestContext.city : Configuration?.CITY,
      //     action: requestContext.action ? requestContext.action : PROTOCOL_CONTEXT.CONFIRM,
      //     core_version: requestContext.core_version ? requestContext.core_version : PROTOCOL_CONTEXT.CORE_VERSION,
      //     ttl: requestContext.ttl ? requestContext.ttl : null,
      //     message_id: requestContext.message_id ? requestContext.message_id : uuidv4(),
      //     timestamp: requestContext.timestamp ? requestContext.timestamp  : new Date().toISOString(),
      //     transactionId: requestContext.transaction_id,
      //     bppId: requestContext.bpp_id,
      //     bppUrl: requestContext.bpp_uri,
      //     bapId: requestContext.bap_id ? requestContext.bap_id : Configuration?.BAP_ID,
      //     bapUrl: requestContext.bap_uri ? requestContext.bap_id : Configuration.BAP_URL,
      // });

      if (!order?.items?.length) {
        return {
          context,
          error: {
            message: "Empty order received"
          }
        };
      }
      // else if (this.areMultipleBppItemsSelected(order?.items)) {
      //     return {
      //         context,
      //         error: { message: "More than one BPP's item(s) selected/initialized" }
      //     };
      // }
      // else if (this.areMultipleProviderItemsSelected(order?.items)) {
      //     return {
      //         context,
      //         error: { message: "More than one Provider's item(s) selected/initialized" }
      //     };
      // } else if (await this.arePaymentsPending(
      //     order?.payment,
      //     orderRequest?.context?.transaction_id,
      //     order?.payment?.paid_amount
      // )) {
      //     return {
      //         context,
      //         error: {
      //             message: "BAP hasn't received payment yet",
      //             status: "BAP_015",
      //             name: "PAYMENT_PENDING"
      //         }
      //     };
      // }

      // let paymentStatus = await juspayService.getOrderStatus(orderRequest?.context?.transaction_id);

      return await bppConfirmService.confirmV1(requestContext.bpp_uri, context, order);
    } catch (err) {
      throw err;
    }
  }

  /**
  * confirm order
  * @param {Object} orderRequest
  */
  async ONDCConfirmOrder(orderRequest) {
    try {
      const {
        context: requestContext = {},
        message = {}
      } = orderRequest;
      const {
        items = [],
        fulfillments = [],
        payment = {}
      } = message.order;
      if (!items?.length) {
        return {
          context,
          error: {
            message: "Empty order received"
          }
        };
      }
      // else if (this.areMultipleBppItemsSelected(items)) {
      //     return {
      //         context,
      //         error: { message: "More than one BPP's item(s) selected/initialized" }
      //     };
      // }
      // else if (this.areMultipleProviderItemsSelected(items)) {
      //     return {
      //         context,
      //         error: { message: "More than one Provider's item(s) selected/initialized" }
      //     };
      // } else if (await this.arePaymentsPending(
      //     payment,
      //     orderRequest?.context?.transaction_id,
      //     payment?.paid_amount
      // )) {

      //     return {
      //         context,
      //         error: {
      //             message: "BAP hasn't received payment yet",
      //             status: "BAP_015",
      //             name: "PAYMENT_PENDING"
      //         }
      //     };
      // }

      // let paymentStatus = await juspayService.getOrderStatus(orderRequest?.context?.transaction_id);

      // var validation_flag = new BAPValidator().validateConfirm(orderRequest)

      // if(!validation_flag){
      //     return res.status(401)

      //     .json({ message : { 
      //             "ack": { "status": "NACK" },  
      //             "error": { "type": "Gateway", "code": "10000", "message": "Bad or Invalid request error" } } 
      //         })
      // }

      return await bppConfirmService.ONDCConfirm(requestContext.bpp_uri, orderRequest);
    } catch (err) {
      throw err;
    }
  }
  async ONDCConfirmOrderEvent(orderRequest) {
    try {
      console.log("payload", orderRequest);
      const {
        context = {},
        message = {}
      } = orderRequest;
      const {
        items = [],
        fulfillments = [],
        payment = {}
      } = message.order;
      if (!items?.length) {
        return {
          context,
          error: {
            message: "Empty order received"
          }
        };
      } else if (this.areMultipleBppItemsSelected(items)) {
        return {
          context,
          error: {
            message: "More than one BPP's item(s) selected/initialized"
          }
        };
      }
      // else if (this.areMultipleProviderItemsSelected(items)) {
      //     return {
      //         context,
      //         error: { message: "More than one Provider's item(s) selected/initialized" }
      //     };
      // else if (await this.arePaymentsPending(
      //     payment,
      //     orderRequest?.context?.transaction_id,
      //     payment?.paid_amount
      // )) {
      //     return {
      //         context,
      //         error: {
      //             message: "BAP hasn't received payment yet",
      //             status: "BAP_015",
      //             name: "PAYMENT_PENDING"
      //         }
      //     };
      // }

      // let paymentStatus = await juspayService.getOrderStatus(orderRequest?.context?.transaction_id);

      // var validation_flag = new BAPValidator().validateConfirm(orderRequest)

      // if(!validation_flag){
      //     return res.status(401)

      //     .json({ message : { 
      //             "ack": { "status": "NACK" },  
      //             "error": { "type": "Gateway", "code": "10000", "message": "Bad or Invalid request error" } } 
      //         })
      // }
      return await bppConfirmService.ONDCConfirm(context.bpp_uri, orderRequest);
    } catch (err) {
      throw err;
    }
  }
}
export default ConfirmOrderService;