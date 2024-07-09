import bholeChature from '../assets/bhole chature.jpg'
import Category from './Category';
import { cart } from '../atom store/CartAtom';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import Counter from './Counter';

const DishCard = ({dish, id, menuid}) => {

    const carthub = useSetRecoilState(cart);
    const cartval = useRecoilValue(cart);
    const addHandler = (id)=>{
      carthub(c => {return [...c,{id : id , count : 1, dish: dish}]})
    }


    return ( 
        <div className='w-4/12 max-w-[350px] flex flex-col rounded-[15px] gap-y-2 bg-[#3E362E]'>
            <div><img className='h-[220px] w-[350px] rounded-t-[15px]' src={bholeChature} alt={dish.item} /></div>
            <div className='flex px-5 pb-5 flex-col'>
                <div className='text-white text-[28px] inknut'>{dish.item}</div>
                <div className='text-[16px] text-white opacity-75'>{dish.description}</div>
                <div className='text-[22px] playfair-display text-white font-semibold mt-3'>Rs {dish.price}</div>
                <div className='flex justify-between items-center'>
                    <Category category = {dish.category} />
                    <div className='h-[42px]'>{cartval.some(x => (x.id===dish.id && x.count > 0)) ? (<Counter dish = {dish} id = {dish.id}></Counter>): (<button className='py-2 px-4 text-[18px] rounded-[10px] font-semibold bg-[#FFE4BE] text-[#3E362E] playfair-display flex justify-center items-center' onClick={()=>addHandler(dish.id)}>Add to cart</button>)}</div>
                </div>
            </div>
        </div>
     );
}
 
export default DishCard;