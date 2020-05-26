import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SectionPurchaseOrderComponent } from './dashboard/section-purchase-order/section-purchase-order.component';
import { SectionSalesOrderComponent } from './dashboard/section-sales-order/section-sales-order.component';
import { SectionSystemHealthComponent } from './dashboard/section-system-health/section-system-health.component';

const routes: Routes = [
  { path:'purchaseorder',component : SectionPurchaseOrderComponent },
  { path:'salesorder',component : SectionSalesOrderComponent },
  { path:'systemhealth',component : SectionSystemHealthComponent },

  { path:'', redirectTo:'/sales' ,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
