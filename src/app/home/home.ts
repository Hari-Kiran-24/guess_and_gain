import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, inject, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-home',
  imports: [MatButtonModule, MatTableModule, MatPaginator, MatSortModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

 private _liveAnnouncer = inject(LiveAnnouncer);

  displayedColumns: string[] = ['position', 'winner', 'points', 'playedOn'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, winner: 'Hydrogen', points: 1.0079, playedOn: '25/07/2025 04:30 PM'},
  {position: 2, winner: 'Helium', points: 4.0026,  playedOn: '25/07/2025 04:30 PM'},
  {position: 3, winner: 'Lithium', points: 6.941,  playedOn: '25/07/2025 04:30 PM'},
  {position: 4, winner: 'Beryllium', points: 9.0122,  playedOn: '25/07/2025 04:30 PM'},
  {position: 5, winner: 'Boron', points: 10.811,  playedOn: '25/07/2025 04:30 PM'},
  {position: 6, winner: 'Carbon', points: 12.0107,  playedOn: '25/07/2025 04:30 PM'},
  {position: 7, winner: 'Nitrogen', points: 14.0067,  playedOn: '25/07/2025 04:30 PM'},
  {position: 8, winner: 'Oxygen', points: 15.9994,  playedOn: '25/07/2025 04:30 PM'},
  {position: 9, winner: 'Fluorine', points: 18.9984,  playedOn: '25/07/2025 04:30 PM'},
  {position: 10, winner: 'Neon', points: 20.1797,  playedOn: '25/07/2025 04:30 PM'},
];


export interface PeriodicElement {
  winner: string;
  position: number;
  points: number;
  playedOn: string;
}
