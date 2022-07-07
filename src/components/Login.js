import React, {useContext} from 'react';
import {Box, Container, Grid, Button} from "@mui/material";
import {Context} from "../index";
import firebase from "firebase/compat/app";

const Login = () => {

    const { auth } = useContext(Context)

    const  login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider()

        const { user } = await auth.signInWithPopup(provider)
        console.log(user)
    }

    return (
        <Container>
            <Grid container
                style={{height: window.innerHeight - 50}}
                  alignItems={'center'}
                  justifyContent={'center'}
            >
                <Box p={5}>
                    <Button onClick={login} variant={"outlined"}>Войти с помощью Google</Button>
                </Box>
            </Grid>
        </Container>
    );
};

export default Login;
