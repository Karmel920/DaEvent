import avatar from "../public/images/icons/avatar.svg"
import {AiOutlineTeam} from "react-icons/ai";
import {Avatar} from "@mantine/core";
import {Link} from "react-router-dom";

function Feed() {
    return (
        <div>
            <div className="bg-color-dark p-6 rounded-xl mb-6">
                <div className="flex justify-between items-center text-color-light">
                    <Link to="/profile">
                        <div className="flex items-center">
                            <Avatar src={avatar} alt="Avatar" size="md"
                                sx={{
                                    'cursor': "pointer", 'position': "static"
                                }}
                            />
                            <span className="text-color-main ml-2 cursor-pointer">@Karmel</span>
                        </div>
                    </Link>
                    <div>
                        <span>1 day, 19 hours ago</span>
                    </div>
                </div>
                <Link to='/project'>
                    <div className="cursor-pointer text-color-light font-medium text-xl mt-4 mb-6 transition">
                        <p>Python project</p>
                    </div>
                </Link>
                <div className="flex justify-between text-color-light border-solid border-color-gray border-t pt-4">
                    <div className="flex gap-3 items-center">
                        <AiOutlineTeam size="2em" className="text-color-main "/>
                        12 Joined
                    </div>
                    <p className="bg-color-dark-medium py-1.5 px-4 rounded-3xl font-medium">Python</p>
                </div>
            </div>
            <div className="bg-color-dark p-6 rounded-xl mb-6">
                <div className="flex justify-between items-center text-color-light">
                    <Link to="/profile">
                        <div className="flex items-center">
                            <Avatar src={avatar} alt="Avatar" size="md"
                                    sx={{
                                        'cursor': "pointer", 'position': "static"
                                    }}
                            />
                            <span className="text-color-main ml-2 cursor-pointer">@Karmel</span>
                        </div>
                    </Link>
                    <div>
                        <span>1 day, 19 hours ago</span>
                    </div>
                </div>
                <Link to='/project'>
                    <div className="cursor-pointer text-color-light font-medium text-xl mt-4 mb-6 transition">
                        <p>Python project</p>
                    </div>
                </Link>
                <div className="flex justify-between text-color-light border-solid border-color-gray border-t pt-4">
                    <div className="flex gap-3 items-center">
                        <AiOutlineTeam size="2em" className="text-color-main "/>
                        12 Joined
                    </div>
                    <p className="bg-color-dark-medium py-1.5 px-4 rounded-3xl font-medium">Python</p>
                </div>
            </div>
        </div>
    );
}

export default Feed;