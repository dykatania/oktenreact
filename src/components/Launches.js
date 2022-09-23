import {useEffect, useState} from "react";
import {getShipsAxios} from "../servises/ships.axios.servise";
import {Launch} from "./Launch";


export default function Launches() {
        let [launches, setLaunches] = useState([]);

        useEffect( () => {
            getShipsAxios.getAll()
                .then(value => setLaunches(value.data.filter(
                    value => value.launch_year !== '2020'
                )))
        }, [])

        return (<div className={'wrap'}>
            {launches.map(launch => <Launch
                key={launch.flight_number}
                launch={launch}/>)}
            </div>
            )
            }

            export {Launches};