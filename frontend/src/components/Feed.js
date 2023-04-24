import avatar from "../public/images/icons/avatar.svg"
import {AiOutlineTeam} from "react-icons/ai";
import {Avatar, Pagination} from "@mantine/core";
import {Link, useParams, useSearchParams, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {useMutation} from "react-query";
import {api} from "../api/ApiServices";


function Feed({setTotalHandler}) {
    const {slug} = useParams();
    const [prevSlug, setPrevSlug] = useState(slug);
    let [searchParams, setSearchParams] = useSearchParams();
    const [projects, setProjects] = useState([]);
    const [activePage, setActivePage] = useState(searchParams.get('page') || 1);
    const [totalProjects, setTotalProjects] = useState(1);
    const navigate = useNavigate();

    useEffect(() => {
        setActivePage(searchParams.get('page') || 1);
        if (slug !== prevSlug) {
            setActivePage(1);
            setPrevSlug(slug);
        }
        if (slug) {
            projectsByTopicMutation.mutate({name: slug, page: activePage});
        }
        else {
            allProjectsMutation.mutate(activePage);
        }
    }, [slug, activePage, searchParams]);

    const allProjectsMutation = useMutation(api.getAllProjects, {
        onSuccess: ({data}) => {
            setProjects(data.results);
            setTotalProjects(data.count);
            setTotalHandler(data.count);
        }
    });

    const projectsByTopicMutation = useMutation(api.getProjectsByTopic, {
        onSuccess: ({data}) => {
            setProjects(data.results);
            setTotalProjects((data.count));
            setTotalHandler(data.count);
        }
    })

    const handlePageChange = (pageNumber) => {
        setActivePage(pageNumber);
        {
            slug ? (
                navigate(`/projects/${slug}?page=${pageNumber}`)
            ) : (
                navigate(`/projects?page=${pageNumber}`)
            )
        }
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
                <div key={item.id} className="bg-color-dark p-6 rounded-xl mb-6">
                    <div className="flex justify-between items-center text-color-light">
                        <Link to={`/profile/${item.host.id}`}>
                            <div className="flex items-center">
                                <Avatar src={avatar} alt="Avatar" size="md"
                                        sx={{
                                            'cursor': "pointer", 'position': "static"
                                        }}
                                />
                                <span className="text-color-main ml-2 cursor-pointer">@{item.host.username}</span>
                            </div>
                        </Link>
                        <div>
                            <span>{item.timesince} ago</span>
                        </div>
                    </div>
                    <Link to={`/project/${item.id}`}>
                        <div className="cursor-pointer text-color-light font-medium text-xl mt-4 mb-6 transition">
                            <p>{item.name}</p>
                        </div>
                    </Link>
                    <div className="flex justify-between text-color-light border-solid border-color-gray border-t pt-4">
                        <div className="flex gap-3 items-center">
                            <AiOutlineTeam size="2em" className="text-color-main "/>
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

export default Feed;
