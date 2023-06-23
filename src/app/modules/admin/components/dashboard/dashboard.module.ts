import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "src/app/shared/material.module";
import { SharedModule } from "src/app/shared/shared.module";


@NgModule({
    declarations: [
        // DashboardComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        MaterialModule,
    ]
})

export class dashboardModule {}
