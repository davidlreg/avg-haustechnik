import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ImprintComponent } from './imprint/imprint.component';
import { TrainingComponent } from './landing-page/training/training.component';
import { CareerComponent } from './landing-page/career/career.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ContactComponent } from './landing-page/contact/contact.component';
import { PrivateCustomersComponent } from './landing-page/private-customers/private-customers.component';

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
  { path: 'privacy', component: PrivacyPolicyComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'private-customers', component: PrivateCustomersComponent },
];
