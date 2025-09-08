import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ImprintComponent } from './imprint/imprint.component';
import { TrainingComponent } from './landing-page/training/training.component';
import { CareerComponent } from './landing-page/career/career.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: 'imprint',
    component: ImprintComponent,
  },
  { path: 'landingPage', component: LandingPageComponent },
  { path: 'training', component: TrainingComponent },
  { path: 'career', component: CareerComponent },
];
