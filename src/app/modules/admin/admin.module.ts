import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { TestComponent } from './components/test/test.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { LayoutComponent } from './components/layout/layout.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SubjectsComponent } from './components/subjects/subjects.component';
import { Comp1Component } from './components/subjects/comp1/comp1.component';
import { Comp2Component } from './components/subjects/comp2/comp2.component';



@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    TestComponent,
    LayoutComponent,
    AddEmployeeComponent,
    SubjectsComponent,
    Comp1Component,
    Comp2Component
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    SharedModule,
    
  ]
})
export class AdminModule { }
