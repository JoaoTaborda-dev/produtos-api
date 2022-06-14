import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { LivrosService } from "./livros_services";
import { Livro } from "./livro_model";

@Controller('livros')
export class LivrosController {
  constructor(private livrosService: LivrosService) {

  }

  @Get()
  obterTodos(): Livro[] {
    return this.livrosService.obterTodos();
  }

  @Get(':id')
  obterUm(@Param() params): Livro {
    return this.livrosService.obterUm(params.id);
  }

  @Post()
  criar(@Body() livros: Livro) {
    this.livrosService.criar(livros);
  }

  @Put()
  alterar(@Body() livros: Livro): Livro {
    return this.livrosService.alterar(livros);
  }

  @Delete(':id')
  apagar(@Param() params) {
    this.livrosService.apagar(params.id);
  }
}