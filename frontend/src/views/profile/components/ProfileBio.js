import avatar from "../../../public/images/icons/avatar.svg"
import {Link} from "react-router-dom";
import {Avatar, Button, Grid} from "@mantine/core";

function ProfileBio() {
    return (
        <div className="pt-10">
            <div className="mb-1 flex flex-col items-center">
                <Avatar src={avatar} alt="Avatar" size="xl"
                        sx={{
                            'position': "static",
                        }}
                />
            </div>
            <div className="items-center flex flex-col text-color-light">
                <h3>Mikolaj Petecki</h3>
                <p className="text-color-main">@Karmel</p>
                <Button radius="sm" size="md" color="color-main.4"
                        mt={10}
                        sx={{
                            'position': "static",
                        }}>
                    Edit Profile
                </Button>
            </div>
            <div className="profile__about mb-10">
                <h2 className="text-lg text-color-dark-light">ABOUT</h2>
                <p className="text-color-light-gray">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div class="roomList__header">
                <div>
                    <h2 className="text-lg text-color-dark-light mb-2">PROJECTS CREATED BY KARMEL</h2>
                </div>
            </div>
        </div>
    );
}

export default ProfileBio;