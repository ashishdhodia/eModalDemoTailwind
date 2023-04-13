import { Component } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { ModaldialogComponent } from '../modaldialog/modaldialog.component'

@Component({
  selector: 'app-emodal-container-demo-tailwind',
  templateUrl: './emodal-container-demo-tailwind.component.html',
  styleUrls: ['./emodal-container-demo-tailwind.component.css']
})
export class EmodalContainerDemoTailwindComponent {
  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(ModaldialogComponent)
  }

}
