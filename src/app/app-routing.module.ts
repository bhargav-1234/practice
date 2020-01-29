import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CarouselPageComponent } from "./pages/carousel-page/carousel-page.component";
import { RadiopageComponent } from "./pages/radiopage/radiopage.component";
import { StarpageComponent } from "./pages/starpage/starpage.component";
import { FormpageComponent } from "./pages/formpage/formpage.component";
import { StepspageComponent } from "./pages/stepspage/stepspage.component";
const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "/welcome" },
  { path: "carousel", component: CarouselPageComponent },
  { path: "radio", component: RadiopageComponent },
  { path: "star", component: StarpageComponent },
  { path: "form", component: FormpageComponent },
  { path: "steps", component: StepspageComponent },
  {
    path: "welcome",
    loadChildren: () =>
      import("./pages/welcome/welcome.module").then(m => m.WelcomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
