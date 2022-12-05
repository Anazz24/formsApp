import { StorageService } from './../services/storage.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Produtos } from './../models/produtos';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
})
export class ProdutosPage implements OnInit {
  formProdutos: FormGroup;
  produtos: Produtos = new Produtos();
  mensagens = {
    nome: [
      {tipo:'required', mensagem:'O Campo é Obrigatório'},
      {tipo:'minlength', mensagem: 'O campo precisa ter pelo menos 3 caracteres!'}
    ],
    descricao:[  {tipo:'required', mensagem:'O Campo é Obrigatório'}],
    validade:[  {tipo:'required', mensagem:'O Campo é Obrigatório'}],
    preco:[ {tipo:'required', mensagem:'O Campo é Obrigatório'}],
  };

  constructor(private FormBuilder: FormBuilder, private StorageService: StorageService, private route: Router)
  { this.formProdutos = this.FormBuilder.group({
        nome: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
        descricao: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
        validade: ['', Validators.compose([Validators.required, Validators.minLength(7)])],
        preco: ['', Validators.compose([Validators.required, Validators.minLength(8)])],

      });
    }

    ngOnInit() {
    }
    async salvarProduto() {
      if(this.formProdutos.valid){
        this.produtos.nome = this.formProdutos.value.nome;
        this.produtos.descricao = this.formProdutos.value.descricao;
        this.produtos.validade = this.formProdutos.value.validade;
        this.produtos.preco = this.formProdutos.value.preco;
        await this.StorageService.set(this.produtos.nome, this.produtos);
        this.route.navigateByUrl('tabs/tab1');
      } else {
        alert('Formulário Inválido!');
      }
    }

}
