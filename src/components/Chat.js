import React, {useState} from 'react';
import {useContext} from "react";
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";
import {Avatar, Button, Container, Grid, TextField} from "@mui/material";
import {useCollectionData} from "react-firebase-hooks/firestore";
import Loader from "./Loader";
import firebase from "firebase/compat/app";
import ScrollToBottom from 'react-scroll-to-bottom';
import { css } from '@emotion/css'

const Chat = () => {
    const {auth, firestore} = useContext(Context)
    const [user] = useAuthState(auth)
    const [messages, loading] = useCollectionData(firestore.collection('messages').orderBy('createAt'));
    const [value, setValue] = useState('')

    const ROOT_CSS = css({
        height: "70%",
        width: '80%',
        border: '1px solid black'
    });

    const sendMessage = async () => {
            firestore.collection('messages').add({
                uid: user.uid,
                displayName: user.displayName,
                photoURL: user.photoURL,
                text: value,
                createAt: firebase.firestore.FieldValue.serverTimestamp()
            })
        setValue('')

    }






    if(loading){
        return <Loader />
    }

    const messageList = messages.map(message =>
        <div key={Math.random()} style={{
            margin: 10,
            border: '1px solid black',
            borderRadius: 10,
            marginLeft: user.uid === message.uid ? 'auto' : '10px',
            width: "fit-content",
            padding: '10px'
        }}>
            <Grid container>
                <Avatar src={message.photoURL}/>
                <div style={{margin: 10}}>{message.displayName}</div>
            </Grid>
            <div style={{margin: 5}}>{message.text}</div>
        </div>
    )
    return (
        <Container>
                <Grid container
                      style={{height: window.innerHeight - 50, marginTop: '10px'}}
                    justifyContent={"center"}
                >
                    <ScrollToBottom className={ROOT_CSS}>
                        {messageList}
                    </ScrollToBottom>
                    <Grid
                        container
                        direction={"column"}
                        alignItems={"flex-end"}
                        style={{width: '80%'}}
                    >
                        <TextField
                            fullWidth
                            maxRows={2}
                            variant={"outlined"}
                            value={value}
                            onChange={e => setValue(e.target.value) }
                        />
                        <Button onClick={sendMessage} variant={"outlined"}> Отправить</Button>

                    </Grid>

                </Grid>
            </Container>
    );

};

export default Chat;
