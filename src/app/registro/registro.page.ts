import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formRegistro: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formRegistro = this.formBuilder.group({
      nome: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      cpf: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      senha: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(8)]],
      confirmarSenha: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(8)]]
    });

   }

  ngOnInit() {
  }

  salvarRegistro(){
    console.log('Formulário: ', this.formRegistro.valid);
  }

}
