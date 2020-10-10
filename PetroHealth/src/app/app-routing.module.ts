import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
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
    path: 'ranking',
    loadChildren: () => import('./ranking/ranking.module').then( m => m.RankingPageModule)
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
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'relatorio',
    loadChildren: () => import('./relatorio/relatorio.module').then( m => m.RelatorioPageModule)
  },
  {
    path: 'loja',
    loadChildren: () => import('./loja/loja.module').then( m => m.LojaPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
