export class ApiError {
    status: number;
    message: string;
    metadata?: unknown;

    constructor(status: number, message: string, metadata?: unknown) {
        this.status = status;
        this.message = message;
        this.metadata = metadata;
    }
}
