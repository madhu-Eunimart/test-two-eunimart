const issueStatusContext = {
  "id": "/issueStatusContext",
  "type": "object",
  "required": ["domain", "action", "country", "city", "core_version", "bap_id", "bap_uri", "transaction_id", "message_id", "timestamp", "bpp_id", "bpp_uri", "ttl"],
  "additionalProperties": true,
  "properties": {
    "domain": {
      "type": "string"
    },
    "action": {
      "enum": ["issue"]
    },
    "country": {
      "type": "string"
    },
    "city": {
      "type": "string"
    },
    "core_version": {
      "type": "string"
    },
    "bap_id": {
      "type": "string"
    },
    "bap_uri": {
      "type": "string"
    },
    "bpp_id": {
      "type": "string"
    },
    "bpp_uri": {
      "type": "string"
    },
    "transaction_id": {
      "type": "string"
    },
    "message_id": {
      "type": "string"
    },
    "timestamp": {
      "type": "string"
    },
    "ttl": {
      "type": "string"
    }
  }
};
const issueStatusMessage = {
  "id": "/issueStatusMessage",
  "type": "object",
  "required": ["network_issue_id"],
  "additionalProperties": true,
  "properties": {
    "network_issue_id": {
      "type": "string"
    }
  }
};
const issueStatus = {
  "id": "/issueStatus",
  "type": "object",
  "properties": {
    "context": {
      "$ref": "/issueStatusContext"
    },
    "message": {
      "$ref": "/issueStatusMessage"
    }
  }
};
export { issueStatusContext, issueStatusMessage, issueStatus };