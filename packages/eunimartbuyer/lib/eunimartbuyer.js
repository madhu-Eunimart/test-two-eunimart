import { Config } from "./src/dist/buyer/config/config.js";
import dotenv from 'dotenv'
import { eventEmitter } from "./src/dist/emitter/emitter.js";
import Order from "./src/dist/api_methods/order.js";

dotenv.config();


class eunimartbuyer {
  constructor(key_id, secret_key) {
    this.key_id = key_id
    this.secret_key = secret_key
    this.config = new Config(key_id, secret_key)
    this.order = new Order(key_id, secret_key)
    this.emitter = eventEmitter
  }
  Config(config) {
    // this.config.DbConfig(data.uri)
    this.config.SdkConfig(config)
  }
  Router() {
    return this.config.RouterExport()
  }
}
export default eunimartbuyer