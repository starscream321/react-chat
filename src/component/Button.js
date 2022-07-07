import React from 'react';

function Button(props) {


    return (
        <div className='container'>{
            props.pass ?
                <h4 style={{paddingLeft: 10}}>Пароль: {props.pass}</h4>
                :
                <></>
        }
            <div className='row'>
                <button className='shadow btn btn-dark m-1 col-1' onClick={props.connect} style={{width: 170, height: 60}}>ПОЛУЧИТЬ ПАРОЛЬ
                </button>
                <a className='col' href={props.ip} style={{color: "black", fontSize: 20, paddingTop: 15}}>ЗАЙТИ НА СЕРВЕР</a>
                <button className='shadow btn btn-dark m-1 col-1'  onClick={props.logout} style={{width: 170, height: 60, marginLeft: '200px'}}>ВЫЙТИ
                </button>
            </div>

            <div className='col mt-5 w-100 justify-content-center' style={{textAlign: "center"}}>
                <button className='shadow btn btn-dark m-1'
                        style={{width: 215, height: 38}}
                        onClick={props.off}>
                    ОФИЦИАЛЬНЫЕ КАРТЫ
                </button>
                <button className='shadow btn btn-dark m-1'
                        style={{width: 215, height: 38}}
                        onClick={props.noOff}>
                    КАСТОМНЫЕ КАРТЫ
                </button>
                <button type={"button"}
                        className={'shadow btn btn-dark m-1'}
                        style={{width: 215}}
                        value={'bot_add ct'}
                        onClick={props.controlBot}>
                    ДОБАВИТЬ БОТА ЗА КТ
                </button>
                <button type={"button"}
                        className={'shadow btn btn-dark m-1'}
                        style={{width: 215}}
                        value={'bot_kick ct'}
                        onClick={props.controlBot}>
                    УДАЛИТЬ БОТА ЗА КТ
                </button>
                <button type={"button"}
                        className={'shadow btn btn-dark m-1'}
                        style={{width: 215}}
                        value={'bot_add t'}
                        onClick={props.controlBot}>
                    ДОБАВИТЬ БОТА ЗА Т
                </button>
                <button type={"button"}
                        className={'shadow btn btn-dark m-1'}
                        style={{width: 215}}
                        value={'bot_kick t'}
                        onClick={props.controlBot}>
                    УДАЛИТЬ БОТА ЗА Т
                </button>
                <button className={'shadow btn btn-dark m-1'}
                        value={'mp_pause_match'}
                        style={{width: 215, height: 38}}
                        onClick={props.serverControl}>
                    ПАУЗА
                </button>
                <button className={'shadow btn btn-dark m-1'}
                        value={'mp_unpause_match'}
                        style={{width: 215, height: 38}}
                        onClick={props.serverControl}>
                    СНЯТЬ ПАУЗУ
                </button>
                <button type={"button"}
                        className={'shadow btn btn-dark m-1'}
                        value={'mp_restartgame 1'}
                        style={{width: 215}}
                        onClick={props.serverControl}>
                    ПЕРЕЗАПУСК ИГРЫ
                </button>
            </div>
        </div>

    );
}

export default Button;
