import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';

@Component({
  selector: 'app-private-customers',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './private-customers.component.html',
  styleUrl: './private-customers.component.scss',
})
export class PrivateCustomersComponent {}
