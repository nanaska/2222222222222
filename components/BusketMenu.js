import {useDispatch, useSelector} from "react-redux";
import BusketItem from "./BusketItem";
import {clearItems} from "../slices/busketSlice";
import {useEffect, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import {A11y, Autoplay, Navigation, Pagination, Scrollbar} from 'swiper';


// Import Swiper styles
import 'swiper/css';
import "swiper/css/autoplay"
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ItemCartForBusket from "./itemCartForBusket";


export default function BusketMenu({}) {
    const dispatch = useDispatch()
    const [relevant, setRelevant] = useState([])
    const relev = async () => {


        await fetch('api/takemuchrelevant')
            .then(response => response.json())
            .then(data => {
                setRelevant(data)
                console.log(relevant)
            });

    }

    useEffect(() => {
        relev()

    }, [])
    const {totalPrice, items} = useSelector(state => state.busketSlice)
    const totalCount = items.reduce((sum, item) => sum + item.count, 0)
    const onDeleteItems = () => {
        dispatch(clearItems())
    }
    return (<>
        <div className="items-center justify-center flex flex-col p-2">
            <div className="md:px-10">
                <div className="flex  items-center justify-between py-2">
                    {items.length > 0 && <>
                        <div className="text-3xl font-bold">Корзина</div>
                        <div className="cursor-pointer select-none" onClick={onDeleteItems}>Удалить все товары</div>
                    </>}
                    {items.length == 0 && <div className="text-4xl">
                        Извините, вы пока еще ничего не добавили в корзину</div>}
                </div>
                {items.map((content, index) => <BusketItem key={content.id} title={content.title} price={content.price}
                                                           img={content.img} count={content.count} id={content.id}/>)}
            </div>

            <div>

            </div>
            {/*123*/}
            {/*<Swiper modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}*/}
            {/*        spaceBetween={0}*/}
            {/*        slidesPerView={2}*/}
            {/*        centeredSlides={true}*/}
            {/*        pagination={{ clickable: true }}*/}
            {/*        onSwiper={(swiper) => console.log(swiper)}*/}
            {/*        onSlideChange={() => console.log('slide change')}>*/}

            {/*    <SwiperSlide>*/}
            {/*        <div></div>*/}
            {/*    </SwiperSlide>*/}
            {/*    <SwiperSlide><div></div></SwiperSlide>*/}

            {/*</Swiper>*/}

            {/*<div>Всего будет стоить: {totalPrice}</div>*/}
            {/*<div>Всего пицц: {totalCount}</div>*/}
        </div>
        <div className="md:mx-[230px] h-[130px]">
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={0}
                slidesPerView={4}
                centeredSlides={false}
                pagination={{clickable: true}}

                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >

                {relevant.map((relevant, index) =>
                    <SwiperSlide key={relevant.id}>
                        <ItemCartForBusket  description={relevant.description} title={relevant.title}
                                           price={relevant.price} img={relevant.img}
                        />
                    </SwiperSlide>)
                }


                ...
            </Swiper>
        </div>
    </>)
}
