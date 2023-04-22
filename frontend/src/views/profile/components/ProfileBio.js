import avatar from "../../../public/images/icons/avatar.svg"
import {useParams} from "react-router-dom";
import {Avatar} from "@mantine/core";
import {useEffect, useState} from "react";
import {useMutation} from "react-query";
import {api} from "../../../api/ApiServices";

function ProfileBio() {
    const {slug} = useParams();
    const [profile, setProfile] = useState({});

    useEffect(() => {
        profileMutation.mutate(slug)
    }, [slug]);

    const profileMutation = useMutation(api.getUserProfile, {
        onSuccess: ({data}) => setProfile(data)
    });

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
                <h3>{profile.full_name}</h3>
                <p className="text-color-main cursor-pointer">@{profile.username}</p>
            </div>
            <div className="mb-10">
                <h2 className="text-lg text-color-dark-light">ABOUT</h2>
                <p className="text-color-light-gray">{profile.bio}</p>
            </div>
            <div className="">
                <div>
                    <h2 className="text-lg text-color-dark-light mb-2">PROJECTS CREATED BY {profile.username}</h2>
                </div>
            </div>
        </div>
    );
}

export default ProfileBio;