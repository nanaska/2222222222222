import Image from "next/image";
import {useDispatch, useSelector} from "react-redux";
import {addItem} from "../slices/busketSlice";

export default function ItemCart({id, title,price,img,description}){
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
        <div
             className="flex space-x-2  my-2  md:hover:shadow-2xl h-[195px] sm:h-[210] md:w-[400px]  md:h-[360px] md:px-3 rounded md:w-[250px] flex-row md:flex-col items-center justify-center">
        <div className="flex items-center   justify-center w-[50%] md:w-full">
            <Image className="" src={img} height={250} width={250}/>
        </div>

        <div className="flex  items-center justify-center flex-col pr-2 w-[50%] md:w-full">
            <div className="flex  items-center font-normals justify-center text-left md:text-center font-normal  text-[24px]">{title}</div>
            <p className="flex text-center items-center text-start justify-start text-[14px] text-[#868484] min-h-[50px]">{description}</p>
            <div className="flex  flex-row w-full items-center justify-center ">
                <div className="md:p-3   px-2 md:px-4 items-center justify-center whitespace-nowrap rounded text-[#313131] text-[24px]">{price} Р</div>
                <div className="btn btn-sm border-[#FF8932]  md:btn-md  ml-auto justify-center p-2 mr-1 pl-3 items-center btn-outline hover:bg-[#FF8932] rounded-[90px]" onClick={()=> onClickAdd(id,title,price,img) }>Выбрать {count}</div>
            </div>
        </div>
    </div>)
}