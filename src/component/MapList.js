import React from 'react';
import mapJson from "../map.json";

function MapList(props) {




    const mapList = JSON.parse(JSON.stringify(mapJson))


    const offMap = () => mapList.filter(({thisOffMap}) => thisOffMap === true).map(({name, img}) => {
        return (
            <div className=' mt-5 row m-1 col-sm-5 col-lg-3 col-xl-2 col-md-4' key={Math.random()}>
                    <img src={img} alt={name}/>
                <button type={"button"} className='shadow btn btn-dark' onClick={props.changeMap} value={name}>START</button>
            </div>
        )
    })


    const noOffMap = () => mapList.filter(({thisOffMap}) => thisOffMap === false).map(({name, img}) => {
        return (
            <div className=' mt-5 row m-1 col-sm-5 col-lg-3 col-xl-2 col-md-4' key={Math.random()}>
                <img src={img} alt={name} />
                <button type={"button"} className='shadow btn btn-dark' onClick={props.changeMap} value={name}>START</button>
            </div>
        )
    })

    const list1 = React.useMemo(() => offMap(), [])
    const list2 = React.useMemo(() => noOffMap(), [])


    return (
        <div className='row justify-content-center'>{props.mapCategoria ? list1 : list2}</div>
    );
}

export default MapList;
