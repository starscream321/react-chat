import {Api} from '@iwonz/myarena-ru-nodejs-api';
import {useEffect, useState} from "react";
import {
    Grid,
    Container,
    ButtonGroup,
    Button,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Typography
} from "@mui/material";

function App() {

    const api = new Api('5bec1a9a477682cb1af250155a6bea88')
    const [maps, setMaps] = useState([])





    const controlBot = (e) => {
        api.consoleCmd(e.target.value)
    }



    const restartGame = () => {
        api.consoleCmd('mp_restartgame 1')
    }

    const resetWarmUp = () => {
        api.consoleCmd('mp_warmup_end')

    }


    const changeMap = (e) => {
        api.changeLevel(e.target.value).then((res) => {
            console.log(res.message)
            setStatus(res.message)
        })
    }


    useEffect(() => {
        api.getMaps().then((response) => {
            setMaps(response.maps)
        });

    }, [])

    const mapList = maps.map((one) => {
            const nameMap = one.toUpperCase()
        return (
            <MenuItem  value={one} key={Math.random()}>{nameMap}</MenuItem>
            )
    })


    return (
        <Container maxWidth={"md"}>
            <Typography variant={"h1"}>INVASION UNIVERSE CS:GO SERVER</Typography>
            <Grid container direction={"row"} justifyContent={"space-around"}>
                <FormControl variant={"outlined"} sx={{m: 1, minWidth: 300}}>
                    <InputLabel id="demo-select-small">Map</InputLabel>
                    <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        label="Map"
                        defaultValue={''}
                        onChange={changeMap}
                    >
                        {mapList}
                    </Select>
                </FormControl>
                <ButtonGroup orientation={"vertical"} variant={"outlined"}>
                    <Button className={'control_panel_button'} value={'bot_add t'} onClick={controlBot}>Create bot T </Button>
                    <Button className={'control_panel_button'} value={'bot_add ct'} onClick={controlBot}>Create bot CT </Button>
                    <Button className={'control_panel_button'} value={'bot_kick t'} onClick={controlBot}>Remove bot T</Button>
                    <Button className={'control_panel_button'} value={'bot_kick ct'} onClick={controlBot}>Remove bot CT</Button>
                    <Button className={'control_panel_button'} onClick={resetWarmUp}>Warmup END</Button>
                    <Button className={'control_panel_button'} onClick={restartGame}>Restart</Button>
                </ButtonGroup>
            </Grid>
        </Container>
    );
}

export default App;
