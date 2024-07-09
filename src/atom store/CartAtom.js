import { atom, selector } from "recoil";
import { localStorageEffect } from "./localStorage";
export const cart = atom({
  key : "cart",
  default : [],
  effects : [
    localStorageEffect('cart')
  ]
})

export const subTotalAtom = atom({
  key: "subTotalAtom",
  default: 0,
})

export const total = selector({
  key: "total",
  get: ({get}) => {
    const subTotal = get(subTotalAtom);
    return (subTotal * 1.1)
  }
})

export const extraCharges = selector({
  key: "extraCharges",
  get: ({get}) => {
    const subTotal = get(subTotalAtom);
    return (subTotal * 0.1)
  }
}) 