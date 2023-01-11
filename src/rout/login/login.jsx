import axios from "axios"
import { useNavigate } from 'react-router-dom'
import { useState } from "react"
import VisibilityIcon from '@mui/icons-material/Visibility';

export function Login() {
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [show, setShow] = useState('password')
    const navigate = useNavigate()
    return <>
        <main style={{ width: '400px', height: '400px', margin: '100px auto', borderRadius: '50px', textAlign: 'center' }}>
            <h1 style={{ paddingTop: '20px' }}>LOGIN</h1>
            <br />
            <br />
            <input type="text" placeholder="username" style={{ height: '30px', width: '200px', borderBottom: '10px', textAlign: 'center', color: 'white' }} value={username} onChange={e => setUserName(e.target.value)} />
            <br />
            <br />
            <input type={show} placeholder="password" style={{ height: '30px', width: '200px', borderBottom: '10px', textAlign: 'center', color: 'white' }} value={password} onChange={e => setPassword(e.target.value)} />
            <button style={{
                cursor: 'hand',
                marginLeft: -20,
                border: 0,
                borderRadius: 38,
                color: 'grey'

            }}>
                <VisibilityIcon />
            </button>



            <br />
            <br />
            <button onClick={() => {
                let object = {
                    'Username': username,
                    'Password': password
                }
                axios.post('http://tiswork.tisserv.net:8008/authentication/token', object).then((response) => {
                    const token = response.data.token.content
                    localStorage.setItem('token', token)

                    navigate('/test')

                }, err => {
                    alert('username or password is incorrect')
                })
            }} style={{ width: "70px", height: "30px", textAlign: 'center', color: 'grey' }}>sign in</button>
        </main>
    </>
}
/*
 Logical problem

*/
