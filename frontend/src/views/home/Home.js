import Header from "../../layout/Header";
import Topics from "../../components/Topics";
import Activities from "../../components/Activities";
import ProjectsListHeader from "./components/ProjectsListHeader";
import Feed from "../../components/Feed";
import {Grid} from "@mantine/core";
import Container from "../../layout/Container";

function Home() {
    return (
        <>
            <div className="">
                <Header/>
            </div>
            <Container>
                <Grid gutter="xl" pt={50} mx={10}>
                    <Grid.Col span={2}>
                        <Topics/>
                    </Grid.Col>
                    <Grid.Col span={7}>
                        <ProjectsListHeader/>
                        <Feed/>
                    </Grid.Col>
                    <Grid.Col span={3}>
                        <Activities/>
                    </Grid.Col>
                </Grid>
            </Container>
        </>
    );
}

export default Home;