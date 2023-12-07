"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseObject = void 0;
class ResponseObject {
    constructor(statusCode, message, data) {
        this.statusCode = statusCode;
        this.message = message;
        this.data = data;
    }
    getStatusCode() {
        return this.statusCode;
    }
    setStatusCode(value) {
        this.statusCode = value;
    }
    getMessage() {
        return this.message;
    }
    setMessage(value) {
        this.message = value;
    }
    getData() {
        return this.data;
    }
    setData(value) {
        this.data = value;
    }
}
exports.ResponseObject = ResponseObject;
//# sourceMappingURL=responseObject.js.map