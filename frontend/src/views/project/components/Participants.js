import avatar from "../../../public/images/icons/avatar.svg"
import {Avatar} from "@mantine/core";

function Participants() {
    return (
        <div className="pt-10 h-[90vh]">
            <div className="h-full w-full rounded-lg overflow-hidden bg-color-dark">
                <div className="bg-color-dark-light rounded-t-md">
                    <h2 className="text-color-light py-2 px-4">PARTICIPANTS
                        <span className="ml-1.5 text-color-main">(3 Joined)</span>
                    </h2>
                </div>
                <div className="h-full w-full p-4 flex flex-col gap-4">
                    <div className="flex leading-normal items-center">
                        <Avatar src={avatar} alt="Avatar"
                                sx={{
                                    'cursor': "pointer", 'position': "static"
                                }}
                        />
                        <div className="flex-col pl-3">
                            <p className="text-sm text-color-light-gray">Mikolaj Petecki</p>
                            <p className="text-sm text-color-main cursor-pointer">@Karmel</p>
                        </div>
                    </div>
                    <div className="flex leading-normal items-center">
                        <Avatar src={avatar} alt="Avatar"
                                sx={{
                                    'cursor': "pointer", 'position': "static"
                                }}
                        />
                        <div className="flex-col pl-3">
                            <p className="text-sm text-color-light-gray">Kamil Slimak</p>
                            <p className="text-sm text-color-main cursor-pointer">@kajak</p>
                        </div>
                    </div>
                    <div className="flex leading-normal items-center">
                        <Avatar src={avatar} alt="Avatar"
                                sx={{
                                    'cursor': "pointer", 'position': "static"
                                }}
                        />
                        <div className="flex-col pl-3">
                            <p className="text-sm text-color-light-gray">Jas Wedrowiec</p>
                            <p className="text-sm text-color-main cursor-pointer">@johnnie_walker</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Participants;