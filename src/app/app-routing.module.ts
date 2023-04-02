import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NotfountComponent } from './notfount/notfount.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContctComponent } from './contct/contct.component';

const routes: Routes = [
  {path:"", redirectTo:"home",pathMatch:"full"},
  { path: "home", component: HomeComponent, title:"Home"},
  { path: "about", component: AboutComponent , title:"About"},
  { path: "portfolio", component: PortfolioComponent , title:"Portfolio" },
  {path:"contact" , component:ContctComponent, title:"Contact Me"},










  {path:"**" , component:NotfountComponent , title:"Error"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
