import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { TestComponent } from './components/test/test.component';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutComponent } from './components/layout/layout.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { SubjectsComponent } from './components/subjects/subjects.component';
import { RoleGuard } from 'src/app/guards/role.guard';

const routes: Routes = [
  {path:'', component: DashboardComponent, children:[
    {path:'home', component:HomeComponent},
    // {path:'home', component: HomeComponent},
    {path:'layout', component: LayoutComponent},
    {path:'employee_form', component: AddEmployeeComponent},
    {path:'subjects', component: SubjectsComponent,canActivate:[RoleGuard]}

  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
