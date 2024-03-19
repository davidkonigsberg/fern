/**
 * This file was auto-generated by Fern from our API Definition.
 */

package resources.types.types;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import com.fasterxml.jackson.annotation.JsonTypeName;
import com.fasterxml.jackson.annotation.JsonValue;
import java.lang.Object;
import java.lang.String;
import java.time.OffsetDateTime;
import java.util.Objects;
import java.util.Optional;

public final class UnionWithOptionalTime {
  private final Value value;

  @JsonCreator(
      mode = JsonCreator.Mode.DELEGATING
  )
  private UnionWithOptionalTime(Value value) {
    this.value = value;
  }

  public <T> T visit(Visitor<T> visitor) {
    return value.visit(visitor);
  }

  public static UnionWithOptionalTime date(Optional<String> value) {
    return new UnionWithOptionalTime(new DateValue(value));
  }

  public static UnionWithOptionalTime dateimte(Optional<OffsetDateTime> value) {
    return new UnionWithOptionalTime(new DateimteValue(value));
  }

  public boolean isDate() {
    return value instanceof DateValue;
  }

  public boolean isDateimte() {
    return value instanceof DateimteValue;
  }

  public boolean _isUnknown() {
    return value instanceof _UnknownValue;
  }

  public Optional<Optional<String>> getDate() {
    if (isDate()) {
      return Optional.of(((DateValue) value).value);
    }
    return Optional.empty();
  }

  public Optional<Optional<OffsetDateTime>> getDateimte() {
    if (isDateimte()) {
      return Optional.of(((DateimteValue) value).value);
    }
    return Optional.empty();
  }

  public Optional<Object> _getUnknown() {
    if (_isUnknown()) {
      return Optional.of(((_UnknownValue) value).value);
    }
    return Optional.empty();
  }

  @JsonValue
  private Value getValue() {
    return this.value;
  }

  public interface Visitor<T> {
    T visitDate(Optional<String> date);

    T visitDateimte(Optional<OffsetDateTime> dateimte);

    T _visitUnknown(Object unknownType);
  }

  @JsonTypeInfo(
      use = JsonTypeInfo.Id.NAME,
      property = "type",
      visible = true,
      defaultImpl = _UnknownValue.class
  )
  @JsonSubTypes({
      @JsonSubTypes.Type(DateValue.class),
      @JsonSubTypes.Type(DateimteValue.class)
  })
  @JsonIgnoreProperties(
      ignoreUnknown = true
  )
  private interface Value {
    <T> T visit(Visitor<T> visitor);
  }

  @JsonTypeName("date")
  private static final class DateValue implements Value {
    @JsonProperty("value")
    private Optional<String> value;

    @JsonCreator(
        mode = JsonCreator.Mode.PROPERTIES
    )
    private DateValue(@JsonProperty("value") Optional<String> value) {
      this.value = value;
    }

    @java.lang.Override
    public <T> T visit(Visitor<T> visitor) {
      return visitor.visitDate(value);
    }

    @java.lang.Override
    public boolean equals(Object other) {
      if (this == other) return true;
      return other instanceof DateValue && equalTo((DateValue) other);
    }

    private boolean equalTo(DateValue other) {
      return value.equals(other.value);
    }

    @java.lang.Override
    public int hashCode() {
      return Objects.hash(this.value);
    }

    @java.lang.Override
    public String toString() {
      return "UnionWithOptionalTime{" + "value: " + value + "}";
    }
  }

  @JsonTypeName("dateimte")
  private static final class DateimteValue implements Value {
    @JsonProperty("value")
    private Optional<OffsetDateTime> value;

    @JsonCreator(
        mode = JsonCreator.Mode.PROPERTIES
    )
    private DateimteValue(@JsonProperty("value") Optional<OffsetDateTime> value) {
      this.value = value;
    }

    @java.lang.Override
    public <T> T visit(Visitor<T> visitor) {
      return visitor.visitDateimte(value);
    }

    @java.lang.Override
    public boolean equals(Object other) {
      if (this == other) return true;
      return other instanceof DateimteValue && equalTo((DateimteValue) other);
    }

    private boolean equalTo(DateimteValue other) {
      return value.equals(other.value);
    }

    @java.lang.Override
    public int hashCode() {
      return Objects.hash(this.value);
    }

    @java.lang.Override
    public String toString() {
      return "UnionWithOptionalTime{" + "value: " + value + "}";
    }
  }

  private static final class _UnknownValue implements Value {
    private String type;

    @JsonValue
    private Object value;

    @JsonCreator(
        mode = JsonCreator.Mode.PROPERTIES
    )
    private _UnknownValue(@JsonProperty("value") Object value) {
    }

    @java.lang.Override
    public <T> T visit(Visitor<T> visitor) {
      return visitor._visitUnknown(value);
    }

    @java.lang.Override
    public boolean equals(Object other) {
      if (this == other) return true;
      return other instanceof _UnknownValue && equalTo((_UnknownValue) other);
    }

    private boolean equalTo(_UnknownValue other) {
      return type.equals(other.type) && value.equals(other.value);
    }

    @java.lang.Override
    public int hashCode() {
      return Objects.hash(this.type, this.value);
    }

    @java.lang.Override
    public String toString() {
      return "UnionWithOptionalTime{" + "type: " + type + ", value: " + value + "}";
    }
  }
}
