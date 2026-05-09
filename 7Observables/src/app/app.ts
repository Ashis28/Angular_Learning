import { Component, DestroyRef, effect, inject, OnInit, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { RouterOutlet } from '@angular/router';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App{
  protected readonly title = signal('7Observables');

  private destroyRef = inject(DestroyRef);
  // ngOnInit(): void {
  //     const subscription = interval(1000).subscribe(
  //     {
  //       next : (val) => console.log(val)
  //     }
  //   );
  //     this.destroyRef.onDestroy(()=>{subscription.unsubscribe()});
  // }
  constructor(){
    effect(()=>{
      console.log(`Printed w Effect : click count is ${this.clickCount()} times`);
    })
  }
  clickCount = signal(0);
  onClick(){
    this.clickCount.update(prev => prev + 1);
  }

  // converting signal to ovsrvable
  clickCountOBS$ = toObservable(this.clickCount);

  ngOnInit(){
    this.clickCountOBS$.subscribe({
      next  : (val) => console.log(`click count is ${val} times`)
    })
    
  }

  // converting observables to signal
  interObservable$ = interval(1000);
  interSignal = toSignal(this.interObservable$,{initialValue : 0});

  
  // Creating a custome Observable
  obs1$  = new Observable((subscriber)=>{
    let timesExecuted = 0;
    const intervalId = setInterval(()=>{
      subscriber.next({message : "new Value"}) ;
      timesExecuted ++ ;
      if(timesExecuted>5){
        clearInterval(intervalId);
        subscriber.unsubscribe();
      }
    },1000);
  })

  ngAfterViewInit(){
    this.obs1$.subscribe({
      next : (val) => console.log(val),
      complete : () => console.log("COMPLETE")
    })
  }
}
