import { Body, Controller, Get, HttpCode, Post } from "@nestjs/common";
import { CreateMovieDto } from "./dto";
import { MoviesService } from "./movies.service";
import { Movie } from "./interfaces";

@Controller("movies")
export class MoviesController {
  constructor(private moviesService: MoviesService) {}

  @Get()
  @HttpCode(200)
  findAll(): Array<Movie> {
    return this.moviesService.findAll();
  }

  @Post()
  create(@Body() createMovieDto: CreateMovieDto): Movie {
    this.moviesService.create(createMovieDto);
    return this.moviesService.findLast();
  }
}
