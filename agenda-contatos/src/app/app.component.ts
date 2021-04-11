import { Component} from '@angular/core';
import { isObservable, observable, Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'agenda-contatos';

  showMenu:boolean = false  

  constructor(private authService: AuthService){
    
  }

  ngOnInit(): void {
    this.authService.showMenuEmitter.subscribe(
      mostrar => this.showMenu = mostrar
    )
  }

}
