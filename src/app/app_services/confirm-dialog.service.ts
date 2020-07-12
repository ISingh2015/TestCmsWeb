import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfirmDialogService {

  private subject = new Subject<any>();

  constructor() {
  }

  confirmThis(message: string, siFn: () => void, noFn: () => void) {
    // console.log ('Within confirm message');
    this.setConfirmation(message, siFn, noFn);
  }

  setConfirmation(message: string, siFn: () => void, noFn: () => void) {
    const that = this;
    this.subject.next({
      type: 'confirm',
      text: message,
      siFn:
        function () {
          that.subject.next();
          siFn();
        },
      noFn: function () {
        that.subject.next();
        noFn();
      }
    });

  }

  getMessage(): Observable<any> {
    // console.log ('Within get Message') ;
    return this.subject.asObservable();
  }
}
