import { CallState } from "../../types/callState";

export const callStateSucceed: CallState = [
    {
        date: new Date(),
        title: "הפניה התקבלה"
    },
    {
        date: new Date(),
        title: "בטיפול המוקד"
    },
    {
        date: new Date(),
        title: "בהמתנה לטיפול כונן"
    },
    {
        date: new Date(),
        title: "בטיפול כונן"
    },
    {
        date: new Date(),
        title: "הטיפול בפניה הסתיים"
    }
];

export const callStateCancelled: CallState = [
    {
        date: new Date(),
        title: "הפניה התקבלה"
    },
    {
        date: new Date(),
        title: "בטיפול המוקד"
    },
    {
        date: new Date(),
        title: "בהמתנה לטיפול כונן"
    },
    {
        date: new Date(),
        title: "הפניה בוטלה"
    }
];