import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicsComponent } from './sales/pages/basics/basics.component';
import { NumbersComponent } from './sales/pages/numbers/numbers.component';
import { NoCommonsComponent } from './sales/pages/no-commons/no-commons.component';
import { SortedComponent } from './sales/pages/sorted/sorted.component';

const routes: Routes = [
  { path: '', component: BasicsComponent, pathMatch: 'full' },
  { path: 'numbers', component: NumbersComponent },
  { path: 'no-commons', component: NoCommonsComponent },
  { path: 'sort', component: SortedComponent },
  { path: '**', redirectTo: '' }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRouterModule { }
