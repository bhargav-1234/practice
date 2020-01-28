import { NgModule } from "@angular/core";

import { WelcomeRoutingModule } from "./welcome-routing.module";

import { WelcomeComponent } from "./welcome.component";
import { NgZorroAntdModule, NZ_ICONS } from "ng-zorro-antd";
import { TablesComponent } from "../../components/tables/tables.component";
import { NzTableModule } from "ng-zorro-antd/table";
import { NzDividerModule } from "ng-zorro-antd/divider";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [
    WelcomeRoutingModule,
    NzTableModule,
    NzDividerModule,
    CommonModule,
    NgZorroAntdModule
  ],
  declarations: [WelcomeComponent, TablesComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule {}
