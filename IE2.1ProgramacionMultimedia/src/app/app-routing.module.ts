import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TabsComponent } from './components/tabs/tabs.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs/calls',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    component: TabsComponent,
    children: [
      {
        path: 'calls',
        loadChildren: () => import('./pages/calls/calls.module').then( m => m.CallsPageModule)
      },
      {
        path: 'messages',
        loadChildren: () => import('./pages/messages/messages.module').then( m => m.MessagesPageModule)
      },
      {
        path: 'audio',
        loadChildren: () => import('./pages/audio/audio.module').then( m => m.AudioPageModule)
      },
      {
        path: 'calls/call-info',
        loadChildren: () => import('./pages/call-info/call-info.module').then( m => m.CallInfoPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
