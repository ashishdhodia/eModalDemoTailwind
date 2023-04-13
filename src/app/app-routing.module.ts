import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { EmodalContainerDemoTailwindComponent } from './emodal-container-demo-tailwind/emodal-container-demo-tailwind.component'
import { ContainerTableComponent } from './container-table/container-table.component'
import { EmodalContainerDemoCoreCssComponent } from './emodal-container-demo-core-css/emodal-container-demo-core-css.component'
import { CopycodelibComponent } from './copycodelib/copycodelib.component'
import { ModaldialogComponent } from './modaldialog/modaldialog.component'

const routes: Routes = [
  { path: "emodaltailwind", component: EmodalContainerDemoTailwindComponent },
  { path: "emodalcorecss", component: EmodalContainerDemoCoreCssComponent },
  { path: "containertable", component: ContainerTableComponent },
  { path: "copycodelib", component: CopycodelibComponent },
  { path: "modaldialog", component: ModaldialogComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
