'use strict';
import { Config } from "./src/buyer/config/config.js";
import dotenv from 'dotenv'
import { eventEmitter } from "./src/dist/emitter/emitter.js";
import Order from "./src/api_methods/order.js";
import bodyParser from "body-parser";
import cors from "cors";
import express from "express";

dotenv.config();


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

try {
    const dbPort = 8081
    var server = app.listen(dbPort, () => {
      console.info(`Listening on port ${dbPort}`);
    });
  } catch(error) {
    console.log(error)
    process.exit(1)
  }
  app.use(cors());
class Eunimart {
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
