import avatar from "../public/images/icons/avatar.svg"
import {Avatar} from "@mantine/core";
import {Link} from "react-router-dom";

function Activities() {
    return (
        <div className="bg-color-dark overflow-hidden mt-10 rounded-md">
            <div className="bg-color-dark-light rounded-t-md">
                <h2 className="text-color-light py-2 px-4">RECENT ACTIVITIES</h2>
            </div>
            <div className="m-6 p-6 border-2 border-solid border-color-dark-medium">
                <div className="flex leading-normal">
                    <Link to="/profile">
                        <Avatar src={avatar} alt="Avatar"
                                sx={{
                                    'cursor': "pointer", 'position': "static"
                                }}
                        />
                    </Link>
                    <div className="flex flex-col pl-2">
                        <Link to="/profile">
                            <p className="my-auto text-color-main flex flex-col cursor-pointer">
                                @Karmel
                            </p>
                        </Link>
                        <span className="text-color-gray cursor-default text-xs">2 hours, 54 minutes ago</span>
                    </div>
                </div>
                <div className="activities-boxContent text-color-light-gray">
                    <p>commented on "
                        <Link to='/project'>
                            <span className="text-color-main cursor-pointer">Python Project</span>
                        </Link>
                        "
                    </p>
                    <div className="mt-4 text-sm border-1 px-3 py-3 bg-color-bg text-color-light">
                        Very nice
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Activities;