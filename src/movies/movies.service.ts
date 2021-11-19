import { Injectable } from "@nestjs/common";
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

  create(movie: Movie) {
    this.movies.push(movie);
  }
}
