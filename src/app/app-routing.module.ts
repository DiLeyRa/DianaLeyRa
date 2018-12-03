import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ToolsComponent } from './components/tools/tools.component';


const routes: Routes = [
  {path: 'navbar', component:NavbarComponent},
  {path: 'profile', component:ProfileComponent},
  {path: 'tools', component:ToolsComponent},
  {path: 'projects', component:ProjectsComponent},
  {path: 'footer', component:FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
