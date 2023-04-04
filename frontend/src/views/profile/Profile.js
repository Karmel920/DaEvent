import {Grid} from "@mantine/core";
import Header from "../../layout/Header";
import Container from "../../layout/Container";
import Topics from "../../components/Topics";
import Feed from "../../components/Feed";
import Activities from "../../components/Activities";
import ProfileBio from "./components/ProfileBio";

function Profile() {
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
                        <ProfileBio/>
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

export default Profile;