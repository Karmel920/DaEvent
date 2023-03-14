import {IoIosPeople} from "react-icons/io"
import avatar from "../images/icons/avatar.svg"
import {Link} from "react-router-dom";

function Header() {
    return (
        <div className="bg-color-dark width-full flex justify-between">
            <div className="flex justify-center align-middle mb-3 mt-1">
                <Link to='/'>
                    <IoIosPeople size="3em" className="text-color-main ml-10 cursor-pointer"></IoIosPeople>
                </Link>
                <Link to='/'>
                    <p className="text-xl pl-5 pt-2.5 font-semibold text-color-light cursor-pointer">DaEvent</p>
                </Link>
            </div>
            <div className="w-50 h-12 pt-2.5 flex gap-4 pr-20">
                <img src={avatar} alt="Avatar" className="mr-30 cursor-pointer"/>
                <Link to='/login'>
                    <p className="pt-2 text-color-gray cursor-pointer">Login</p>
                </Link>
            </div>
        </div>
    );
}

export default Header;
