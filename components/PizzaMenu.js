import {useEffect, useState} from "react";
import ItemCart from "./itemCart";
import {useDispatch, useSelector} from "react-redux";
import {clearFilter, doFilter} from "../slices/busketSlice"

export default function PizzaMenu() {
    const [content, setContent] = useState([])
    const [pizzaFilterType, setPizzaFilterType] = useState(null)
    const [relevant, setRelevant] = useState([])
    const dispatch = useDispatch()
    const {filters} = useSelector(state => state.busketSlice)
    function filterFunction(filterType) {

        if (filterType === 0) {

            dispatch(clearFilter())
        }
        if (filterType > 0) {
            dispatch(doFilter(filterType))
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


                })
            }
            fetch('api/findallproducts', requestOptions)
                .then(response => response.json())
                .then(data => {
                    setContent(data)
                });
        }


    }
    useEffect(() => {

        awdf(1, filters)
    }, [filters])

    const [typeFilters, setTypeFilters] = useState(false)
    const [typeFilter1, setTypeFilter1] = useState(false)
    const [typeFilter2, setTypeFilter2] = useState(false)
    const [typeFilter3, setTypeFilter3] = useState(false)
    return (<>
        <div className="md:p-3 flex flex-row items-center justify-between">
            <div className="text-4xl text-[#FB9347] font-bold md:pl-4">
                Пицца
            </div>
            <div>
                <div className="dropdown dropdown-end">
                    <label tabIndex="0" className="btn m-1">Click</label>
                    <ul tabIndex="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li onClick={() => {

                            filterFunction(0)
                        }}><a >Всё</a></li>
                        <li onClick={() => {
                            setTypeFilter1(!typeFilter1)
                            filterFunction(1)
                        }}><a>Тип 1</a></li>
                        <li onClick={() => {
                            setTypeFilter2(!typeFilter2)
                            filterFunction(2)
                        }}><a>Тип 2</a></li>
                        <li onClick={() => {
                            setTypeFilter3(!typeFilter3)
                            filterFunction(3)
                        }}><a>Тип 3</a></li>

                    </ul>
                </div>
            </div>
        </div>
        <div
            className="grid grid-cols-1 mt-4 min-h-[200px] place-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">


            {content !== undefined && content.map((content, index) =>

                (<ItemCart id={content.id} description={content.description} key={index} img={content.img}
                           price={content.price} title={content.title}/>))}


        </div>
    </>)
}