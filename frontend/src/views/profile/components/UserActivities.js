import avatar from "../../../public/images/icons/avatar.svg"
import {Avatar} from "@mantine/core";
import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useMutation} from "react-query";
import {api} from "../../../api/ApiServices";


function UserActivities() {
    const {slug} = useParams();
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        activitiesMutation.mutate(slug)
    }, [slug]);

    const activitiesMutation = useMutation(api.getUserActivities, {
        onSuccess: ({data}) => setActivities(data),
    })

    return (
        <div className="bg-color-dark overflow-hidden mt-10 rounded-md">
            <div className="bg-color-dark-light rounded-t-md">
                <h2 className="text-color-light py-2 px-4">RECENT USER ACTIVITIES</h2>
            </div>
            {activities.map(item =>
                <div key={item.id} className="m-6 p-6 border-2 border-solid border-color-dark-medium">
                    <div className="flex leading-normal">
                        <Link to="/profile">
                            <Avatar src={avatar} alt="Avatar"
                                    sx={{
                                        'cursor': "pointer", 'position': "static"
                                    }}
                            />
                        </Link>
                        <div className="flex flex-col pl-2">
                            <Link to={`/profile/${item.user.id}`}>
                                <p className="my-auto text-color-main flex flex-col cursor-pointer">
                                    @{item.user.username}
                                </p>
                            </Link>
                            <span className="text-color-gray cursor-default text-xs">{item.timesince} ago</span>
                        </div>
                    </div>
                    <div className="text-color-light-gray">
                        <p>commented on "
                            <Link to={`/project/${item.project.id}`}>
                                <span className="text-color-main cursor-pointer">{item.project.name}</span>
                            </Link>
                            "
                        </p>
                        <div className="mt-4 text-sm border-1 px-3 py-3 bg-color-bg text-color-light">
                            {item.body_short}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default UserActivities;
