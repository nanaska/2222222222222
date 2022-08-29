import {useEffect, useState} from "react";
import ItemCart from "../components/itemCart";
import {useDispatch, useSelector} from "react-redux";
import {clearFilter1, doFilter1} from "../slices/busketSlice"
import {
    Button,
    Checkbox,
    Popover,
    PopoverBody,
    PopoverContent,
    PopoverTrigger,
    Portal,
    Stack, Text, useCheckboxGroup,
} from "@chakra-ui/react";



export default function PizzaMenu() {
    const [content, setContent] = useState([])
    const dispatch = useDispatch()
    const {filters1} = useSelector(state => state.busketSlice)
    function filterFunction(filterType) {

        if (filterType === 0) {

            dispatch(clearFilter1())
        }
        if (filterType > 0) {
            dispatch(doFilter1(filterType))
        }
    }

    const awdf = async (type, filters) => {
        if (filters.length !== 0) {

            const requestOptions = {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    "producttype": type,

                    "filtertype": [filters]
                })
            }

            fetch('api/findexactproduct', requestOptions)
                .then(response => response.json())
                .then(data => {
                    setContent(data)
                });
        }
        if (filters.length === 0) {
            const requestOptions = {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    "producttype": type,
                    "filtertype": [1,2,3]

                })
            }
            fetch('api/findexactproduct', requestOptions)
                .then(response => response.json())
                .then(data => {
                    setContent(data)
                });
        }


    }
    useEffect(() => {

        awdf(2, filters1)
    }, [filters1])


    const [typeFilters, setTypeFilters] = useState(true)
    const [typeFilter1, setTypeFilter1] = useState(false)
    const [typeFilter2, setTypeFilter2] = useState(false)
    const [typeFilter3, setTypeFilter3] = useState(false)
    return (<>
        <div className="md:p-3 mt-12 flex flex-row items-center justify-between">
            <div className="text-4xl text-[#FB9347] font-bold md:pl-4">
                Роллы
            </div>
            <div className="hidden md:flex dropdown dropdown-end">
                <label tabIndex="0" className="px-[50px] py-1 text-black border border-2 rounded-[90px]  border-[#FF8932]">Фильтр пицц</label>
                <ul tabIndex="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li onClick={() => {
                        setTypeFilter1(false)
                        setTypeFilter2(false)
                        setTypeFilter3(false)
                        setTypeFilters(true)
                        filterFunction(0)
                    }}><a className={typeFilters ? "bg-black" : "bg-white"}>Всё</a></li>
                    <li onClick={() => {
                        setTypeFilter1(!typeFilter1)
                        setTypeFilters(false)
                        filterFunction(1)
                    }}><a className={typeFilter1 ? "bg-black" : "bg-white"}>Тип 1</a></li>
                    <li onClick={() => {
                        setTypeFilter2(!typeFilter2)
                        setTypeFilters(false)
                        filterFunction(2)
                    }}><a className={typeFilter2 ? "bg-black" : "bg-white"}>Тип 2</a></li>
                    <li onClick={() => {
                        setTypeFilter3(!typeFilter3)
                        setTypeFilters(false)
                        filterFunction(3)
                    }}><a className={typeFilter3 ? "bg-black" : "bg-white"}>Тип 3</a></li>

                </ul>
            </div>
        </div>
        <div
            className="grid grid-cols-1 gap-x-8 mt-4 min-h-[200px] place-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-5">


            {content !== undefined && content.map((content, index) =>

                (<ItemCart id={content.id} description={content.description} key={index} img={content.img}
                           price={content.price} title={content.title} weight={content.weight}/>))}


        </div>
    </>)
}