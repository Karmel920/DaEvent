import {IoIosPeople} from "react-icons/io"
import avatar from "../public/images/icons/avatar.svg"
import {Link} from "react-router-dom";
import {Avatar} from "@mantine/core";
import {BsChevronDown} from "react-icons/bs";

function Header() {
    return (
        <div className="bg-color-dark w-full fixed">
            <div className="w-11/12 max-w-[1440px] flex justify-between mx-auto px-6">
                <div className="flex justify-center align-middle mt-3 mb-2">
                    <Link to='/'>
                        <IoIosPeople size="3em" className="text-color-main cursor-pointer"></IoIosPeople>
                    </Link>
                    <Link to='/'>
                        <p className="text-xl pl-5 pt-2.5 font-semibold text-color-light cursor-pointer">DaEvent</p>
                    </Link>
                </div>
                <div className="mt-3 flex gap-4 items-center">
                    <Link to="/profile">
                        <Avatar src={avatar} alt="Avatar"
                                sx={{
                                    'cursor': "pointer"
                                }}
                        />
                    </Link>
                    <Link to='/login'>
                        <p className="text-color-gray cursor-pointer">Login</p>
                    </Link>
                    {/*<div>*/}
                    {/*    <p className="text-color-gray cursor-pointer">Karmel</p>*/}
                    {/*    <p className="text-color-main cursor-pointer">@Karmel</p>*/}
                    {/*</div>*/}
                    {/*<BsChevronDown/>*/}
                </div>
            </div>
        </div>
    );
}

export default Header;
