import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, inject, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-top-winners',
  imports: [MatButtonModule, MatTableModule, MatPaginator, MatSortModule],
  templateUrl: './top-winners.html',
  styleUrl: './top-winners.scss'
})
export class TopWinners {

  private _liveAnnouncer = inject(LiveAnnouncer);

displayedColumns: string[] = ['position', 'name', 'totalWonGames', 'totalGames', 'joinedDate'];
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
  {position: 1, name: 'Hydrogen', totalWonGames: 1.0079,totalGames: 10, joinedDate: '19/08/2025 04:35 PM' },
  {position: 2, name: 'Helium', totalWonGames: 4.0026, totalGames: 10, joinedDate: '19/08/2025 04:35 PM' },
  {position: 3, name: 'Lithium', totalWonGames: 6.941, totalGames: 10, joinedDate: '19/08/2025 04:35 PM' },
  {position: 4, name: 'Beryllium', totalWonGames: 9.0122, totalGames: 10, joinedDate: '19/08/2025 04:35 PM' },
  {position: 5, name: 'Boron', totalWonGames: 10.811, totalGames: 10, joinedDate: '19/08/2025 04:35 PM' },
  {position: 6, name: 'Carbon', totalWonGames: 12.0107, totalGames: 10, joinedDate: '19/08/2025 04:35 PM' },
  {position: 7, name: 'Nitrogen', totalWonGames: 14.0067, totalGames: 10, joinedDate: '19/08/2025 04:35 PM' },
  {position: 8, name: 'Oxygen', totalWonGames: 15.9994, totalGames: 10, joinedDate: '19/08/2025 04:35 PM' },
  {position: 9, name: 'Fluorine', totalWonGames: 18.9984, totalGames: 10, joinedDate: '19/08/2025 04:35 PM' },
  {position: 10, name: 'Neon', totalWonGames: 20.1797, totalGames: 10, joinedDate: '19/08/2025 04:35 PM' },
];


export interface PeriodicElement {
  name: string;
  position: number;
  totalWonGames: number;
  totalGames: number;
  joinedDate: string;
}

