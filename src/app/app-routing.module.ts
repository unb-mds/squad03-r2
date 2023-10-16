import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importe os componentes que você deseja associar às rotas
import { AppComponent } from './app.component';
import { SobreComponent } from './sobre/sobre/sobre.component';

const routes: Routes = [
  { path: '', component: AppComponent},
  { path: 'about', component: SobreComponent } // Rota Sobre
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }