/*
* File: app.routes.ts
* Author: Szász Benedek
* Copyright: 2026, Szász Benedek
* Group: Szoft II N
* Date: 2026-10-07
* Github: https://github.com/BenedekSzasz
* Licenc: GNU GPL
*/

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RombatloComponent } from './rombatlo/rombatlo.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'rombatlo', component: RombatloComponent }
];
