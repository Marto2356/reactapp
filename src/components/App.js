import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom'
import MiProvider from './CartContext'

function App () {
    return  (
        <MiProvider>
            <BrowserRouter>
                <Header/>
                <Main/>
                <Footer/>
                <ToastContainer/>
            </BrowserRouter>
        </MiProvider>
    )
}
export default App