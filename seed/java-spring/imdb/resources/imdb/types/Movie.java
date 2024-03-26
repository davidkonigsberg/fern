/**
 * This file was auto-generated by Fern from our API Definition.
 */

package resources.imdb.types;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import core.ObjectMappers;
import java.lang.Object;
import java.lang.String;
import java.util.Objects;

@JsonInclude(JsonInclude.Include.NON_EMPTY)
@JsonDeserialize(
    builder = Movie.Builder.class
)
public final class Movie {
  private final MovieId id;

  private final String movieTitle;

  private final double movieRating;

  private Movie(MovieId id, String movieTitle, double movieRating) {
    this.id = id;
    this.movieTitle = movieTitle;
    this.movieRating = movieRating;
  }

  @JsonProperty("_id")
  public MovieId getId() {
    return id;
  }

  @JsonProperty("movie_title")
  public String getMovieTitle() {
    return movieTitle;
  }

  /**
   * @return The rating scale is one to five stars
   */
  @JsonProperty("movie_rating")
  public double getMovieRating() {
    return movieRating;
  }

  @java.lang.Override
  public boolean equals(Object other) {
    if (this == other) return true;
    return other instanceof Movie && equalTo((Movie) other);
  }

  private boolean equalTo(Movie other) {
    return id.equals(other.id) && movieTitle.equals(other.movieTitle) && movieRating == other.movieRating;
  }

  @java.lang.Override
  public int hashCode() {
    return Objects.hash(this.id, this.movieTitle, this.movieRating);
  }

  @java.lang.Override
  public String toString() {
    return ObjectMappers.stringify(this);
  }

  public static IdStage builder() {
    return new Builder();
  }

  public interface IdStage {
    MovieTitleStage id(MovieId id);

    Builder from(Movie other);
  }

  public interface MovieTitleStage {
    MovieRatingStage movieTitle(String movieTitle);
  }

  public interface MovieRatingStage {
    _FinalStage movieRating(double movieRating);
  }

  public interface _FinalStage {
    Movie build();
  }

  @JsonIgnoreProperties(
      ignoreUnknown = true
  )
  public static final class Builder implements IdStage, MovieTitleStage, MovieRatingStage, _FinalStage {
    private MovieId id;

    private String movieTitle;

    private double movieRating;

    private Builder() {
    }

    @java.lang.Override
    public Builder from(Movie other) {
      id(other.getId());
      movieTitle(other.getMovieTitle());
      movieRating(other.getMovieRating());
      return this;
    }

    @java.lang.Override
    @JsonSetter("_id")
    public MovieTitleStage id(MovieId id) {
      this.id = id;
      return this;
    }

    @java.lang.Override
    @JsonSetter("movie_title")
    public MovieRatingStage movieTitle(String movieTitle) {
      this.movieTitle = movieTitle;
      return this;
    }

    /**
     * <p>The rating scale is one to five stars</p>
     * @return Reference to {@code this} so that method calls can be chained together.
     */
    @java.lang.Override
    @JsonSetter("movie_rating")
    public _FinalStage movieRating(double movieRating) {
      this.movieRating = movieRating;
      return this;
    }

    @java.lang.Override
    public Movie build() {
      return new Movie(id, movieTitle, movieRating);
    }
  }
}
