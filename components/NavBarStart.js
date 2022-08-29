import DrawerHamburger from "./drawerHamburger";
import Link from "next/link";
import {setMenuFilter} from "../slices/menuSlice";
import {useDispatch, useSelector} from "react-redux";

export default function NavBarStart(){
    const {typeMenuu} = useSelector(state => state.menuSlice)
    const dispatch = useDispatch()
    return(<>


            {typeMenuu == 0 && <>
                <div className="dropdown">

                    <DrawerHamburger/>

                </div>
                <Link href="/"><a className="btn btn-ghost normal-case text-2xl">SAGAY</a></Link>
            </>}
            {typeMenuu !== 0 && <div>
                <div className="ml-5 flex items-center justify-center"
                     onClick={() => dispatch(setMenuFilter(0))}>
                    <div className="border-[12px] border-transparent border-l-gray-600 ml-2
        rotate-180 transition-transform origin-left
        "></div>
                    <Link href="/"><a className="btn btn-ghost normal-case hover:bg-black text-2xl">SAGAY</a></Link>
                </div>

            </div>}



    </>)
}