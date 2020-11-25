import React from 'react'
import './styles.css'
import Card from '../../components/Card'
import {GlobalContext} from '../../context/GlobalContext'

const days = [
    {
        id: 1,
        number: 1
    },
    {
        id: 2,
        number: 2
    },
    {
        id: 3,
        number: 3
    },
    {
        id: 4,
        number: 4
    },
    {
        id: 5,
        number: 5
    },
    {
        id: 6,
        number: 6
    },
    {
        id: 7,
        number: 7
    },
    {
        id: 8,
        number: 8
    },
    {
        id: 9,
        number: 9
    },
    {
        id: 10,
        number: 10
    },
    {
        id: 11,
        number: 11
    },
    {
        id: 12,
        number: 12
    },
    {
        id: 13,
        number: 13
    },
    {
        id: 14,
        number: 14
    },
    {
        id: 15,
        number: 15
    },
    {
        id: 16,
        number: 16
    },
    {
        id: 17,
        number: 17
    },
    {
        id: 18,
        number: 18
    },
    {
        id: 19,
        number: 19
    },
    {
        id: 20,
        number: 20
    },
    {
        id: 21,
        number: 21
    },
    {
        id: 22,
        number: 22
    },
    {
        id: 23,
        number: 23
    },
    {
        id: 24,
        number: 24
    },
    {
        id: 25,
        number: 25
    },
    {
        id: 26,
        number: 26
    },
    {
        id: 27,
        number: 27
    },
    {
        id: 28,
        number: 28
    },
    {
        id: 29,
        number: 29
    },
    {
        id: 30,
        number: 30
    },
    {
        id: 31,
        number: 1
    },
    {
        id: 32,
        number: 2
    },
    {
        id: 33,
        number: 3
    },
    {
        id: 34,
        number: 4
    },
    {
        id: 35,
        number: 5
    },
]

const Home = () => {
    const {lembretes} = React.useContext(GlobalContext)

    const data = React.useMemo(()=>{
        return days.map((day) => {
            const matchLembretes = lembretes.filter(lembrete => day.id === lembrete.idDay)
            return matchLembretes ? {...day, lembretes:matchLembretes} : day

        })
    },[lembretes]) 

    // React.useEffect(()=>{
    //     console.log("estou na home",lembretes);
    // },[lembretes])

    return (
        <div id="calendar">
            <div className="container">
                <div className="weekdays">
                    <div>
                        <p>Sunday</p>
                    </div>
                    <div>
                        <p>Monday</p>
                    </div>
                    <div>
                        <p>Tuesday</p>
                    </div>
                    <div>
                        <p>Wednesday</p>
                    </div>
                    <div>
                        <p>Thurday</p>
                    </div>
                    <div>
                        <p>Friday</p>
                    </div>
                    <div>
                        <p>Saturday</p>
                    </div>
                </div>
                <div className="calendar">
                    {data.map((e)=><Card number={e.number} lembretes={e.lembretes} id={e.id}/>)}
                </div>
            </div>
        </div>
    )
}

export default Home
