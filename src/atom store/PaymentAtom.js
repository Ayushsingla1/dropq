import { atom } from "recoil";

export const paymentOptionAtom = atom({
    key: "paymentOptionAtom",
    default: "Credit Card"
})