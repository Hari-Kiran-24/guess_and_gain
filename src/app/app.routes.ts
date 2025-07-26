import { Routes } from '@angular/router';
import { Home } from './home/home';
import { AddGame } from './add-game/add-game';
import { TopPoints } from './top-points/top-points';
import { TopWinners } from './top-winners/top-winners';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'top-points',
        component: TopPoints
    },
    {
        path: 'top-winners',
        component: TopWinners
    },
    {
        path: 'add-game',
        component: AddGame
    }
];
