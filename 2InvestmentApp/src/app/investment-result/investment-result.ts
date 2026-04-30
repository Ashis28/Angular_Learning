import { CurrencyPipe } from '@angular/common';
import { Component, inject, Inject, Input, input } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-result',
  imports: [CurrencyPipe],
  templateUrl: './investment-result.html',
  styleUrl: './investment-result.css',
})
export class InvestmentResult {
  // results = input<{
  //   year: number,
  //   interest: number,
  //   valueEndOfYear: number,
  //   annualInvestment: number,
  //   totalInterest: number,
  //   totalAmountInvested: number ,
  // }[]>();

  //phase2
  // @Input() results? : {
  //   year: number,
  //   interest: number,
  //   valueEndOfYear: number,
  //   annualInvestment: number,
  //   totalInterest: number,
  //   totalAmountInvested: number ,
  // }[];

  private investmentService = inject(InvestmentService);
  // results = this.investmentService.resultsData;

  // get results(){
  //   return this.investmentService.resultsData;
  // }

  results = this.investmentService.resultsData.asReadonly();
}
