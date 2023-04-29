import avatar from "../../../public/images/icons/avatar.svg"
import {AiOutlineTeam} from "react-icons/ai";
import {Avatar, Pagination} from "@mantine/core";
import {Link, useParams, useSearchParams, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {useMutation} from "react-query";
import {api} from "../../../api/ApiServices";


function UserFeed() {
    const {slug} = useParams();
    let [searchParams, setSearchParams] = useSearchParams();
    const [projects, setProjects] = useState([]);
    const [activePage, setActivePage] = useState(searchParams.get('page') || 1);
    const [totalProjects, setTotalProjects] = useState(1);
    const navigate = useNavigate();

    useEffect(() => {
        setActivePage(searchParams.get('page') || 1);
        userProjectsMutation.mutate({id: slug, page: activePage});
    }, [slug, activePage, searchParams]);

    const userProjectsMutation = useMutation(api.getUserProjects, {
        onSuccess: ({data}) => {
            setProjects(data.results);
            setTotalProjects(data.count);
        }
    });

    const handlePageChange = (pageNumber) => {
        setActivePage(pageNumber);
        navigate(`/profile/${slug}?page=${pageNumber}`)
        handleScrollToTop();
    }

    function handleScrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    return (
        <div>
            {projects.map(item =>
                <div key={item.id} className="bg-color-dark rounded-xl md:p-6 mb-6 pt-4 pb-3 px-4">
                    <div className="flex md:justify-between md:items-center text-color-light flex-col md:flex-row">
                        <Link to={`/profile/${item.host.id}`}>
                            <div className="flex items-center">
                                <Avatar src={`${process.env.REACT_APP_API_URL}/images/${item?.host?.avatar}`}
                                        alt="Avatar"
                                        size="md"
                                        radius="xl"
                                        sx={{
                                            'cursor': "pointer", 'position': "static"
                                        }}
                                />
                                <span className="text-color-main ml-2 cursor-pointer text-sm md:text-base">@{item.host.username}</span>
                            </div>
                        </Link>
                        <div>
                            <span className="text-xs md:text-base">{item.timesince} ago</span>
                        </div>
                    </div>
                    <Link to={`/project/${item.id}`}>
                        <div className="cursor-pointer text-color-light font-medium md:text-xl text-lg md:mt-4 md:mb-6 mt-3 mb-3 transition">
                            <p>{item.name}</p>
                        </div>
                    </Link>
                    <div className="flex justify-between text-color-light border-solid border-color-gray border-t md:pt-4 pt-2 text-sm md:text-base">
                        <div className="flex gap-3 items-center">
                            <AiOutlineTeam size="2em" className="text-color-main"/>
                            {item.participants_count} Joined
                        </div>
                        <p className="bg-color-main py-1.5 px-4 rounded-3xl font-medium text-color-bg">{item.topic}</p>
                    </div>
                </div>
            )}
            <div className="flex justify-center">
                {
                    (totalProjects % 6) === 0 ? (
                        <Pagination
                            value={activePage}
                            onChange={(pageNumber) => handlePageChange(pageNumber)}
                            total = {totalProjects / 6}
                            color="color-dark.5"
                        />
                    ) : (
                       <Pagination
                            value={activePage}
                            onChange={(pageNumber) => handlePageChange(pageNumber)}
                            total = {(totalProjects / 6) + 1}
                            color="color-dark.5"
                        />
                    )
                }
            </div>
        </div>
    );
}

export default UserFeed;
