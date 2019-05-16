import { Injectable } from '@angular/core';
import { Api } from '../api/api';
import { callStateSucceed } from '../../mocks/data/callState';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { CallState } from '../../types/callState';

@Injectable()
export class CallStateProvider {

  constructor(public api: Api) {
  }

  public get(id: string): Observable<CallState> {
    return of(callStateSucceed);
  }

}
