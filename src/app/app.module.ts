import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpModule} from '@angular/http';
import{Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import {HomeService} from './home/home.service';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CustomerComponent } from './customer/customer.component';
import { HowitworksComponent } from './howitworks/howitworks.component';
import { SolutionComponent } from './solution/solution.component';
import { PricingComponent } from './pricing/pricing.component';
import { StarttrialComponent } from './starttrial/starttrial.component';
const approutes : Routes =[
  {path:"home", component: HomeComponent},
  {path:"aboutus", component:AboutusComponent},
  {path:"customer", component:CustomerComponent},
  {path:"howitworks", component:HowitworksComponent},
  {path:"solution", component:SolutionComponent},
  {path:"pricing", component:PricingComponent},
  {path:"starttrial", component:StarttrialComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    AboutusComponent,
    CustomerComponent,
    HowitworksComponent,
    SolutionComponent,
    PricingComponent,
    StarttrialComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(approutes),
    HttpModule
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
