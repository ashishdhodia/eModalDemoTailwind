import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialModule } from './material/material.module'
import { EmodalContainerDemoTailwindComponent } from './emodal-container-demo-tailwind/emodal-container-demo-tailwind.component'
import { ContainerTableComponent } from './container-table/container-table.component'
import { EmodalContainerDemoCoreCssComponent } from './emodal-container-demo-core-css/emodal-container-demo-core-css.component'
import { CopycodelibComponent } from './copycodelib/copycodelib.component'
import { ModaldialogComponent } from './modaldialog/modaldialog.component'
import { CopycodelibAppbarComponent } from './copycodelib-appbar/copycodelib-appbar.component'
import { CopycodelibActionsbarComponent } from './copycodelib-actionsbar/copycodelib-actionsbar.component'

@NgModule({
  declarations: [
    AppComponent,
    EmodalContainerDemoTailwindComponent,
    ContainerTableComponent,
    EmodalContainerDemoCoreCssComponent,
    CopycodelibComponent,
    ModaldialogComponent,
    CopycodelibAppbarComponent,
    CopycodelibActionsbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
