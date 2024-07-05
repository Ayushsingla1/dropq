const FooterSmall = () => {
    return ( 
    <div className="w-full fixed bottom-0 black-shadow-up  flex flex-col justify-between bg-[#3E362E]">
        <div className="flex justify-between items-end">
            <div className="text-[20px] text-[#E8CFAD] opacity-75 podkova"><span className="playfair-display">@MagicTouch</span> All rights reserved</div>
            <div className=" opacity-75 flex gap-x-[20px] mr-[50px] text-[20px] playfair-display text-[#FFE4BE]">
                <div>Email : drop@gm.com</div>
                <div>Phone: 0012234469</div>
            </div>
        </div>
    </div> );
}
 
export default FooterSmall;