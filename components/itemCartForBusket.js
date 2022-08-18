import Image from "next/image";
import {useDispatch, useSelector} from "react-redux";
import {addItem} from "../slices/busketSlice";
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/autoplay"
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export default function ItemCartForBusket({id, title,price,img,description}){
    const dispatch = useDispatch()
    const {count} = useSelector(state => state.busketSlice.items.find(obj => obj.id === id)) || 0
    const onClickAdd = (id,title,price,img) => {
        const item = {
            id,
            title,
            price,
            img,
        }
        dispatch(addItem(item))
    }
        return(
            <div     className="flex hover:shadow-2xl h-[250px] w-[400px]  md:h-[407px] p-4 rounded md:w-[250px] flex-row md:flex-col md:m-2 md:my-4 items-center justify-center">
        <div className="flex items-center   justify-center w-[50%] md:w-full">
            <Image className="rounded-[180px]" src={img} height={250} width={250}/>
        </div>

        <div className="flex items-center justify-center flex-col w-[50%] md:w-full">
            <div className="flex  items-center justify-center text-left md:text-center font-normal text-2xl">{title}</div>
            <p className="flex text-center items-center text-start justify-start mt-7  min-h-[50px] text-neutral-focus/80">{description}</p>
            <div className="flex  flex-row w-full items-center justify-center mt-6">
                <div className="md:p-3 p-1  px-2 md:px-4 items-center justify-center rounded bg-primary text-primary-content text-[16px] md:text-xl">{price} Р</div>
                <div onClick={()=> onClickAdd(id,title,price,img) } className="btn btn-sm  md:btn-md  ml-auto justify-center p-2 items-center btn-outline rounded-[90px]">Выбрать {count}</div>
            </div>
        </div>
    </div>
        )
}