import { LiveAnnouncer } from '@angular/cdk/a11y'
import { SelectionModel } from '@angular/cdk/collections'
import { Component, ViewChild } from '@angular/core'
import { MatSort, Sort } from '@angular/material/sort'
import { MatTableDataSource } from '@angular/material/table'

export interface ContainerElement {
  Container: string
  TradeType: string
  Status: string
  Holds: string
  PregateTicket: string
  EmodalPregateStatus: string
  GateStatus: string
  Origin: string
  Destination: string
  CurrentLoc: string
  Line: string
  VesselName: string
  VesselCode: string
  Voyage: string
  SizeType: string
  Fees: string
  LFDGTD: string
  Tags: string
}

const CONTAINER_DATA: ContainerElement[] = [
  {
    Container: 'ABCU1234567',
    TradeType: 'N/A',
    Status: 'N/A',
    Holds: 'N/A',
    PregateTicket: 'N/A',
    EmodalPregateStatus: 'N/A',
    GateStatus: 'N/A',
    Origin: 'N/A',
    Destination: 'N/A',
    CurrentLoc: 'N/A',
    Line: 'N/A',
    VesselName: 'N/A',
    VesselCode: 'N/A',
    Voyage: 'N/A',
    SizeType: 'N/A',
    Fees: 'N/A',
    LFDGTD: 'N/A',
    Tags: 'N/A',
  },
  {
    Container: 'ABCU1234567',
    TradeType: 'N/A',
    Status: 'N/A',
    Holds: 'N/A',
    PregateTicket: 'N/A',
    EmodalPregateStatus: 'N/A',
    GateStatus: 'N/A',
    Origin: 'N/A',
    Destination: 'N/A',
    CurrentLoc: 'N/A',
    Line: 'N/A',
    VesselName: 'N/A',
    VesselCode: 'N/A',
    Voyage: 'N/A',
    SizeType: 'N/A',
    Fees: 'N/A',
    LFDGTD: 'N/A',
    Tags: 'N/A',
  }
]


@Component({
  selector: 'app-container-table',
  templateUrl: './container-table.component.html',
  styleUrls: ['./container-table.component.css']
})
export class ContainerTableComponent {
  displayedColumns: string[] = [
    'select',
    'Container',
    'TradeType',
    'Status',
    'Holds',
    'PregateTicket',
    'EmodalPregateStatus',
    'GateStatus',
    'Origin',
    'Destination',
    'CurrentLoc',
    'Line',
    'VesselName',
    'VesselCode',
    'Voyage',
    'SizeType',
    'Fees',
    'LFDGTD',
    'Tags',
  ];

  dataSource = new MatTableDataSource(CONTAINER_DATA);

  constructor(private _liveAnnouncer: LiveAnnouncer) { }

  @ViewChild(MatSort) sort!: MatSort

  ngAfterViewInit() {
    this.dataSource.sort = this.sort
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`)
    } else {
      this._liveAnnouncer.announce('Sorting cleared')
    }
  }

  selection = new SelectionModel<ContainerElement>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length
    const numRows = this.dataSource.data.length
    return numSelected === numRows
  }


  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear()
      return
    }

    this.selection.select(...this.dataSource.data)
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: ContainerElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.Container + 1}`
  }
}
