import {Grid} from "@mantine/core";
import Header from "../../layout/Header";
import Container from "../../layout/Container";
import ProfileBio from "./components/ProfileBio";
import UserFeed from "./components/UserFeed";
import UserActivities from "./components/UserActivities";

function Profile() {
    return (
        <>
            <div className="">
                <Header/>
            </div>
            <Container>
                <Grid gutter="xl" pt={50} mx={10} justify={"center"}>
                    <Grid.Col span={2}>
                        {/*<Topics/>*/}
                    </Grid.Col>
                    <Grid.Col span={7}>
                        <ProfileBio/>
                        <UserFeed/>
                    </Grid.Col>
                    <Grid.Col span={3}>
                        <UserActivities/>
                    </Grid.Col>
                </Grid>
            </Container>
        </>
    );
}

export default Profile;