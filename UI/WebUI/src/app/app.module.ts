import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SectionSalesOrderComponent } from './dashboard/section-sales-order/section-sales-order.component';
import { SectionPurchaseOrderComponent } from './dashboard/section-purchase-order/section-purchase-order.component';
import { SectionSystemHealthComponent } from './dashboard/section-system-health/section-system-health.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    SectionSalesOrderComponent,
    SectionPurchaseOrderComponent,
    SectionSystemHealthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
