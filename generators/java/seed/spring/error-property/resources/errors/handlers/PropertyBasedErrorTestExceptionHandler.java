/**
 * This file was auto-generated by Fern from our API Definition.
 */

package resources.errors.handlers;

import core.ErrorBody;
import java.lang.Object;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import resources.errors.exceptions.PropertyBasedErrorTest;

@RestControllerAdvice
public final class PropertyBasedErrorTestExceptionHandler {
  @ExceptionHandler(PropertyBasedErrorTest.class)
  ResponseEntity<Object> handle(PropertyBasedErrorTest propertyBasedErrorTest) {
    ErrorBody body = new ErrorBody<>(PropertyBasedErrorTest.ERROR_NAME, propertyBasedErrorTest.getBody());
    return new ResponseEntity<>(body, null, PropertyBasedErrorTest.STATUS_CODE);
  }
}