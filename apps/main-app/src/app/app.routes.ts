import { loadRemoteModule } from '@angular-architects/native-federation';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.component')
  },
  {
    path: 'micro1',
    loadComponent: () =>
      loadRemoteModule('microApps1', './Component').then((m) => m.AppComponent),
  }
];
