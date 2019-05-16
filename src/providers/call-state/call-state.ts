import { Injectable } from '@angular/core';
import { Api } from '../api/api';
import { callStateSucceed } from '../../mocks/data/callState';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { CallState as CallStateType } from '../../types/callState';

@Injectable({
  providedIn: "root"
})
export class CallState {

  constructor(public api: Api) {
  }

  public get(id: string): Observable<CallStateType> {
    return of(callStateSucceed);
  }

}
