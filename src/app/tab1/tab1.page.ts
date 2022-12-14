import { StorageService } from './../services/storage.service';
import { Component } from '@angular/core';
import { Usuario } from '../models/Usuario';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  listaUsuarios: Usuario[] = [];

  constructor(private storageService: StorageService) {}

  async buscarUsuarios(){
    this.listaUsuarios = await this.storageService.getAll();
  }

  ionViewDidEnter(){
    this.buscarUsuarios();
  }

  async excluirRegistro(email: string){
    await this.storageService.remove(email);
    this.buscarUsuarios();
  }

}
