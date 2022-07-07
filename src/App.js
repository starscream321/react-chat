import React from "react";
import {useState} from "react";
import logo from './image/logoInvasion.svg'
import axios from 'axios'

import MapList from "./component/MapList";
import Button from "./component/Button";


function App() {

    const [mapCategoria, setMapCategoria] = useState(true)
    const [pass, setPass] = useState('')
    const [apiKey, setApiKey] = useState('')
    const [error, setError] = useState(false)
    const [ip, setIp] = useState('')
    const [name, setName] = useState('')
    const [serverCount, setServerCount] = useState()

    const baseURL = 'http://localhost:3001'


    const Servers = async () => {
        await axios
            .get(`${baseURL}/servers`)
            .then(res => setServerCount(res.data.count))
    }

    const takeServer = async () => {
        await axios
            .get(`${baseURL}/server`)
            .then((res) => {
                localStorage.setItem('token', res.data.apiKey)
                localStorage.setItem('ip', res.data.ip)
                localStorage.setItem('name', res.data.server)
            })
            .catch((error) => {
                if (error.response) {
                    setError(true)
                }
            })
    }


    const ServerMap = async (map) => {
        await axios
            .post(`${baseURL}/command`, {
                apiKey: apiKey,
                command: 'changeMap',
                arg: map
            })
    }

    const ServerCmd = async (cmd) => {
        await axios
            .post(`${baseURL}/command`, {
                apiKey: apiKey,
                command: 'console',
                arg: cmd
            })
    }

    const logout = async () => {
        await axios
            .post(`${baseURL}/logout`, {
                apiKey: apiKey
            })
            .then(res => console.log(res.data))
        removeStorage()
    }


    setInterval(() => {
        setPass(localStorage.getItem('pass'))
        setApiKey(localStorage.getItem('token'))
        setIp(localStorage.getItem('ip'))
        setName(localStorage.getItem('name'))

    }, 1000)

    setInterval(() => {
        void Servers()
    }, 2000)


    const off = () => {
        setMapCategoria(true)
    }

    const noOff = () => {
        setMapCategoria(false)
    }

    const controlBot = async (e) => {
        await ServerCmd(e.target.value)
    }


    const ServerControl = async (e) => {
        await ServerCmd(e.target.value)
    }

    const changeMap = async (e) => {
        await ServerMap(e.target.value)
    }

    const removeStorage = () => {
        localStorage.removeItem('ip')
        localStorage.removeItem('pass')
        localStorage.removeItem('token')
        localStorage.removeItem('name')

    }

    let password = Math.round((Math.random() * (9000 - 1000) + 1000))
    const connectServerBtn = async () => {
        localStorage.setItem('pass', password)
        await ServerCmd(`sv_password ${password}`)
    }

    const MainContent = () => {
        if (localStorage.getItem('token')) {
            return (
                <div className='container align-content-center' style={{fontFamily: 'Play'}}>
                    <div className='row m-auto text-center'>
                        <img className='col-1 m-auto' style={{width: 180, height: 180}} src={logo} alt={'img'}/>
                        <h1 className='col m-auto' style={{paddingRight: 175}}>{name}</h1>
                    </div>
                    <Button
                        ip={ip}
                        logout={logout}
                        pass={pass}
                        connect={connectServerBtn}
                        off={off}
                        noOff={noOff}
                        controlBot={controlBot}
                        serverControl={ServerControl}
                    />
                    <div className='row justify-content-center m-auto'>
                        <MapList
                            mapCategoria={mapCategoria}
                            changeMap={changeMap}
                        />
                    </div>
                </div>
            )
        } else {
            return (
                <div className='container text-center' style={{height: 1000,}}>
                    <div className="col" style={{marginTop: 300, marginRight: 60}}>
                        <img src={logo} alt={'img'}/>
                        {serverCount === 0 || error ?
                            <h2>Свободных серверов нет</h2>
                            :
                            <button className='shadow btn btn-dark m-1'
                                    style={{fontSize: 30, marginTop: 300}} onClick={takeServer}>
                                ВЗЯТЬ СЕРВЕР
                            </button>
                        }
                    </div>
                </div>
            )
        }
    }

    React.memo(MainContent)

    return (
        <MainContent/>
    );
}

export default App;
