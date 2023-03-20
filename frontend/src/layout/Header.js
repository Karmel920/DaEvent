import {IoIosPeople} from "react-icons/io"
import avatar from "../public/images/icons/avatar.svg"
import {Link} from "react-router-dom";
import {Avatar, TextInput} from "@mantine/core";
import {BsChevronDown} from "react-icons/bs";
import {AiOutlineSearch} from "react-icons/ai";

function Header() {
    return (
        <div className="bg-color-dark w-full fixed">
            <div className="w-11/12 max-w-[1440px] flex justify-between mx-auto px-6 pb-3 pt-5">
                <div className="flex justify-center align-middle">
                    <Link to='/'>
                        <IoIosPeople size="3em" className="text-color-main cursor-pointer"></IoIosPeople>
                    </Link>
                    <Link to='/'>
                        <p className="text-xl pl-5 pt-2.5 font-semibold text-color-light cursor-pointer">DaEvent</p>
                    </Link>
                </div>
                <div className="flex items-center justify-start ml-16 w-full">
                    <form className="w-2/5">
                        <TextInput
                            placeholder="Search Projects..."
                            radius="sm"
                            size="md"
                            w={"100%"}
                            icon={<AiOutlineSearch size="1.2rem"/>}
                            styles={{input: {backgroundColor: "#51546e", borderWidth: "0px"}}}
                        />
                    </form>
                </div>
                <div className="flex gap-4 items-center">
                    <Link to="/profile">
                        <Avatar src={avatar} alt="Avatar"
                                sx={{
                                    'cursor': "pointer"
                                }}
                        />
                    </Link>
                    {/*<Link to='/login'>*/}
                    {/*    <p className="text-color-gray cursor-pointer">Login</p>*/}
                    {/*</Link>*/}
                    <div>
                        <p className="text-color-gray cursor-pointer">Karmel</p>
                        <p className="text-color-main cursor-pointer">@Karmel</p>
                    </div>
                    <BsChevronDown className="cursor-pointer text-color-gray hover:text-color-main"/>
                </div>
            </div>
        </div>
    );
}

export default Header;
