import { ICallData } from "../../types/callData";

export const CallDataValid: ICallData = {
    problems: ["נתקעתי בלי דלק", "התחפרתי בשטח"],
    address: {
        locationText: "הנרייטה סולד 20 תל אביב",
        coordinate : {
            lat: 3,
            lon: 12
        },
        description : "רחוב צר עם הרבה פיצריות"
    },
    appeallerDetails: {
        carType: "טויוטה",
        name: "שמוליק קיפוד",
        phone: "012012012012"
    }
}
