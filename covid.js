import React , {useEffect, useState} from 'react'
import './covid.css';

const Covid = () => {

    const [data ,setData] = useState ([]);

    const getCovidData = async () => {
        try {
            const res = await fetch('https://api.covid19india.org/data.json');
            const actuelData = await res.json();
            console.log(actuelData.statewise[0]);
            setData(actuelData.statewise[0]);
            
        } catch (error) {
            console.log(error);
        }
        

    } 

    useEffect(() => {
        //getCovidData();
    }, []);

    return (
        <>
        {/* next section */}
        <section className="section">
            <h1>Covid-19 Tracker</h1>
            <h1>🔴 LIVE</h1>
            <p>I am trying to build little covid tracker of India</p>
            <ul>
                <li className="card">
                    <div className="card__main">
                        <div className="card__inner">
                            <p className="card__name"><span> OUR </span> COUNTRY</p>
                            <p className="card__total card__small">INDIA</p>
                        </div>
                    </div>
                </li>
            </ul>
            <ul>
                <li className="card">
                    <div className="card__main">
                        <div className="card__inner">
                            <p className="card__name"><span> TOTAL </span> RECOVERED</p>
                            <p className="card__total card__small">{data.recovered}</p>
                        </div>
                    </div>
                </li>
            </ul>
            <ul>
                <li className="card">
                    <div className="card__main">
                        <div className="card__inner">
                            <p className="card__name"><span> TOTAL </span> CONFIRMED</p>
                            <p className="card__total card__small">{data.confirmed}</p>
                        </div>
                    </div>
                </li>
            </ul>
            <ul>
                <li className="card">
                    <div className="card__main">
                        <div className="card__inner">
                            <p className="card__name"><span> TOTAL </span> DEATH</p>
                            <p className="card__total card__small">{data.deaths}</p>
                        </div>
                    </div>
                </li>
            </ul>
            <ul>
                <li className="card">
                    <div className="card__main">
                        <div className="card__inner">
                            <p className="card__name"><span> TOTAL </span> ACTIVE</p>
                            <p className="card__total card__small">{data.active}</p>
                        </div>
                    </div>
                </li>
            </ul>
            <ul>
                <li className="card">
                    <div className="card__main">
                        <div className="card__inner">
                            <p className="card__name"><span> LAST </span> UPDATE</p>
                            <p className="card__total card__small">{data.lastupdatedtime}</p>
                        </div>
                    </div>
                </li>
            </ul>

        </section>

        </>
    )
}

export default Covid;