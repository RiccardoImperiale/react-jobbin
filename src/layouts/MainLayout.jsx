import { Outlet } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import Header from "../components/Header"

export default function MainLayout() {

    return (
        <>
            <Header />
            <Outlet />
            <ToastContainer />
        </>
    )
}
