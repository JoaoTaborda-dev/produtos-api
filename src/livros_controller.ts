import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { LivrosService } from "./livros_services";
import { Livro } from "./livro_model";

@Controller('livros')
export class LivrosController {
  constructor(private livrosService: LivrosService) {

  }

  @Get()
  async obterTodos(): Promise<Livro[]> {
    return this.livrosService.obterTodos();
  }

  @Get(':id')
  async obterUm(@Param() params): Promise<Livro> {
    return this.livrosService.obterUm(params.id);
  }

  @Post()
  async criar(@Body() livros: Livro) {
    this.livrosService.criar(livros);
  }

  @Put()
  async alterar(@Body() livros: Livro): Promise<[number, Livro[]]> {
    return this.livrosService.alterar(livros);
  }

  @Delete(':id')
  async apagar(@Param() params) {
    this.livrosService.apagar(params.id);
  }
}