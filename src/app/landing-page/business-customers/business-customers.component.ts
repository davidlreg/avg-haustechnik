import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';

@Component({
  selector: 'app-business-customers',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './business-customers.component.html',
  styleUrl: './business-customers.component.scss',
})
export class BusinessCustomersComponent {}
