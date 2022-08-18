import '../styles/globals.css'
import PreHeader from "../components/preHeader";
import Navbar from "../components/navbar";
import store from '../store'
import {Provider} from 'react-redux'
import {ChakraProvider, Container} from '@chakra-ui/react'
import Footer from "../components/footer";

function MyApp({Component, pageProps}) {
    return (
        <ChakraProvider>
            <Provider store={store}>
                <div className="bg-[#EFEEEE]">
                    <Container maxWidth={1580}>
                        <PreHeader/>
                    </Container>
                </div>
                <Container maxWidth={1580}>

                    <Navbar/>
                </Container>

                <Component {...pageProps} ></Component>

                <Footer/>

            </Provider>
        </ChakraProvider>
    )
}

export default MyApp
