import footer from "../public/footersvg.svg"
import Image from "next/image";
import {Container} from "@chakra-ui/react";
import styles from "./footer.module.css"

export default function Footer() {
    return (<div className={`${styles.imgg} `}>

            <div className="flex  select-none text-[#4B4A4A] items-center justify-center min-h-[320px]">
                <Container
                    className=" flex flex-col  md:flex-row  items-center text-center md:text-start md:items-start  justify-center"
                    maxWidth={1580}>
                    <div className="backdrop-blur rounded p-4  flex flex-col md:flex-row">
                        <div className="p-2 flex  flex-col  justify-center">
                            <div className="text-[24px] flex items-center justify-center">МЕНЮ</div>
                            <div className="flex space-x-4">
                                <ul>
                                    <li className='cursor-pointer'>Пицца</li>
                                </ul>
                                <ul>
                                    <li>Пицца</li>
                                </ul>
                            </div>
                        </div>


                        <div className="divider divider-horizontal md:divider-horizontal w-[1%]"></div>
                        <div className="p-2 flex flex-col  justify-center">
                            <div className="text-[24px] flex items-center justify-center">МЕНЮ</div>
                            <div className="flex space-x-4">
                                <ul>
                                    <li className='cursor-pointer'>Пицца</li>
                                </ul>
                                <ul>
                                    <li>Пицца</li>
                                </ul>
                            </div>
                        </div>
                        <div className="divider divider-horizontal md:divider-horizontal  w-[1%]"></div>
                        <div className="p-2 flex flex-col  justify-center">
                            <div className="text-[24px] flex items-center justify-center">МЕНЮ</div>
                            <div className="flex space-x-4">
                                <ul>
                                    <li className='cursor-pointer'>Пицца</li>
                                </ul>
                                <ul>
                                    <li>Пицца</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}