import { atom } from "recoil";
import { localStorageEffect } from "./localStorage";
export const cart = atom({
  key : "cart",
  default : [],
  effects : [
    localStorageEffect('cart')
  ]
})