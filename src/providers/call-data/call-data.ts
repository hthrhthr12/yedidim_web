import { Injectable } from '@angular/core';
import { Api } from '..';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import { ICallData } from '../../types/callData';

@Injectable({
  providedIn: "root"
})
export class CallDataProvider {
  constructor(public api: Api) {
  }

  public cancel(id: string): Observable<boolean> {
    return of(true);
  }

  public create(callData: ICallData): Observable<string> {
    return of("1231313");
  }
}
