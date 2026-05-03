import { Component,DestroyRef,inject,OnInit,signal } from '@angular/core';
import { Places } from '../places';
import { PlacesContainer } from '../places-container/places-container';
import { Place } from '../place.model';
import { HttpClient } from '@angular/common/http';
import { catchError, map, throwError } from 'rxjs';

@Component({
  selector: 'app-user-places',
  imports: [PlacesContainer,Places],
  templateUrl: './user-places.html',
  styleUrl: './user-places.css',
})
export class UserPlaces { places = signal<Place[] | undefined>(undefined);
  private httpClient = inject(HttpClient);
  // constructor(private httpClient : HttpClient){}

  private destoryRef = inject(DestroyRef);
  isFetching = signal(false);
  error = signal('');

  ngOnInit(){
    this.isFetching.set(true);
    const subscription = this.httpClient.get<{places: Place[]}>('http://localhost:3000/places')
    .pipe(
      map((resData)=>resData.places , catchError(
        (err)=>{
          return throwError(
          ()=>new Error("Fetching failed"));
        }))
    )
    .subscribe({
      next : (place)=>{
        console.log(place);
        this.places.set(place);
      },
      error : (err : Error)=>{
        this.error.set(err.message);
      },
      complete : () => {
        this.isFetching.set(false);
      }
    });

    this.destoryRef.onDestroy(()=>{
      subscription.unsubscribe();
    })
  }

  onSelectPlace(selectedPlace: Place) {
    this.httpClient
      .put('http://localhost:3000/user-places', {
        placeId: selectedPlace.id,
      })
      .subscribe({
        next: (resData) => console.log(resData),
      });
  }
}
