import Header from "../../layout/Header";
import Container from "../../layout/Container";
import {Grid} from "@mantine/core";
import TopicsListContainer from "./components/TopicsListContainer";

function TopicsList() {
    return (
        <>
            <div className="">
                <Header/>
            </div>
            <Container>
                <Grid gutter="xl" pt={50} mx={10}>
                    <Grid.Col span={2}>

                    </Grid.Col>
                    <Grid.Col span={8}>
                        <TopicsListContainer/>
                    </Grid.Col>
                    <Grid.Col span={3}>

                    </Grid.Col>
                </Grid>
            </Container>
        </>
    );
}

export default TopicsList;