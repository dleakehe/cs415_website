import React, {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";


const Characters = () => {
    const navigate = useNavigate();
    const [characters, setCharacters]  = useState([]);
    const [charactersColumns, setCharactersColumns] = useState([]);
    const user_id = window.sessionStorage.getItem("user_id");


    useEffect(() => {
        if (!window.sessionStorage.getItem("auth")) navigate('/unauthorized')
        fetch(process.env.REACT_APP_API_URL_BASE  + '/characters')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setClassesColumns(Object.keys(data.classes))
            setClasses(data.classes)
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
        <h1>Characters</h1>
        <table className='user-table'>
            <thead>
                <tr>
                    <th>CLASS</th>
                    <th>BONUS</th>
                    <th>SKILL</th>
                </tr>
            </thead>
            <tbody>
                {
                    classes.map((classes,i) => (
                    <tr className='char-rows'>
                        <td>{classes.classname}</td>
                        <td>{classes.classbonus}</td>
                    </tr>
                    ))
                }
            </tbody>
        </table>  
        <button className="login-button" onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Characters