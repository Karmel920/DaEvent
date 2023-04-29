import avatar from "../../../public/images/icons/avatar.svg"
import {Avatar, Button} from "@mantine/core";
import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useMutation} from "react-query";
import {api} from "../../../api/ApiServices";
import {BsPersonAdd} from "react-icons/bs";
import {useAuth} from "../../../context/AuthContext";
import {useNavigate} from "react-router";

function Participants() {
    const {slug} = useParams();
    const [participants, setParticipants] = useState([]);
    const [participantsCount, setParticipantsCount] = useState(0);
    const {user} = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        reFetchParticipants();
    }, []);

    const reFetchParticipants = () => {
        if (!slug) return;
        participantsMutation.mutate(slug);
    }

    const participantsMutation = useMutation(api.getParticipants, {
        onSuccess: ({data}) => {
            setParticipants(data.participants);
            setParticipantsCount(data.participants_count);
        }
    });

    const addUserToProjectHandler = data => {
        addUserToProjectMutation.mutate(data)
    };

    const addUserToProjectMutation = useMutation(api.addUserToProject, {
        onSuccess: reFetchParticipants,
    });

    return (
        <div className="pt-10 h-[90vh]">
            <div className="h-full w-full rounded-lg overflow-hidden bg-color-dark">
                <div className="bg-color-dark-light rounded-t-md">
                    <h2 className="text-color-light py-2 px-4 text-sm md:text-base">PARTICIPANTS
                        <span className="ml-1.5 text-color-main">({participantsCount} Joined)</span>
                    </h2>
                </div>
                <div className="flex justify-center">
                    {participants.some((p) => p.id === user?.id) ? (
                        <></>
                    ) : (
                        <Button color="color-dark-medium.2" radius="md" size="sm"
                                onClick={() => addUserToProjectHandler(slug)}
                                leftIcon={<BsPersonAdd size="1.2rem" className="mt-0.5 mr-0.5 text-color-dark"/>}
                                mt={10}
                                sx={{
                                    'position': "static",
                                }}>
                            <p className="text-color-dark">Join</p>
                        </Button>
                    )}
                </div>
                <div className="h-full w-full p-4 flex flex-col gap-4">
                    {participants.map(item =>
                        <div key={item.id} className="flex leading-normal items-center">
                            <Link to={"/profile"}>
                                <Avatar src={`${process.env.REACT_APP_API_URL}${item?.avatar}`}
                                        alt="Avatar"
                                        radius="xl"
                                        sx={{
                                            'cursor': "pointer", 'position': "static"
                                        }}
                                />
                            </Link>
                            <div className="flex-col pl-3">
                                <p className="text-xs sm:text-sm text-color-light-gray">{item.full_name}</p>
                                <Link to={"/profile"}>
                                    <p className="text-xs sm:text-sm text-color-main cursor-pointer">@{item.username}</p>
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Participants;