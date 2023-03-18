import avatar from "../public/images/icons/avatar.svg"
import {Avatar} from "@mantine/core";

function Activities() {
    return (
        <div className="bg-color-dark overflow-hidden mt-10">
            <div className="bg-color-dark-light">
                <h2 className="text-color-light py-2 px-4 font-medium">RECENT ACTIVITIES</h2>
            </div>
            <div className="m-6 p-6 border-2 border-solid border-color-dark-medium">
                <div className="flex leading-normal">
                    <Avatar src={avatar} alt="Avatar"
                            sx={{
                                'cursor': "pointer"
                            }}
                    />
                    <p className="pl-2 leading-normal my-auto text-color-main flex flex-col">
                        @Karmel
                        <span className="text-color-gray">2 hours, 54 minutes</span>
                    </p>
                </div>
                <div className="activities-boxContent text-color-light-gray">
                    <p>commented on "
                        <span className="text-color-main">Python Project</span>"
                    </p>
                    <div className="mt-4 text-sm border-1 px-3 py-3 bg-color-bg text-color-light">
                        Very nice
                    </div>
                </div>
            </div>
            <div className="m-6 p-6 border-2 border-solid border-color-dark-medium">
                <div className="flex leading-normal">
                    <Avatar src={avatar} alt="Avatar"
                            sx={{
                                'cursor': "pointer"
                            }}
                    />
                    <p className="pl-2 leading-normal my-auto text-color-main flex flex-col">
                        @Karmel
                        <span className="text-color-gray">2 hours, 54 minutes</span>
                    </p>
                </div>
                <div className="activities-boxContent text-color-light-gray">
                    <p>commented on "
                        <span className="text-color-main">Python Project</span>"
                    </p>
                    <div className="mt-4 text-sm border-1 px-3 py-3 bg-color-bg text-color-light">
                        Very nice
                    </div>
                </div>
            </div>
            <div className="m-6 p-6 border-2 border-solid border-color-dark-medium">
                <div className="flex leading-normal">
                    <Avatar src={avatar} alt="Avatar"
                            sx={{
                                'cursor': "pointer"
                            }}
                    />
                    <p className="pl-2 leading-normal my-auto text-color-main flex flex-col">
                        @Karmel
                        <span className="text-color-gray">2 hours, 54 minutes</span>
                    </p>
                </div>
                <div className="activities-boxContent text-color-light-gray">
                    <p>commented on "
                        <span className="text-color-main">Python Project</span>"
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