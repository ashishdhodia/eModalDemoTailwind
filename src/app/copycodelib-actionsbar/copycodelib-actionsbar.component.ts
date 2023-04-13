import { Component } from '@angular/core'

@Component({
    selector: 'app-copycodelib-actionsbar',
    templateUrl: './copycodelib-actionsbar.component.html',
    styleUrls: ['./copycodelib-actionsbar.component.css']
})
export class CopycodelibActionsbarComponent {
    code = `
  <!-- Actionsbar -->
  <div class="flex flex-row items-center justify-between h-14 pl-3 py-2 text-neutral-500 border-y border-neutral-500">
    <!-- Actionsbar left -->
    <div class="flex flex-row items-center h-full">
      <div class="flex flex-row items-center gap-x-4">
        <div class="w-60 h-6">
          <p class="text-base">Containers</p>
        </div>

        <!-- Actions menu -->
        <div class="justify-between rounded">
          <button mat-raised-button [matMenuTriggerFor]="menuAction" class="p-2">
            <div class="flex just items-center">
              Actions <mat-icon>arrow_drop_down</mat-icon>
            </div>
          </button>
          <mat-menu #menuAction="matMenu">
            <button mat-menu-item class="pl-3">Action 1</button>
            <button mat-menu-item class="pl-3">Action 2</button>
            <button mat-menu-item class="pl-3">Action 3</button>
            <button mat-menu-item class="pl-3">Action 4</button>
          </mat-menu>
        </div>

        <button mat-raised-button class="p-2" (click)="openDialog()">Add to my Containers</button>

        <button mat-raised-button>
          <div class="flex justify-center items-center">
            <mat-icon class="text-neutral-500">file_open</mat-icon>
          </div>
        </button>

        <!-- Button Group -->
        <div class="flex flex-row justify-start border border-neutral-300 rounded-md">
          <!-- Button -->
          <button class="flex rounded-l items-center justify-center h-9 w-9">
            <mat-icon>email</mat-icon>
          </button>
          <!-- Button -->
          <button class="flex border-x border-neutral-300 items-center justify-center h-9 w-9">
            <mat-icon class="text-neutral-500">picture_as_pdf</mat-icon>
          </button>
          <!-- Button -->
          <button class="flex rounded-r items-center justify-center h-9 w-9">
            <mat-icon class="text-green-500"> insert_drive_file</mat-icon>
          </button>
        </div>
      </div>
    </div>

    <!-- Actionsbar right -->
    <div class="flex flex-row items-center justify-center">
      <div class="flex pr-3">
        <!-- Button Group -->
        <div class="flex flex-row justify-start border border-neutral-300 rounded-md shadow-lg">
          <!-- Button -->
          <button class="flex items-center justify-center h-9 w-9 rounded-l">
            <mat-icon>refresh</mat-icon>
          </button>
          <!-- Button -->
          <button class="flex items-center justify-center h-9 w-9 border-x border-neutral-300">
            <mat-icon class="text-neutral-500">filter_alt</mat-icon>
          </button>
          <!-- Button -->
          <div class="flex justify-between rounded">
            <button mat-button [matMenuTriggerFor]="menuSavedViews" class="p-2">
              <div class="flex items-center justify-center">
                <p class="pr-7">Saved Views</p>
                <mat-icon>arrow_drop_down</mat-icon>
              </div>
            </button>
            <mat-menu #menuSavedViews="matMenu" class="w-40 mt-2">
              <button mat-menu-item class="pl-3">View 1</button>
              <button mat-menu-item class="pl-3">View 2</button>
              <button mat-menu-item class="pl-3">View 3</button>
              <button mat-menu-item class="pl-3">View 4</button>
            </mat-menu>
          </div>
          <!-- Button -->
          <button class="flex items-center justify-center h-9 w-9 rounded-r border-l border-neutral-300">
            <mat-icon class="text-neutral-500"> save</mat-icon>
          </button>
        </div>
      </div>
    </div>
  </div>
  `;

    codeSnippet = `<div class="flex flex-row items-center justify-between h-14 pl-3 py-2 text-neutral-500 border-y border-neutral-500">`
}
