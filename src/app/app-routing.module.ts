import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  { path: 'Home', loadChildren: () => import('./modules/main/app-main.module').then(m => m.AppMainModule) },
  { path: 'Card', loadChildren: () => import('./modules/card/app-card.module').then(m => m.AppCardModule) },
  { path: 'Catalog', loadChildren: () => import('./modules/catalog/app-catalog.module').then(m => m.AppCatalogModule) },
  { path: 'Catalog/:furniture', loadChildren: () => import('./modules/catalog/app-catalog.module').then(m => m.AppCatalogModule) },
  { path: 'Catalog/:type/:item',loadChildren: () => import('./modules/catalog/catalog-item/app-item.details.module').then(m => m.AppItemDetailsModule)},
  { path: '', loadChildren: () => import('./modules/main/app-main.module').then(m => m.AppMainModule)},
  { path: '**', redirectTo:'Home',pathMatch:'full' }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
