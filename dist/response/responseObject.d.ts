export declare class ResponseObject {
    private statusCode;
    private message;
    private data;
    constructor(statusCode: number, message: string, data: Object);
    getStatusCode(): number;
    setStatusCode(value: number): void;
    getMessage(): string;
    setMessage(value: string): void;
    getData(): Object;
    setData(value: Object): void;
}
