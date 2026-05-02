import { AfterViewInit, Component, DestroyRef, effect, inject, OnChanges, OnDestroy, OnInit, signal, SimpleChange, SimpleChanges } from '@angular/core';
@Component({
  selector: 'app-server-status',
  imports: [],
  templateUrl: './server-status.html',
  styleUrl: './server-status.css',
})
export class ServerStatus implements OnInit, AfterViewInit{
  // currentStatus: 'online' | 'offline' | 
  // 'unknown' = 'unknown';
  currentStatus = signal<'online' | 'offline' | 'unknown'>('unknown');
  private interval? : ReturnType<typeof setInterval>;
  private destroyRef = inject(DestroyRef);

  constructor(){
    // console.log("Constructor executed");
    effect(()=>{
      console.log(this.currentStatus());
    })
  }
  ngOnInit(){
    console.log("ng on Init")
    this.interval  = setInterval(()=>{
      const rnd = Math.random();
      if(rnd<0.5){
        this.currentStatus.set('online');
      }else if(rnd<0.9){
        this.currentStatus.set('offline');
      }else{
        this.currentStatus.set('unknown');
      }
      // console.log(this.currentStatus);
    },4000)

    this.destroyRef.onDestroy(()=>{
      clearInterval(this.interval)
    })
  }

  ngAfterViewInit(): void {
    console.log("After View Init")
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log(changes);
  // }
  // ngOnDestroy(): void {
  //   clearTimeout(this.interval);
  // }

}
