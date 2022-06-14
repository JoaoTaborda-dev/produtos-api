import { Injectable } from "@nestjs/common";
import { Produto } from "./produto_model";


@Injectable()
export class ProdutosService {
  produtos: Produto[] = [
    new Produto("LIV01", "Livro TDD e BDD na prática", 29.00),
    new Produto("LIV02", "Iniciando com flutter", 39.00),
    new Produto("LIV03", "inteligência artificial como serviço", 29.00)
  ];

  obterTodos(): Produto[] {
    return this.produtos;
  }

  obterUm(id: number): Produto {
    return this.produtos[0];
  }

  criar(produto: Produto) {
    this.produtos.push(produto);
  }

  alterar(produto: Produto): Produto {
    return produto;
  }

  apagar(id: number) {
    this.produtos.pop();
  }
}