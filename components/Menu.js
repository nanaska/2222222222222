import PizzaMenu from "./PizzaMenu";
import RollsMenu from "./RollsMenu"
import {useEffect, useState} from "react";
import CardForPhoneMenu from "./CardForPhoneMenu";
import { useSelector} from "react-redux";
import {AnimatePresence, motion} from "framer-motion";

export default function Menu() {
    const [width, setWidth] = useState()


    const {typeMenuu} = useSelector(state => state.menuSlice)
    function checkWidth(){
        if(typeof window !== "undefined") {
            setWidth(window.innerWidth)

        }
    }

    useEffect(()=>{
        if(typeof window !== "undefined") {
        window.addEventListener('resize', checkWidth)
        const a = window.innerWidth
            setWidth(a)
        return () => {
            window.removeEventListener('resize', checkWidth)
        }}

    },[])
    return (<div className="md:p-0">

        {typeMenuu == 0 && width < 768 && <AnimatePresence> <motion.div initial={{opacity: 0, x: -1000}} transition={{
            duration: .5,  type: "tween"}
        } animate={{opacity: 1, x:0}} exit={{opacity: 0, x:1000}}>

            <div className=" grid  place-content-stretch grid-cols-2 grid-rows-18  gap-2">

                <CardForPhoneMenu imgType="hamburger.png" click={1} text="Бургеры" bgColor="bg-[#4F85B6]"/>
                <CardForPhoneMenu imgType="rollspng.png" click={2} text="Суши и роллы" bgColor="bg-[#B440DD]"/>
                <CardForPhoneMenu imgType="salats.png" click={3} text="Салаты" bgColor="bg-[#91BB5B]"/>
                <CardForPhoneMenu imgType="zakuski.png" click={4} text="Закуски" bgColor="bg-[#D27643]"/>

            </div>
        </motion.div>
        </AnimatePresence>}
        {typeMenuu == 1 && width < 768 &&   <AnimatePresence> <motion.div initial={{opacity: 0, x: -1000}} transition={{
        duration: .5,
            type: "tween"}
        } animate={{opacity: 1, x:0}} exit={{opacity: 0, x:-1000}}>


                <PizzaMenu/>


        </motion.div> </AnimatePresence>}
        {typeMenuu == 2 && width < 768 &&   <AnimatePresence> <motion.div initial={{opacity: 0, x: -1000}} transition={{
            duration: .5,
            type: "tween"}
        } animate={{opacity: 1, x:0}} exit={{opacity: 0, x:-1000}}>



            <RollsMenu/>

        </motion.div> </AnimatePresence>}
        {width > 768 && <>

            <div name="PizzaMenu"><PizzaMenu/></div>
            <div name="RollsMenu"><RollsMenu/></div>
        </>}


    </div>)
}



