import { ICoordinate } from "./coordinate";

type ProblemsList = Array<string>;

interface IAddress {
    locationText: string;
    coordinate?: ICoordinate;
    description?: string;
}

interface IAppeallerDetails {
    carType: string;
    name: string;
    phone: string;
}

export interface ICallData {
    problems: ProblemsList;

    address: IAddress;

    appeallerDetails: IAppeallerDetails;
}
