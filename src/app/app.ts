import { Component } from '@angular/core';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule, MatNavList } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatButtonToggleModule, MatButtonModule, MatGridListModule,
    MatBottomSheetModule, MatGridListModule, MatListModule, MatFormFieldModule, MatBottomSheetModule,
      MatToolbarModule, MatListModule, MatMenuModule, MatIconModule,
    MatToolbarModule, RouterLink, MatTooltipModule,
    MatSidenavModule, RouterLinkActive,
    MatButtonModule, FormsModule, CommonModule,
    MatIconModule, MatToolbarModule,
    MatDividerModule,],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  onClick(event: any) {
    event.preventDefault();
  }
}