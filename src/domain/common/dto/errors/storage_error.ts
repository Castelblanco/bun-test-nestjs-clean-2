import { HttpErrorCode } from '../enums/errors_enum';
import { BaseError } from './base_error';

export class StorageError extends BaseError {
    constructor(metadata?: unknown) {
        super(
            'Storage error',
            HttpErrorCode.INTERNAL_SERVER_ERROR,
            HttpErrorCode.BAD_REQUEST,
            metadata,
        );
    }
}
