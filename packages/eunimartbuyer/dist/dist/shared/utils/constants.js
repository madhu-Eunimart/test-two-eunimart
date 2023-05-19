// Constant Values or ENUMS

export const SYSTEM_ROLES = {
  SUPER_ADMIN: 'SUPER_ADMIN'
};
export const EMAIL_TEMPLATES = {
  FORGOT_PASSWORD: 'FORGOT_PASSWORD',
  SIGN_UP: 'SIGN_UP',
  REGISTER: 'REGISTER',
  RESEND_OTP: 'RESEND_OTP',
  WELCOME: 'WELCOME',
  RESET_PASSWORD_SUCCESS: 'RESET_PASSWORD_SUCCESS',
  INVITE: 'INVITE',
  USER_ACTIVITY: 'USER_ACTIVITY',
  EXCEPTION: 'EXCEPTION',
  EVENT_UPDATE: 'EVENT_UPDATE',
  EVENT_CANCEL: 'EVENT_CANCEL',
  ORDER_BOOKED: 'ORDER_BOOKED',
  ORDER_CANCEL: 'ORDER_CANCEL'
};
export const RESOURCE_POSSESSION = {
  OWN: 'OWN',
  ANY: 'ANY',
  SUB: 'SUB'
};
export const HEADERS = {
  ACCESS_TOKEN: 'access-token',
  AUTH_TOKEN: 'Authorization'
};
export const PAYMENT_TYPES = {
  "ON-ORDER": "ON-ORDER",
  "PRE-FULFILLMENT": "PRE-FULFILLMENT",
  "ON-FULFILLMENT": "ON-FULFILLMENT",
  "POST-FULFILLMENT": "POST-FULFILLMENT"
};
export const TL_METHOD = {
  GET: "http/get",
  POST: "http/post"
};
export const PROTOCOL_CONTEXT = {
  CANCEL: "cancel",
  ON_CANCEL: "on_cancel",
  RETURN: "return",
  ON_RETURN: "on_return",
  CONFIRM: "confirm",
  ON_CONFIRM: "on_confirm",
  INIT: "init",
  ON_INIT: "on_init",
  SEARCH: "search",
  ON_SEARCH: "on_search",
  TRACK: "track",
  ON_TRACK: "on_track",
  SUPPORT: "support",
  ON_SUPPORT: "on_support",
  STATUS: "status",
  ON_STATUS: "on_status",
  SELECT: "select",
  ON_SELECT: "on_select",
  UPDATE: "update",
  ON_UPDATE: "on_update",
  RATING: "rating",
  ON_RATING: "on_rating",
  GET_RATING_CATEGORIES: "get_rating_categories",
  RATING_CATEGORIES: "rating_categories",
  GET_FEEDBACK_CATEGORIES: "get_feedback_categories",
  FEEDBACK_CATEGORIES: "feedback_categories",
  GET_FEEDBACK_FORM: "get_feedback_form",
  FEEDBACK_FORM: "feedback_form",
  ISSUE: "issue",
  ON_ISSUE: "on_issue",
  ISSUE_STATUS: "issue_status",
  ON_ISSUE_STATUS: "on_issue_status"
};
export const PROTOCOL_PAYMENT = {
  PAID: "PAID",
  "NOT-PAID": "NOT-PAID"
};
export const SETTLEMENT_STATUS = {
  SETTLED: "SETTLED",
  PENDING: "PENDING",
  FAILED: "FAILED"
};
export const FEE_TYPE = {
  PERCENT: "percent",
  AMOUNT: "amount"
};
export const PROTOCOL_VERSION = {
  v_0_9_1: "0.9.1",
  v_0_9_3: "0.9.3",
  v_1_0_0: "1.0.0",
  v_1_1_0: "1.1.0",
  igm_v_1_0_0: "1.0.0"
};
export const SUBSCRIBER_TYPE = {
  BAP: "BAP",
  BPP: "BPP",
  BG: "BG",
  LREG: "LREG",
  CREG: "CREG",
  RREG: "RREG"
};
export const JUSPAY_PAYMENT_STATUS = {
  NEW: {
    id: 10,
    status: "NEW"
  },
  PENDING_VBV: {
    id: 23,
    status: "PENDING_VBV"
  },
  VBV_SUCCESSFUL: {
    id: 24,
    status: "VBV_SUCCESSFUL"
  },
  CHARGED: {
    id: 21,
    status: "CHARGED"
  },
  AUTHENTICATION_FAILED: {
    id: 26,
    status: "AUTHENTICATION_FAILED"
  },
  AUTHORIZATION_FAILED: {
    id: 27,
    status: "AUTHORIZATION_FAILED"
  },
  JUSPAY_DECLINED: {
    id: 22,
    status: "JUSPAY_DECLINED"
  },
  AUTHORIZING: {
    id: 28,
    status: "AUTHORIZING"
  },
  COD_INITIATED: {
    id: 29,
    status: "COD_INITIATED"
  },
  STARTED: {
    id: 20,
    status: "STARTED"
  },
  AUTO_REFUNDED: {
    id: 36,
    status: "AUTO_REFUNDED"
  },
  CAPTURE_INITIATED: {
    id: 33,
    status: "CAPTURE_INITIATED"
  },
  CAPTURE_FAILED: {
    id: 34,
    status: "CAPTURE_FAILED"
  },
  VOID_INITIATED: {
    id: 32,
    status: "VOID_INITIATED"
  },
  VOIDED: {
    id: 31,
    status: "VOIDED"
  },
  VOID_FAILED: {
    id: 35,
    status: "VOID_FAILED"
  },
  NOT_FOUND: {
    id: 40,
    status: "NOT_FOUND"
  }
};
export const PAYMENT_COLLECTED_BY = {
  BAP: "BAP",
  BPP: "BPP",
  EMPTY: ""
};
export const PAYMENT_COLLECTED_BY_STATUS = {
  ASSERT: "Assert",
  AGREE: "Agree",
  DISAGREE: "Disagree",
  TERMINATE: "Terminate",
  EMPTY: ""
};
export const RETAIL_ORDER_STATE = {
  COMPLETED: "Completed",
  IN_PROGRESS: "In-progress",
  CREATED: "Created",
  ACCEPTED: "Accepted",
  CANCELLED: "Cancelled"
};
export const LOGISTICS_ORDER_STATE = {
  CREATED: "created",
  ACCEPTED: "accepted",
  IN_PROGRESS: "in_progress",
  COMPLETED: "completed",
  CANCELLED: "cancelled"
};
export const RETAIL_FULFILLMENT_STATE = {
  SERVICEABLE: "Serviceable",
  NON_SERVICEABLE: "Non-serviceable",
  PENDING: "Pending",
  PACKED: "Packed",
  ORDER_PICKED_UP: "Order-picked-up",
  OUT_FOR_DELIVERY: "Out-for-delivery",
  ORDER_DELIVERED: "Order-delivered",
  RTO_INITIATED: "RTO-Initiated",
  RTO_DELIVERED: "RTO-Delivered",
  RTO_DISPOSED: "RTO-Disposed",
  CANCELLED: "Cancelled"
};
export const LOGISTICS_FULFILLMENT_STATE = {
  PENDING: "pending",
  SEARCHING_FOR_AGENT: "searching_for_agent",
  AGENT_ASSIGNED: "agent_assigned",
  ORDER_PICKED_UP: "order_picked_up",
  OUT_FOR_DELIVERY: "out_for_delivery",
  ORDER_DELIVERED: "order_delivered",
  RTO_INTITATED: "rto_initiated",
  RTO_DELIVERED: "rto_delivered",
  RTO_DISPOSED: "rto_disposed",
  CANCELLED: "cancelled"
};

// Default Values in Paylods

export const DEFAULT_FULFILLMENTS = [{
  "id": "1",
  "type": "Delivery"
}];
export const DEFAULT_DESCRIPTOR = {
  "name": "Siva store",
  "short_desc": "Siva for ONDC",
  "long_desc": "Siva is a universal open-source platform for commerce and supply chain. With its Platform-as-a-Service and integration-Platform-as-a-service capabilities, Siva is a truly interoperable solution, with more than 100 ready-made solutions at the door.",
  "images": ["https://siva3.io/web/image/website/1/logo/Siva%20%7C%20Commerce%203.0?unique=0754639"],
  "symbol": "https://siva3.io/web/image/website/1/logo/Siva%20%7C%20Commerce%203.0?unique=0754639"
};
export const F_N_B_CATEGORIES_LIST = ["Continental", "Middle Eastern", "North Indian", "Pan-Asian", "Regional Indian", "South Indian", "Tex-Mexican", "World Cuisines", "Healthy Food", "Fast Food", "Desserts", "Bakes & Cakes", "Beverages (MTO)", "Beverages"];
export const rsp_actions = {
  COLLECTOR_RECON: "collector_recon",
  ON_COLLECTOR_RECON: "on_collector_recon",
  SETTLE: "settle",
  ON_SETTLE: "on_settle",
  RECEIVER_RECON: "receiver_recon",
  ON_RECEIVER_RECON: "on_receiver_recon",
  RECON_STATUS: "recon_status",
  ON_RECON_STATUS: "on_recon_status"
};
export const return_status = {
  RETURN_INITIATED: "Return_Initiated",
  RETURN_REJECTED: "Return_Rejected",
  RETURN_APPROVED: "Return_Approved",
  RETURN_PICKED: "Return_Picked",
  RETURN_DELIVERED: "Return_Delivered",
  LIQUIDATED: "Liquidated"
};
export const return_type = {
  DELIVERY: "Delivery",
  SELF_PICKUP: "Self-Pickup",
  REVERSE: "Reverse QC"
};
export const update_target = {
  ITEM: "item",
  BILLING: "billing"
};
export const update_type = {
  CANCEL: "cancel",
  RETURN: "return"
};
export const QUOTE_TYPE = {
  ITEM: "item",
  DELIVERY: "delivery",
  PACKING: "packing",
  TAX: "tax",
  MISC: "misc",
  DISCOUNT: "discount"
};
export const CATEGORY = {
  TRANSACTION: "TRANSACTION",
  ORDER: "ORDER",
  FULFILMENT: "FULFILMENT",
  AGENT: "AGENT",
  PAYMENT: "PAYMENT",
  ITEM: "ITEM"
};
export const ISSUE_SOURCE_TYPE = {
  CONSUMER: "CONSUMER",
  SELLER: "SELLER",
  INTERFACING_NP: "INTERFACING_NP"
};
export const STATUS = {
  OPEN: "OPEN",
  CLOSED: "CLOSED"
};
export const ISSUE_TYPE = {
  ISSUE: "ISSUE",
  GRIEVANCE: "GRIVANCE",
  DISPUTE: "DISPUTE"
};
export const COMPLAINANT_ACTION = {
  OPEN: "OPEN",
  ESCALATE: "ESCALATE",
  CLOSE: "CLOSE"
};
export const RESPONDENT_ACTION = {
  PROCESSING: "PROCESSING",
  CASCADED: "CASCADED",
  RESOLVED: "RESOLVED",
  NEED_MORE_INFO: "NEED_MORE_INFO"
};
export const RESPONDENT_INFO_TYPE = {
  INTERFACING_NP: "INTERFACING_NP",
  TRANSACTION_COUNTERPARTY_NP: "TRANSACTION_COUNTERPARTY_NP",
  CASCADED_COUNTERPARTY_NP: "CASCADED_COUNTERPARTY_NP"
};
export const ACTION_TRIGGERED = {
  REFUND: "REFUND",
  REPLACEMENT: "REPLACEMENT",
  CANCEL: "CANCEL",
  NO_ACTION: "NO_ACTION"
};
export const RESOLUTION_ACTION = {
  RESOLVE: "RESOLVE",
  REJECT: "REJECT"
};