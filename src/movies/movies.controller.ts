import { Controller, Get, HttpCode, Query } from "@nestjs/common";

@Controller("movies")
export class MoviesController {
  @Get()
  @HttpCode(200)
  findAll(): Array<string> {
    return ["Kitty", "Katty"];
  }
}
