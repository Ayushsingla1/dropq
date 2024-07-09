import { atom, selector } from "recoil";
import { cart } from "./CartAtom";

export const categoryFilterAtom = atom({
  key: "categroyFilterAtom",
  default: "any",
});

export const dataAtom = atom({
  key: "dataAtom",
  default: [],
});

export const addOnsFilterDoer = selector({
  key: "addOnsFilterDoer",
  get: ({ get }) => {
    const dishesArr = get(dataAtom);
    const cartArr = get(cart);
    console.log("dishesArr:", dishesArr);
    console.log("cartArr:", cartArr);
    if (cartArr.length === 0) {
      return dishesArr;
    } else {
      const temp = [];
      for (let i = 0; i < dishesArr.length; i++) {
        if (i < cartArr.length) {
          if (cartArr[i].id !== dishesArr[i].id) {
            temp.push(dishesArr[i]);
          }
        } else {
          temp.push(dishesArr[i]);
        }
      }
      return temp;
    }
  },
});

export const categoryFitlerDoer = selector({
  key: "categoryFilterDoer",
  get: ({ get }) => {
    const dishArr = get(dataAtom);
    const filterType = get(categoryFilterAtom);
    if (dishArr.length === 0) return [];
    if (filterType === "any") {
      return dishArr;
    } else {
      return dishArr.map((dish) => filterType === dish.catgeroy);
    }
  },
});

export const filterDoer = selector({
  key: "filterDoer",
  get: ({ get }) => {
    const category = get(categoryFilterAtom);
    const search = get(searchFilterAtom);
    const dishArr = get(dataAtom);
    if (dishArr.length === 0) return [];
    if (category === "any") {
      return dishArr.filter(
        (dish) =>
          dish.item.includes(search) || dish.description.includes(search)
      );
    } else {
      return dishArr.filter(
        (dish) =>
          category === dish.category &&
          (dish.item.includes(search) || dish.description.includes(search))
      );
    }
  },
});

export const searchFilterAtom = atom({
  key: "searchFilterAtom",
  default: "",
});

export const searchFilterDoer = selector({
  key: "searchFilterDoer",
  get: ({ get }) => {
    const elementarr = get(dataAtom);
    const filteraround = get(searchFilterAtom);
    if (elementarr.length === 0) return [];
    return elementarr.filter(
      (dish) =>
        dish.item.includes(filteraround) ||
        dish.description.includes(filteraround)
    );
  },
});
