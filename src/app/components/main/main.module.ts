import { NgModule } from "@angular/core";
import { MainComponent } from "./main.component";
import { HeaderModule } from "../header/header.module";
import { FooterModule } from "../footer/footer.module";

NgModule({
  declarations:[MainComponent],
  imports:[HeaderModule,FooterModule],
  exports:[MainComponent],

})
export class MainModule { }
