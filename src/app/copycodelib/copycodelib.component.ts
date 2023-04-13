import { Component } from '@angular/core'
import { FormBuilder } from '@angular/forms'

@Component({
    selector: 'app-copycodelib',
    templateUrl: './copycodelib.component.html',
    styleUrls: ['./copycodelib.component.css']
})
export class CopycodelibComponent {
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
    constructor(private _formBuilder: FormBuilder) { }

    options = this._formBuilder.group({
        bottom: 0,
        fixed: false,
        top: 0,
    })

    appbar: boolean = true
    actionsbar: boolean = false

    toggleLibAppbar() {
        this.appbar = true
        this.actionsbar = false
    }

    toggleLibActionsbar() {
        this.appbar = false
        this.actionsbar = true
    }

    ngOnInit() {
    }
}
