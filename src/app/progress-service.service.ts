import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
   providedIn: 'root'
})
export class ProgressService {
   private progressSubject = new BehaviorSubject<number>(0);
  public progress$ = this.progressSubject.asObservable();

  startProgress() {
    this.progressSubject.next(this.progressSubject.value + 10);
  }
}