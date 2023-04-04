import {Grid} from "@mantine/core";
import Header from "../../layout/Header";
import Container from "../../layout/Container";
import DeleteContainer from "./components/DeleteContainer";

function DeleteForm() {
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
                        <DeleteContainer/>
                    </Grid.Col>
                    <Grid.Col span={3}>

                    </Grid.Col>
                </Grid>
            </Container>
        </>
    );
}

export default DeleteForm;