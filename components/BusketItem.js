import {addItem, minusItem, removeItem} from "../slices/busketSlice";
import {useDispatch} from "react-redux";
import Image from "next/image"
export default function BusketItem({id, title, price, count, img}) {
    const dispatch = useDispatch()
    const onClickPlus = () => {
        dispatch(addItem({
            id,
        }))
    }
    const onClickMinus = () => {
        dispatch(minusItem(id))
    }
    const onRemoveItem = () => {
        dispatch(removeItem(id))
    }
    return (
        <div className="flex mt-2 w-[300px] items-center sm:w-[600px] md:w-[720px] lg:w-[1024px] justify-between">

            <div className="text-lg  font-[500]"> {title} </div>
            <div className="flex flex-nowrap">
                <div className="flex flex-col w-full items-center justify-center md:flex-row">

                    <div className="flex w-[118px] items-center  border-solid border-2 select-none rounded-[180px]  border-indigo-600 ">
                        <div className=" flex items-center hover:scale-110 cursor-pointer justify-center py-1  w-[40px] h-[10px] px-3"
                             onClick={onClickMinus}>
                            -
                        </div>
                        <div className="bg-yellow-700 rounded-[180px] text-[18px] py-1 px-3">{count}</div>
                        <div className=" flex hover:scale-110 items-center cursor-pointer  justify-center py-1 w-[40px] h-[10px] px-3"
                             onClick={onClickPlus}>
                            +
                        </div>
                    </div>
                    <div className="w-[60px] mt-1 ml-2">
                        <div className="max-h-[40px]">  {price * count} Р</div>
                    </div>
                </div>
                <div className="text-2xl  hidden md:flex hover:scale-110 " onClick={onRemoveItem}>
                    <Image src={`/remove.svg`} height={60} width={60}/>
                </div>
            </div>
        </div>
    )
}