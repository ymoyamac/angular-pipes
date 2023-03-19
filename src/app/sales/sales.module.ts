import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { NoCommonsComponent } from './pages/no-commons/no-commons.component';
import { BasicsComponent } from './pages/basics/basics.component';
import { SortedComponent } from './pages/sorted/sorted.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { UppercasePipe } from './pipes/uppercase.pipe';
import { CanFlyPipe } from './pipes/can-fly.pipe';
import { SortedPipe } from './pipes/sorted.pipe';



@NgModule({
  declarations: [
    NumbersComponent,
    NoCommonsComponent,
    BasicsComponent,
    SortedComponent,
    CanFlyPipe,
    UppercasePipe,
    SortedPipe,
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
  ],
  exports: [
    NumbersComponent,
    NoCommonsComponent,
    BasicsComponent,
    SortedComponent
  ],
  providers: [  ]
})
export class SalesModule { }
