import '../styles/globals.css'
import PreHeader from "../components/preHeader";
import Navbar from "../components/navbar";
import store from '../store'
import {Provider, useSelector} from 'react-redux'
import {ChakraProvider, Container} from '@chakra-ui/react'
import Footer from "../components/footer";
import {useEffect, useRef, useState} from "react";

function MyApp({Component, pageProps}) {
    const [preHe, setPreHe] = useState(false)
    const [na, setNa] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    })

    const handleScroll = () => {

        if(scrollY > 200){
            setPreHe(true)
        }else{
            setPreHe(false)
        }
        if(scrollY >= 200){
            setNa(true)
        }else{
            setNa(false)
        }
    }

    return (
        <ChakraProvider>
            <Provider store={store}>
                <div className= "bg-[#EFEEEE]">
                    <Container maxWidth={1580}>
                        <PreHeader/>
                    </Container>
                </div>
                <div className={na? "sticky shadow transition ease-in duration-300 z-20 top-0 justify-between w-full bg-[#fff]":"flex shadow transition ease-in duration-300 z-20 justify-between w-full bg-[#fff]"}>
                    <Container onScroll={handleScroll} className="flex justify-between " maxWidth={1580}>

                        <Navbar/>
                    </Container>
                </div>
                <Component {...pageProps} ></Component>

                <Footer/>

            </Provider>
        </ChakraProvider>
    )
}

export default MyApp
