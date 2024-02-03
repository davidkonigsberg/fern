/**
 * This file was auto-generated by Fern from our API Definition.
 */

package resources.service;

import java.lang.Integer;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping(
    path = "/{serviceParam}"
)
public interface ServiceService {
  @PostMapping("/{endpointParam}")
  void post(@PathVariable("endpointParam") Integer endpointParam);
}