import axios from "axios"
import { useNavigate } from 'react-router-dom'
import { useState } from "react"
import { Password } from "../password/password";

export function Login() {
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    return <>
        <main style={{ width: '400px', height: '400px', margin: '100px auto', borderRadius: '50px', textAlign: 'center' }}>
            <h1 style={{ paddingTop: '20px' }}>LOGIN</h1>
            
            <div  style={{ display: 'grid', gap: '10px', width: '100%',paddingLeft:'100px' }}>
            <input type="text" placeholder="username" style={{ height: '30px', width: '200px',  textAlign: 'center', color: 'white' }}
             value={username} onChange={e => setUserName(e.target.value)} />
           
            <Password value={password} onChange={e => setPassword((e.target.value))} />
           
            <button onClick={() => {
                let object = {
                    'Username': username,
                    'Password': password,
                    "term": 3
                }
                axios.post('http://tiswork.tisserv.net:9009/authentication/token', object).then((response) => {
                    const token = response.data.token.content
                    localStorage.setItem('token', token)

                    navigate('/layout')
                }, err => {
                    alert('username or password is incorrect')
                })
            }} style={{ width: "70px", height: "30px", textAlign: 'center', color: 'grey' }}>sign in</button>
            </div>
        </main>
    </>
}

// biz normalda, password funksiasini bele cagiracagdiq:

// babel dili
// component = funksia

// biz normalda Password(123, 3213)
// babel dilinde bele cagiracagig:   <Password value={123} onChange={3213} />
// 

// function Password(props) {
    
//     console.log(props.value + props.onChange)
// }
