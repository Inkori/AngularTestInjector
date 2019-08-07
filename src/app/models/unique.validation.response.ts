import {HttpErrorResponse} from '@angular/common/http';
import {of, throwError} from 'rxjs';

export class UniqueValidationResponse {

  constructor(public readonly exist: boolean) {
  }
}

export const mapToUniqueValidationResponse = (error: HttpErrorResponse) => {
  if (error.status === 404) {
    return of(new UniqueValidationResponse(false));
  }

  return throwError(error);
};
