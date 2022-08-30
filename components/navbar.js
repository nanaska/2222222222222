import NavBarStart from "./NavBarStart";
import NavBarEnd from "./NavBarEnd";
import DeliveryZone from "./DeliveryZone";
import {Link} from 'react-scroll'
import {Popover, PopoverBody, PopoverContent, PopoverTrigger, Portal} from "@chakra-ui/react";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import NavBarMenu from "./NavBarMenu";

export default function Navbar() {
    const router = useRouter()
    const [notMenu, setNotMenu] = useState(true)
    useEffect(()=>{
        if(router.pathname == "/"){
            setNotMenu(false)
        }else {setNotMenu(true)}
    },[router.pathname])
    return (<>

            <div className="navbar  md:px-2.5 bg-base-100">
                <div className="navbar-start">
                    <NavBarStart/>
                    <ul className="menu menu-horizontal p-0  hidden lg:flex">
                        {notMenu && <NavBarMenu />}
                        {!notMenu && <Popover trigger="hover">
                            <PopoverTrigger>
                                <label  className=" flex items-center justify-center font-[600] text-[24px] px-5 hover:underline whitespace-nowrap text-black cursor-pointer   border-[#FF8932]">Меню</label>
                            </PopoverTrigger>
                            <Portal>
                                <PopoverContent p={0} m={0}>

                                    <PopoverBody   p={0} m={0} >
                                        <ul  className=" grid select-none grid-cols-2 mt-3  items-center place-items-center shadow bg-white border-none  ">
                                            <li className="bg-white p-3 ">
                                                <Link to="PizzaMenu" spy={true} smooth={true} offset={-60} duration={500}>
                                                    <span className="text-[18px] cursor-pointer hover:underline">Пицца</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="RollsMenu" spy={true} smooth={true} offset={-60} duration={500}>
                                                    <span className="text-[18px] cursor-pointer hover:underline">Роллы</span>
                                                </Link>
                                            </li>

                                        </ul>
                                    </PopoverBody>

                                </PopoverContent>
                            </Portal>
                        </Popover>}
                        <DeliveryZone/>
                        <Popover trigger="hover">
                            <PopoverTrigger>
                                <label  className=" flex items-center justify-center font-[600] text-[24px] px-5 hover:underline whitespace-nowrap text-black cursor-pointer   border-[#FF8932]">Ещё</label>
                            </PopoverTrigger>
                            <Portal>
                                <PopoverContent p={0} m={0}>

                                    <PopoverBody   p={0} m={0} >
                                        <ul  className=" grid select-none grid-cols-1  items-center place-items-center shadow bg-white border-none  ">
                                            <li className="text-[18px] py-2 cursor-pointer hover:underline">
                                                    <span className="text-[18px] py-2 cursor-pointer hover:underline">Контакты</span>
                                            </li>
                                            <li className="text-[18px] py-2 cursor-pointer hover:underline">
                                                    <span className="text-[18px] py-2 cursor-pointer hover:underline">Вакансии</span>
                                            </li>
                                            <li className="text-[18px] py-2 cursor-pointer hover:underline">
                                                    <span className="text-[18px] py-2 cursor-pointer hover:underline">О компании</span>
                                            </li>

                                        </ul>
                                    </PopoverBody>

                                </PopoverContent>
                            </Portal>
                        </Popover>
                    </ul>
                </div>
                <div className="navbar-center">


                </div>
                <div className="navbar-end  flex flex-row space-x-1">
                    <NavBarEnd/>
                </div>

            </div>
        </>
    )
}