import { Body, Controller, Get, HttpCode, Post } from "@nestjs/common";
import { CreateMovieDto } from "./dto";

@Controller("movies")
export class MoviesController {
  @Get()
  @HttpCode(200)
  findAll(): Array<string> {
    return ["Kitty", "Katty"];
  }

  @Post()
  create(@Body() createMovieDto: CreateMovieDto): string {
    return `Title: ${createMovieDto.title}`;
  }
}
