import { HttpErrorCode } from '../enums/errors_enum';
import { BaseError } from './base_error';

export class ErrorBadRequest extends BaseError {
    constructor(message: string, metadata?: unknown) {
        super(
            `${message}`,
            HttpErrorCode.BAD_REQUEST,
            HttpErrorCode.BAD_REQUEST,
            metadata,
        );
    }
}
