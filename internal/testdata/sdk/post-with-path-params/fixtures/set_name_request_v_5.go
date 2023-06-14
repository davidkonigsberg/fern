// Generated by Fern. Do not edit.

package api

import (
	json "encoding/json"
	fmt "fmt"
)

type SetNameRequestV5 struct {
	XEndpointHeader string `json:"-"`
	Body            string `json:"-"`
}

func (s *SetNameRequestV5) UnmarshalJSON(data []byte) error {
	var body string
	if err := json.Unmarshal(data, &body); err != nil {
		return err
	}
	if body != "fern" {
		return fmt.Errorf("expected literal %q, but found %q", "fern", body)
	}
	s.Body = body
	return nil
}

func (s *SetNameRequestV5) MarshalJSON() ([]byte, error) {
	return json.Marshal("fern")
}
