import { Component, inject, signal } from '@angular/core';
import { InvestmentService } from '../../service/investiment.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  private investmentService = inject(InvestmentService);
  enteredInitialInvestment = signal('');
  enteredAnnualInvestment = signal('');
  enteredExpectedReturn = signal('');
  enteredDuration = signal('');

  onSubmit() {
      this.investmentService.calculateInvestmentResults({
        initialInvestment: +this.enteredInitialInvestment(),
        annualInvestment: +this.enteredAnnualInvestment(),
        expectedReturn: +this.enteredExpectedReturn(),
        duration: +this.enteredDuration(),
      });
  }
}
