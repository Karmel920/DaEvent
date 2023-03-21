import avatar from "../../../public/images/icons/avatar.svg"
import {Avatar, Button, TextInput} from "@mantine/core";
import {Link} from "react-router-dom";
import {IoMdArrowBack, IoMdClose} from "react-icons/io";
import {AiOutlineEdit} from "react-icons/ai";
import {BsPersonAdd} from "react-icons/bs";

function ProjectContainer() {
    return (
        <div className="pt-10 h-[90vh]">
            <div className="h-full w-full rounded-lg bg-color-dark">
                <div className="bg-color-dark-light rounded-t-lg py-2 px-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Link to='/'>
                                <IoMdArrowBack className="text-color-main text-xl cursor-pointer"/>
                            </Link>
                            <h3 className="text-color-light">PROJECT</h3>
                        </div>
                        <div className="flex items-center gap-2">
                            <Link to='/create-project'>
                                <AiOutlineEdit className="text-color-light-gray text-xl cursor-pointer"/>
                            </Link>
                            <Link to='/delete'>
                                <IoMdClose className="text-color-light-gray text-xl cursor-pointer"/>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="py-4 px-6 flex flex-col gap-2">
                    <div className="flex justify-between">
                        <div className="flex items-center gap-10">
                            <h3 className="text-2xl text-color-main font-medium">React project</h3>
                            <Button color="color-dark-medium.2" radius="md" size="sm"
                                    leftIcon={<BsPersonAdd size="1.2rem" className="mt-0.5 mr-0.5 text-color-dark"/>}
                                    sx={{
                                        'position': "static",
                                    }}>
                                <p className="text-color-dark">Join</p>
                            </Button>
                        </div>
                        <span className="text-color-light-gray">3 weeks ago</span>
                    </div>
                    <div>
                        <p className="text-xs text-color-gray mb-1">HOSTED BY</p>
                        <div className="flex leading-normal items-center">
                            <Link to="/profile" className="flex items-center">
                                <Avatar src={avatar} alt="Avatar"
                                        sx={{
                                            'cursor': "pointer", 'position': "static"
                                        }}
                                />
                                <p className="pl-3 text-sm text-color-main cursor-pointer">@Karmel</p>
                            </Link>
                        </div>
                    </div>
                    <div className="h-32 overflow-auto mb-2">
                        <div className="text-color-light-gray mb-2">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </div>
                        <div className="flex">
                            <p className="bg-color-dark-light py-1.5 text-color-light px-4 rounded-3xl">
                                Python
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="bg-color-bg h-48 overflow-auto">
                            <div className="py-2 px-4">
                                <div className="border-solid border-l border-color-gray mb-2">
                                    <div className="pl-3 py-2 flex flex-col gap-1">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                <div className="flex leading-normal items-center">
                                                    <Avatar src={avatar} alt="Avatar" size="sm"
                                                            sx={{
                                                                'cursor': "pointer", 'position': "static"
                                                            }}
                                                    />
                                                    <p className="pl-2 text-sm text-color-main cursor-pointer">@Karmel</p>
                                                </div>
                                                <p className="ml-3 text-sm text-color-light-gray">40 minutes ago</p>
                                            </div>
                                            <div>
                                                <Link to='/delete'>
                                                    <IoMdClose className="text-color-light-gray text-sm cursor-pointer mr-2"/>
                                                </Link>
                                            </div>
                                        </div>
                                        <p className="text-color-light-gray">Siema</p>
                                    </div>
                                </div>
                                <div className="border-solid border-l border-color-gray mb-2">
                                    <div className="pl-3 py-2 flex flex-col gap-1">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                <div className="flex leading-normal items-center">
                                                    <Avatar src={avatar} alt="Avatar" size="sm"
                                                            sx={{
                                                                'cursor': "pointer", 'position': "static"
                                                            }}
                                                    />
                                                    <p className="pl-2 text-sm text-color-main cursor-pointer">@Karmel</p>
                                                </div>
                                                <p className="ml-3 text-sm text-color-light-gray">40 minutes ago</p>
                                            </div>
                                            <div>
                                                <Link to='/delete'>
                                                    <IoMdClose className="text-color-light-gray text-sm cursor-pointer mr-2"/>
                                                </Link>
                                            </div>
                                        </div>
                                        <p className="text-color-light-gray">Siema</p>
                                    </div>
                                </div>
                                <div className="border-solid border-l border-color-gray mb-2">
                                    <div className="pl-3 py-2 flex flex-col gap-1">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                <div className="flex leading-normal items-center">
                                                    <Avatar src={avatar} alt="Avatar" size="sm"
                                                            sx={{
                                                                'cursor': "pointer", 'position': "static"
                                                            }}
                                                    />
                                                    <p className="pl-2 text-sm text-color-main cursor-pointer">@Karmel</p>
                                                </div>
                                                <p className="ml-3 text-sm text-color-light-gray">40 minutes ago</p>
                                            </div>
                                            <div>
                                                <Link to='/delete'>
                                                    <IoMdClose className="text-color-light-gray text-sm cursor-pointer mr-2"/>
                                                </Link>
                                            </div>
                                        </div>
                                        <p className="text-color-light-gray">Siema</p>
                                    </div>
                                </div>
                                <div className="border-solid border-l border-color-gray mb-2">
                                    <div className="pl-3 py-2 flex flex-col gap-1">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                <div className="flex leading-normal items-center">
                                                    <Avatar src={avatar} alt="Avatar" size="sm"
                                                            sx={{
                                                                'cursor': "pointer", 'position': "static"
                                                            }}
                                                    />
                                                    <p className="pl-2 text-sm text-color-main cursor-pointer">@Karmel</p>
                                                </div>
                                                <p className="ml-3 text-sm text-color-light-gray">40 minutes ago</p>
                                            </div>
                                            <div>
                                                <Link to='/delete'>
                                                    <IoMdClose className="text-color-light-gray text-sm cursor-pointer mr-2"/>
                                                </Link>
                                            </div>
                                        </div>
                                        <p className="text-color-light-gray">Siema</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <form>
                                <TextInput placeholder="Write your message here..."
                                           styles={{input: {backgroundColor: "#696d97"}}}
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectContainer;