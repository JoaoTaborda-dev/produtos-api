import { Injectable } from "@nestjs/common";
import { Livro } from "./livro_model";


@Injectable()
export class LivrosService {
  livros: Livro[] = [
    new Livro("LIV01", "Livro TDD e BDD na prática", 29.00),
    new Livro("LIV02", "Iniciando com flutter", 39.00),
    new Livro("LIV03", "inteligência artificial como serviço", 29.00)
  ];

  obterTodos(): Livro[] {
    return this.livros;
  }

  obterUm(id: number): Livro {
    return this.livros[0];
  }

  criar(livro: Livro) {
    this.livros.push(livro);
  }

  alterar(livro: Livro): Livro {
    return livro;
  }

  apagar(id: number) {
    this.livros.pop();
  }
}