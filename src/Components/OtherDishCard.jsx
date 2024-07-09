import pic from '../assets/bhole chature.jpg'
import Counter from './Counter';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { cart } from '../atom store/CartAtom';

const OtherDishCard = ({dish, restroName}) => {
    console.log(dish, dish['item'])


    const carthub = useSetRecoilState(cart);
    const cartval = useRecoilValue(cart);
    const addHandler = (id)=>{
      carthub(c => {return [...c,{id : id , count : 1, dish: dish}]})
    }


    return ( <div className='flex flex-col justify-center rounded-md items-center bg-[#93785B] pb-3'>
        <div><img alt="food pic" src={pic} className="w-[200px] rounded-md h-[150px]" /></div>
        <div className='flex flex-col justify-center items-center gap-y-2'>
            <div className='text-[24px] font-semibold text-white playfair-display'>{restroName}</div>
            <div className='text-[22px]  inknut'>{dish.item}</div>
            <div className='h-[42px]'>{cartval.some(x => (x.id===dish.id && x.count > 0)) ? (<Counter dish = {dish} id = {dish.id}></Counter>): (<button className='py-2 px-4 text-[18px] rounded-[10px] font-semibold bg-[#FFE4BE] text-[#3E362E] playfair-display flex justify-center items-center' onClick={()=>addHandler(dish.id)}>Add to cart</button>)}</div>
        </div>
    </div> );
}
 
export default OtherDishCard;