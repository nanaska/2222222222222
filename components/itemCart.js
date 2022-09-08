import Image from "next/image";
import {useDispatch, useSelector} from "react-redux";
import {addItem} from "../slices/busketSlice";
import { motion, AnimatePresence } from "framer-motion"
export default function ItemCart({id, title,price,img,description, weight}){
    const dispatch = useDispatch()
    const {count} = useSelector(state => state.busketSlice.items.find(obj => obj.id === id)) || 0
    const onClickAdd = (id,title,price,img,weight) => {
        const item = {
            id,
            title,
            price,
            img,
            weight
        }
        dispatch(addItem(item))
    }
    return(
        <AnimatePresence>

        <motion.div
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{duration: .2}}
            exit={{ opacity: 0 }}
             className="flex relative     2xl:p-0   md:hover:shadow-2xl h-full w-full  rounded  flex-row md:flex-col items-center justify-center">
        <div className="flex items-center   justify-center w-[50%] md:w-full">
            <Image className="" src={img} height={350} width={350}/>
        </div>
        <div className="absolute top-1 right-2 ">
            <span className="font-[400] text-[18px] text-[#CBCBCB]">{weight} Г</span>
        </div>
        <div className="flex  items-center justify-center flex-col pr-2 w-[50%] md:w-full">
            <div className="flex  items-center font-normals justify-center whitespace-nowrap text-center md:text-center font-normal sm:text-[32px] text-[24px]"><h3>{title}</h3></div>
            <p className="flex text-center items-center text-start py-3 justify-start text-[18px] text-[#868484] min-h-[50px]"><h4>{description}</h4></p>
            <div className="grid grid-cols-2 place-items-center ">
                <div className="md:p-3   sm:ml-0 sm:px-4 flex items-center justify-center whitespace-nowrap rounded text-[#313131] sm:text-[28px] text-[24px]">{price} ₽</div>
                <div className="outline outline-2 outline-[#FF8932] md:my-1 whitespace-nowrap  sm:px-4 p-2 text-black  duration-75 active:scale-105 select-none  sm:py-1 flex justify-center sm:p-5  items-center hover:bg-[#FF8932] rounded-[90px]" onClick={()=> onClickAdd(id,title,price,img) }>Выбрать {count}</div>
            </div>
        </div>
    </motion.div>
        </AnimatePresence>)
}