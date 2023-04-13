import { Component } from '@angular/core'

@Component({
  selector: 'app-copycodelib-appbar',
  templateUrl: './copycodelib-appbar.component.html',
  styleUrls: ['./copycodelib-appbar.component.css']
})
export class CopycodelibAppbarComponent {
  code = `
  <div class="flex flex-row items-center justify-between h-12 text-neutral-500 bg-white drop-shadow">
    <div class="flex flex-row items-center gap-x-3">
        <div class="flex bg-neutral-700 h-12 w-12 justify-center items-center">
            <mat-icon class="text-white">menu</mat-icon>
        </div>
        <img src="../../assets/eModal-Logo.svg" alt="eModal Logo" />
        <p class="text-xl">eModal Community Portal</p>
    </div>
    <div class="flex flex-row items-center h-full">
        <div class="flex items-center justify-center border-r border-neutral-300 px-3 h-full">
            <mat-icon aria-hidden="false" aria-label="shopping cart icon">shopping_cart</mat-icon>
        </div>
        <div class="flex items-center justify-center border-r border-neutral-300 px-3 h-full">
            <mat-icon aria-hidden="false" aria-label="notifications icon">notifications</mat-icon>
        </div>
        <div class="flex items-center justify-center border-r border-neutral-300 px-3 h-full">
            <mat-icon aria-hidden="false" aria-label="settings icon">settings</mat-icon>
        </div>
        <div class="flex items-center justify-center border-r border-neutral-300 px-3 h-full">
            <mat-icon aria-hidden="false" aria-label="help icon">help</mat-icon>
        </div>
        <div class="flex items-center justify-center px-3 h-full">
            <mat-icon aria-hidden="false" aria-label="User account icon">person</mat-icon>
        </div>
    </div>
</div>
  `;

  codeSnippet = `<div class="flex flex-row items-center justify-between h-12 text-neutral-500 bg-white drop-shadow">`
}
