import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { AuthGuard } from './guards/auth.guard';
import { FormDeactivateGuard } from './guards/form-deactivate.guard';
import { ListaComponent } from './lista/lista.component';
import { LoginComponent } from './login/login.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

const routes: Routes = [
  {
   path:'login' , component: LoginComponent
  },
  {
    path: 'lista', component:ListaComponent,
    canActivate: [AuthGuard]
 },
 {
  path: 'cadastrar', component: FormComponent,
  canActivate: [AuthGuard],
  canDeactivate: [FormDeactivateGuard]
},
 {
  path: '', 
 pathMatch:'full', redirectTo:'cadastrar'
 },
 {
  path:'**', component: PaginaNaoEncontradaComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
