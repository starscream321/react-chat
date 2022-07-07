import React from 'react';
import {AppBar, Button, Grid, Toolbar, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";
import {LOGIN_ROUTE} from "../utils/conts";
import { useContext} from "react";

import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";

const Navbar = () => {

    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)

    return (
        <div>
            <AppBar position={"static"}>
                <Toolbar variant={"dense"}>
                    <Typography>CHAT</Typography>
                    <Grid container justifyContent={"flex-end"}>
                        {user ?
                            <Button onClick={() => auth.signOut()} color={"inherit"} variant={"outlined"}>Выйти</Button>
                            :
                            <NavLink to={LOGIN_ROUTE}>
                                <Button color={'inherit'} style={{color:'white', borderColor: "white"}} variant={"outlined"}>Логин</Button>
                            </NavLink>
                        }


                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Navbar;
