import { Component } from '@angular/core';
import { HeaderComponent } from './shared/components/header/header.component';
import { UserInputComponent } from './shared/components/user-input/user-input.component';
import { InvestmentResultsComponent } from './shared/components/investment-results/investment-results.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent],
})
export class AppComponent {}
