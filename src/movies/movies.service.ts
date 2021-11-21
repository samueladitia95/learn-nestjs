import { Injectable } from "@nestjs/common";
import { CreateMovieDto } from "./dto";
import { Movie } from "./interfaces";

@Injectable()
export class MoviesService {
  private readonly movies: Movie[] = [];

  findAll(): Movie[] {
    return this.movies;
  }

  findLast(): Movie {
    return this.movies[this.movies.length - 1];
  }

  create(movie: CreateMovieDto) {
    const id = this.movies[this.movies.length - 1].id + 1;
    const newMovie: Movie = {
      id,
      ...movie,
    };
    this.movies.push(newMovie);
  }
}
