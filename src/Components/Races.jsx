import React, {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";


const Races = () => {
    const navigate = useNavigate();
    const [races, setRaces]  = useState([]);
    const [racesColumns, setRacesColumns] = useState([]);
    const user_id = window.sessionStorage.getItem("user_id");


    useEffect(() => {
        if (!window.sessionStorage.getItem("auth")) navigate('/unauthorized')
        fetch(process.env.REACT_APP_API_URL_BASE  + '/races')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setRacesColumns(Object.keys(data.races))
            setRaces(data.races)
        })
        .catch(error => console.error(error));
    }, []);

    const handleLogout = (e) => {
        e.preventDefault();
        window.sessionStorage.removeItem("auth")
        window.sessionStorage.removeItem("user_id")
        window.sessionStorage.removeItem("token")
        navigate('/login')
    }

  return (
    <div>
        <br />
        <h2>Races</h2>
        <table className='user-table'>
            <thead>
                <tr>
                    <th>RACE</th>
                    <th>BONUS</th>
                </tr>
            </thead>
            <tbody>
                {
                    races.map((races,i) => (
                    <tr className='char-rows'>
                        <td>{races.racename}</td>
                        <td>{races.racebonus}</td>
                    </tr>
                    ))
                }
            </tbody>
        </table>  
        <button className="login-button" onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Races