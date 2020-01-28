import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CarouselPageComponent } from "./pages/carousel-page/carousel-page.component";
const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "/welcome" },
  { path: "carousel", component: CarouselPageComponent },
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
