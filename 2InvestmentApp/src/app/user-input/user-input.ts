import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type InvestmentInput } from '../invest-input.model';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.html',
  styleUrl: './user-input.css',
})
export class UserInput {

  // @Output() calculate = new EventEmitter<{
  //     initialInvestment : number,
  //     duration : number,
  //     expectedReturn : number,
  //     annualInvestment : number
  //   }>();
   @Output() calculate = new EventEmitter<InvestmentInput>();

  enteredInitialInvestment = signal('100');
  enteredAnnualInvestment = signal('1000');
  enteredExpectedReturn = signal('5');
  enteredDuration = signal("10");

  constructor(private investmentService : InvestmentService){};

  onSubmit(){
    console.log("Submitted");
    this.investmentService.onCalculateInvestmentResults({
      initialInvestment : +this.enteredAnnualInvestment(),
      duration : +this.enteredDuration(),
      expectedReturn : +this.enteredExpectedReturn(),
      annualInvestment : +this.enteredAnnualInvestment()
    });
    
    // this.calculate.emit({
    //   initialInvestment : +this.enteredAnnualInvestment(),
    //   duration : +this.enteredDuration(),
    //   expectedReturn : +this.enteredExpectedReturn(),
    //   annualInvestment : +this.enteredAnnualInvestment()
    // });
    this.enteredAnnualInvestment.set('0');
    this.enteredInitialInvestment.set('0');
    this.enteredExpectedReturn.set('0');
    this.enteredDuration.set('0');
  }
}
