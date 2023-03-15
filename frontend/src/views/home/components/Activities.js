import avatar from "../../../public/images/icons/avatar.svg"

function Activities() {
    return (
        <div className="activities bg-color-dark overflow-hidden mt-10">
            <div className="activities-header bg-color-dark-light">
                <h2 className="text-color-light py-2 px-4 font-medium">RECENT ACTIVITIES</h2>
            </div>
            <div className="activities-box m-6 p-6 border-2 border-solid border-color-dark-medium">
                <div className="activities-boxHeader roomListRoom-header flex leading-normal">
                    <div className="w-10 h-10 mr-2">
                        <img src={avatar} alt="Avatar" className="cursor-pointer"/>
                    </div>
                    <p className="leading-normal my-auto text-color-main flex flex-col">
                        @Karmel
                        <span className="text-color-gray">2 hours, 54 minutes</span>
                    </p>
                </div>
                <div className="activities-boxContent text-color-light-gray">
                    <p>commented on "
                        <span className="text-color-main">Python Project</span>"
                    </p>
                    <div className="activities-boxRoomContent mt-4 border-1 p-4 bg-color-bg text-color-light">
                        Very nice
                    </div>
                </div>
            </div>
            <div className="activities-box m-6 p-6 border-2 border-solid border-color-dark-medium">
                <div className="activities-boxHeader roomListRoom-header flex leading-normal">
                    <div className="w-10 h-10 mr-2">
                        <img src={avatar} alt="Avatar" className="cursor-pointer"/>
                    </div>
                    <p className="leading-normal my-auto text-color-main flex flex-col">
                        @Karmel
                        <span className="text-color-gray">2 hours, 54 minutes</span>
                    </p>
                </div>
                <div className="activities-boxContent text-color-light-gray">
                    <p>commented on "
                        <span className="text-color-main">Python Project</span>"
                    </p>
                    <div className="activities-boxRoomContent mt-4 border-1 p-4 bg-color-bg text-color-light">
                        Very nice
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Activities;