import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'tarefas-diarias',
    loadChildren: () => import('./tarefas-diarias/tarefas-diarias.module').then( m => m.TarefasDiariasPageModule)
  },
  {
    path: 'calendario',
    loadChildren: () => import('./calendario/calendario.module').then( m => m.CalendarioPageModule)
  },
  {
    path: 'cuidados-pessoais',
    loadChildren: () => import('./cuidados-pessoais/cuidados-pessoais.module').then( m => m.CuidadosPessoaisPageModule)
  },
  {
    path: 'primeiros-soc',
    loadChildren: () => import('./primeiros-soc/primeiros-soc.module').then( m => m.PrimeirosSocPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'relatorio',
    loadChildren: () => import('./relatorio/relatorio.module').then( m => m.RelatorioPageModule)
  },
  {
    path: 'loja',
    loadChildren: () => import('./loja/loja.module').then( m => m.LojaPageModule)
  },
  {
    path: 'ranking-p',
    loadChildren: () => import('./ranking-p/ranking-p.module').then( m => m.RankingPPageModule)
  },
  {
    path: 'ranking-e',
    loadChildren: () => import('./ranking-e/ranking-e.module').then( m => m.RankingEPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
