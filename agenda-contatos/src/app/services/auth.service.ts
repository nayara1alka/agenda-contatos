import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../login/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private userAutenticado:boolean = false;

  showMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }


  fazerLogin(usuario: Usuario){
    if(usuario.nome === 'usuario@email.com' && usuario.senha === '123456'){
         this.userAutenticado = true;

         this.showMenuEmitter.emit(true);

         this.router.navigate(['/lista']);
    }else{
      this.showMenuEmitter.emit(false);
      this.userAutenticado = false;
    }
         
  }

  userEstaAutenticado(){
     return this.userAutenticado
  }

}
