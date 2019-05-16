import { Injectable } from '@angular/core';
import { ICallData } from '../types/callData';

@Injectable()
export class Store {

    private currCallData: ICallData = null;

    public get = () => this.currCallData;

    public setPartial = (callDataPart: Partial<ICallData>) => {
        if (!this.currCallData) {
            this.currCallData = {} as any;
        }
        const keys = Object.keys(callDataPart);
        keys.forEach(key => this.currCallData[key] = callDataPart[key]);
    };

    public reset = () => this.currCallData = null;
}
