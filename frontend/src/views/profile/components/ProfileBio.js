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
                <Avatar src={`${process.env.REACT_APP_API_URL}${profile.avatar}`}
                        alt="Avatar"
                        size="xl"
                        radius="xl"
                        sx={{
                            'position': "static",
                        }}
                />
            </div>
            <div className="items-center flex flex-col text-color-light">
                <h3 className="text-sm md:text-base">{profile.full_name}</h3>
                <p className="text-color-main cursor-pointer text-sm md:text-base">@{profile.username}</p>
            </div>
            <div className="md:mb-10 mb-6">
                <h2 className="md:text-lg text-color-dark-light text-base">ABOUT</h2>
                <p className="text-color-light-gray text-sm md:text-base">{profile.bio}</p>
            </div>
            <div className="">
                <div>
                    <h2 className="md:text-lg text-base text-color-dark-light mb-2">PROJECTS CREATED BY {profile.username}</h2>
                </div>
            </div>
        </div>
    );
}

export default ProfileBio;