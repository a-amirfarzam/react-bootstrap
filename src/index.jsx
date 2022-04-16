import ReactDOM from 'react-dom'
import Header from "./Header";
import App from './App';
import Footer from "./Footer";
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'


ReactDOM.render(
    <>
        <Header />
        <App />
        <Footer />
    </>
    , document.getElementById('root')
)

document.body.style = 'background: rgb(239 246 255);';