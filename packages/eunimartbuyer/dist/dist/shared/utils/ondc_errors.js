const ONDC_ERRORS = {
  10000: {
    "code": "10000",
    "type": "Gateway",
    "message": "Bad or Invalid request error"
  },
  10001: {
    "code": "10001",
    "type": "Gateway",
    "message": "Invalid Signature"
  },
  10002: {
    "code": "10002",
    "type": "Gateway",
    "message": "Invalid City Code"
  },
  20000: {
    "code": "20000",
    "type": "Buyer App",
    "message": "Invalid catalog item"
  },
  20001: {
    "code": "20001",
    "type": "Buyer App",
    "message": "Invalid Signature"
  },
  20002: {
    "code": "20002",
    "type": "Buyer App",
    "message": "Stale Request"
  },
  25001: {
    "code": "25001",
    "type": "Buyer App",
    "message": "Order Confirm Failure"
  },
  27501: {
    "code": "27501",
    "type": "Buyer App",
    "message": "Terms unacceptable"
  },
  27502: {
    "code": "27502",
    "type": "Buyer App",
    "message": "Order terminated"
  },
  30000: {
    "code": "30000",
    "type": "Seller App",
    "message": "Invalid request error"
  },
  30001: {
    "code": "30001",
    "type": "Seller App",
    "message": "Provider not found"
  },
  30002: {
    "code": "30002",
    "type": "Seller App",
    "message": "Provider location not found"
  },
  30003: {
    "code": "30003",
    "type": "Seller App",
    "message": "Provider category not found"
  },
  30004: {
    "code": "30004",
    "type": "Seller App",
    "message": "Item not found"
  },
  30005: {
    "code": "30005",
    "type": "Seller App",
    "message": "Category not found"
  },
  30006: {
    "code": "30006",
    "type": "Seller App",
    "message": "Offer code invalid"
  },
  30007: {
    "code": "30007",
    "type": "Seller App",
    "message": "Offer fulfillment error"
  },
  30008: {
    "code": "30008",
    "type": "Seller App",
    "message": "Location Serviceability error"
  },
  30009: {
    "code": "30009",
    "type": "Seller App",
    "message": "Location Serviceability error"
  },
  30010: {
    "code": "30010",
    "type": "Seller App",
    "message": "Location Serviceability error"
  },
  30011: {
    "code": "30011",
    "type": "Seller App",
    "message": "Order Serviceability error"
  },
  30012: {
    "code": "30012",
    "type": "Seller App",
    "message": "Invalid cancellation reason"
  },
  30013: {
    "code": "30013",
    "type": "Seller App",
    "message": "Update inconsistency"
  },
  30014: {
    "code": "30014",
    "type": "Seller App",
    "message": "Entity to rate not found"
  },
  30015: {
    "code": "30015",
    "type": "Seller App",
    "message": "Invalid rating value"
  },
  30016: {
    "code": "30016",
    "type": "Seller App",
    "message": "Invalid Signature"
  },
  30017: {
    "code": "30017",
    "type": "Seller App",
    "message": "Merchant unavailable"
  },
  30018: {
    "code": "30018",
    "type": "Seller App",
    "message": "Invalid Order"
  },
  30019: {
    "code": "30019",
    "type": "Seller App",
    "message": "Order Confirm Error"
  },
  30020: {
    "code": "30020",
    "type": "Seller App",
    "message": "Order Confirm Failure"
  },
  30021: {
    "code": "30021",
    "type": "Seller App",
    "message": "Merchant Inactive"
  },
  30022: {
    "code": "30022",
    "type": "Seller App",
    "message": "Stale Request"
  },
  40000: {
    "code": "40000",
    "type": "Seller App",
    "message": "Business Error"
  },
  40001: {
    "code": "40001",
    "type": "Seller App",
    "message": "Action not applicable"
  },
  40002: {
    "code": "40002",
    "type": "Seller App",
    "message": "Item quantity unavailable"
  },
  40003: {
    "code": "40003",
    "type": "Seller App",
    "message": "Quote unavailable"
  },
  40004: {
    "code": "40004",
    "type": "Seller App",
    "message": "Payment not supported"
  },
  40005: {
    "code": "40005",
    "type": "Seller App",
    "message": "Tracking not supported"
  },
  40006: {
    "code": "40006",
    "type": "Seller App",
    "message": "Fulfilment agent unavailable"
  },
  50000: {
    "code": "50000",
    "type": "Seller App",
    "message": "Policy Error"
  },
  50001: {
    "code": "50001",
    "type": "Seller App",
    "message": "Cancellation not possible"
  },
  50002: {
    "code": "50002",
    "type": "Seller App",
    "message": "Updation not possible"
  },
  50003: {
    "code": "50003",
    "type": "Seller App",
    "message": "Unsupported rating category"
  },
  50004: {
    "code": "50004",
    "type": "Seller App",
    "message": "Support unavailable"
  },
  50005: {
    "code": "50005",
    "type": "Seller App",
    "message": "Terms unacceptable"
  },
  50006: {
    "code": "50006",
    "type": "Seller App",
    "message": "Order terminated"
  },
  60001: {
    "code": "60001",
    "type": "Logistics",
    "message": "Location Serviceability Error"
  },
  60002: {
    "code": "60002",
    "type": "Logistics",
    "message": "Location Serviceability Error"
  },
  60003: {
    "code": "60003",
    "type": "Logistics",
    "message": "Location Serviceability Error"
  },
  60004: {
    "code": "60004",
    "type": "Logistics",
    "message": "Order Serviceability Error"
  },
  60005: {
    "code": "60005",
    "type": "Logistics",
    "message": "Invalid Signature"
  },
  60006: {
    "code": "60006",
    "type": "Logistics",
    "message": "Invalid Request"
  },
  60007: {
    "code": "60007",
    "type": "Logistics",
    "message": "Policy Error"
  },
  62501: {
    "code": "62501",
    "type": "Logistics",
    "message": "Terms unacceptable"
  },
  62502: {
    "code": "62502",
    "type": "Logistics",
    "message": "Order terminated"
  },
  62503: {
    "code": "62503",
    "type": "Logistics",
    "message": "RTO rejected"
  },
  65001: {
    "code": "65001",
    "type": "Logistics",
    "message": "Order Confirm Error"
  },
  65002: {
    "code": "65002",
    "type": "Logistics",
    "message": "Order terminated"
  },
  65003: {
    "code": "65003",
    "type": "Logistics",
    "message": "Stale Request"
  }
};
export default ONDC_ERRORS;