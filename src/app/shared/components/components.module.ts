import { NgModule } from '@angular/core';

// imports
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

// declarations
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';

@NgModule({
  imports: [CurrencyPipe, FormsModule],
  exports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent],
  declarations: [HeaderComponent, UserInputComponent, InvestmentResultsComponent],
  providers: [],
})
export class ComponentsModule {

}
