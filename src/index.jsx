import ReactDOM from 'react-dom'
import Header from "./Header";
import App from './App';
import Footer from "./Footer";


ReactDOM.render(
    <>
        <Header />
        <App />
        <Footer />
    </>
    , document.getElementById('root')
)

// document.body.style = 'background: rgb(239 246 255);';
// document.getElementsByTagName('html')[0].setAttribute("dir", "rtl");