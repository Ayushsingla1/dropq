import foodPic from '../assets/bhole chature.jpg'
import Counter from './Counter';

const CartDish = ({dish}) => {
    return ( 
        <div className='flex justify-between w-full gap-x-2 pr-2 bg-[#3E362E] rounded-md text-[#FFE4BE] items-center'>
            <div className='min-w-3/12'><img src={foodPic} className='w-[230px] rounded-md h-[170px]' alt='food pic'/></div>
            <div className='flex flex-col justify-between gap-y-[60px] w-9/12'>
                <div className='flex items-center text-[20px] inknut'>{dish.dish.item}</div>
                <div className=' flex justify-between items-center'>
                    <div className='h-[42px] '><Counter id={dish.id} dish={dish.dish}/></div>
                    <div className='text-[24px] inknut'>Rs {dish.dish.price}</div>
                </div>
            </div>
        </div>
     );
}
 
export default CartDish;