/**
 * This file was auto-generated by Fern from our API Definition.
 */

package resources.types.types;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.annotation.Nulls;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import core.ObjectMappers;
import java.lang.Object;
import java.lang.String;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;
import resources.commons.types.types.Tag;

@JsonInclude(JsonInclude.Include.NON_EMPTY)
@JsonDeserialize(
    builder = Movie.Builder.class
)
public final class Movie implements IMovie {
  private final MovieId id;

  private final Optional<MovieId> prequel;

  private final String title;

  private final String from;

  private final double rating;

  private final Tag tag;

  private final Optional<String> book;

  private final Map<String, Object> metadata;

  private Movie(MovieId id, Optional<MovieId> prequel, String title, String from, double rating,
      Tag tag, Optional<String> book, Map<String, Object> metadata) {
    this.id = id;
    this.prequel = prequel;
    this.title = title;
    this.from = from;
    this.rating = rating;
    this.tag = tag;
    this.book = book;
    this.metadata = metadata;
  }

  @JsonProperty("id")
  @java.lang.Override
  public MovieId getId() {
    return id;
  }

  @JsonProperty("prequel")
  @java.lang.Override
  public Optional<MovieId> getPrequel() {
    return prequel;
  }

  @JsonProperty("title")
  @java.lang.Override
  public String getTitle() {
    return title;
  }

  @JsonProperty("from")
  @java.lang.Override
  public String getFrom() {
    return from;
  }

  /**
   * @return The rating scale is one to five stars
   */
  @JsonProperty("rating")
  @java.lang.Override
  public double getRating() {
    return rating;
  }

  @JsonProperty("type")
  @java.lang.Override
  public String getType() {
    return "movie";
  }

  @JsonProperty("tag")
  @java.lang.Override
  public Tag getTag() {
    return tag;
  }

  @JsonProperty("book")
  @java.lang.Override
  public Optional<String> getBook() {
    return book;
  }

  @JsonProperty("metadata")
  @java.lang.Override
  public Map<String, Object> getMetadata() {
    return metadata;
  }

  @java.lang.Override
  public boolean equals(Object other) {
    if (this == other) return true;
    return other instanceof Movie && equalTo((Movie) other);
  }

  private boolean equalTo(Movie other) {
    return id.equals(other.id) && prequel.equals(other.prequel) && title.equals(other.title) && from.equals(other.from) && rating == other.rating && tag.equals(other.tag) && book.equals(other.book) && metadata.equals(other.metadata);
  }

  @java.lang.Override
  public int hashCode() {
    return Objects.hash(this.id, this.prequel, this.title, this.from, this.rating, this.tag, this.book, this.metadata);
  }

  @java.lang.Override
  public String toString() {
    return ObjectMappers.stringify(this);
  }

  public static IdStage builder() {
    return new Builder();
  }

  public interface IdStage {
    TitleStage id(MovieId id);

    Builder from(Movie other);
  }

  public interface TitleStage {
    FromStage title(String title);
  }

  public interface FromStage {
    RatingStage from(String from);
  }

  public interface RatingStage {
    TagStage rating(double rating);
  }

  public interface TagStage {
    _FinalStage tag(Tag tag);
  }

  public interface _FinalStage {
    Movie build();

    _FinalStage prequel(Optional<MovieId> prequel);

    _FinalStage prequel(MovieId prequel);

    _FinalStage book(Optional<String> book);

    _FinalStage book(String book);

    _FinalStage metadata(Map<String, Object> metadata);

    _FinalStage putAllMetadata(Map<String, Object> metadata);

    _FinalStage metadata(String key, Object value);
  }

  @JsonIgnoreProperties(
      ignoreUnknown = true
  )
  public static final class Builder implements IdStage, TitleStage, FromStage, RatingStage, TagStage, _FinalStage {
    private MovieId id;

    private String title;

    private String from;

    private double rating;

    private Tag tag;

    private Map<String, Object> metadata = new LinkedHashMap<>();

    private Optional<String> book = Optional.empty();

    private Optional<MovieId> prequel = Optional.empty();

    private Builder() {
    }

    @java.lang.Override
    public Builder from(Movie other) {
      id(other.getId());
      prequel(other.getPrequel());
      title(other.getTitle());
      from(other.getFrom());
      rating(other.getRating());
      tag(other.getTag());
      book(other.getBook());
      metadata(other.getMetadata());
      return this;
    }

    @java.lang.Override
    @JsonSetter("id")
    public TitleStage id(MovieId id) {
      this.id = id;
      return this;
    }

    @java.lang.Override
    @JsonSetter("title")
    public FromStage title(String title) {
      this.title = title;
      return this;
    }

    @java.lang.Override
    @JsonSetter("from")
    public RatingStage from(String from) {
      this.from = from;
      return this;
    }

    /**
     * <p>The rating scale is one to five stars</p>
     * @return Reference to {@code this} so that method calls can be chained together.
     */
    @java.lang.Override
    @JsonSetter("rating")
    public TagStage rating(double rating) {
      this.rating = rating;
      return this;
    }

    @java.lang.Override
    @JsonSetter("tag")
    public _FinalStage tag(Tag tag) {
      this.tag = tag;
      return this;
    }

    @java.lang.Override
    public _FinalStage metadata(String key, Object value) {
      this.metadata.put(key, value);
      return this;
    }

    @java.lang.Override
    public _FinalStage putAllMetadata(Map<String, Object> metadata) {
      this.metadata.putAll(metadata);
      return this;
    }

    @java.lang.Override
    @JsonSetter(
        value = "metadata",
        nulls = Nulls.SKIP
    )
    public _FinalStage metadata(Map<String, Object> metadata) {
      this.metadata.clear();
      this.metadata.putAll(metadata);
      return this;
    }

    @java.lang.Override
    public _FinalStage book(String book) {
      this.book = Optional.of(book);
      return this;
    }

    @java.lang.Override
    @JsonSetter(
        value = "book",
        nulls = Nulls.SKIP
    )
    public _FinalStage book(Optional<String> book) {
      this.book = book;
      return this;
    }

    @java.lang.Override
    public _FinalStage prequel(MovieId prequel) {
      this.prequel = Optional.of(prequel);
      return this;
    }

    @java.lang.Override
    @JsonSetter(
        value = "prequel",
        nulls = Nulls.SKIP
    )
    public _FinalStage prequel(Optional<MovieId> prequel) {
      this.prequel = prequel;
      return this;
    }

    @java.lang.Override
    public Movie build() {
      return new Movie(id, prequel, title, from, rating, tag, book, metadata);
    }
  }
}
