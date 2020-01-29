import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { IconsProviderModule } from "./icons-provider.module";
import { NgZorroAntdModule, NZ_I18N, en_US } from "ng-zorro-antd";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { registerLocaleData } from "@angular/common";
import en from "@angular/common/locales/en";
import { NzCarouselModule } from "ng-zorro-antd/carousel";
import { CarouselComponent } from "./components/carousel/carousel.component";
import { CarouselPageComponent } from "./pages/carousel-page/carousel-page.component";
import { NzRadioModule } from "ng-zorro-antd/radio";
import { RadioComponent } from "./components/radio/radio.component";
import { RadiopageComponent } from "./pages/radiopage/radiopage.component";
import { NzRateModule } from "ng-zorro-antd/rate";

registerLocaleData(en);
import { from } from "rxjs";
import { StarComponent } from "./components/star/star.component";
import { StarpageComponent } from "./pages/starpage/starpage.component";

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    CarouselPageComponent,
    RadioComponent,
    RadiopageComponent,
    StarComponent,
    StarpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsProviderModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzCarouselModule,
    NzRadioModule,
    NzRateModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule {}
