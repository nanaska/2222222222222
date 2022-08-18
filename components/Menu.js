
import PizzaMenu from "./PizzaMenu";
import {useState} from "react";


export default function Menu(){
    const [menu, setMenu] = useState()
     return(<div className="md:p-6">

            <PizzaMenu/>

    </div>)
}



