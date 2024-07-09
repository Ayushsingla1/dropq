import { useRecoilState } from "recoil";
import { cart } from "../atom store/CartAtom";

const Counter = ({id, dish}) => {

    const [element, setElement] = useRecoilState(cart);
    const itemIndex = element.findIndex((x) => x.id === id);
    const item = element[itemIndex];

    const increaseHandler = () => {
        const newElement = [...element];
        newElement[itemIndex] = { ...item, count: item.count + 1 };
        setElement(newElement);
    };

    const decreaseHandler = () => {
        if (item.count > 1) {
        const newElement = [...element];
        newElement[itemIndex] = { ...item, count: item.count - 1 };
        setElement(newElement);
        } else {
        const newElement = element.filter((_, index) => index !== itemIndex);
        setElement(newElement);
        }
    };

    return ( 
    <div className="flex justify-center items-center rounded-[10px] py-2 bg-[#FFE4BE] h-full max-w-[150px]">
        <div className="flex text-[24px] text-[#3E362E]">
          <button className="px-4" onClick={increaseHandler}>+</button>
          <div className="px-4 border-r-[1.4px] border-l-[1.4px] border-black">{item.count}</div>
          <button className="px-4" onClick={decreaseHandler}>-</button>
        </div>
    </div> );
}
 
export default Counter;