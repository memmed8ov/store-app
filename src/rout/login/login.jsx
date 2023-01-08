import axios from "axios"
import { useState } from "react"

export function Login() {
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')

    return <>
        <main style={{ background: 'rgba', width: '400px', height: '400px', margin: '100px', borderRadius: '50px', textAlign: 'center' }}><h1 style={{ paddingTop: '20px' }}>LOGIN</h1>
            <br />
            <br />
            <input type="text" placeholder="username" style={{ height: '30px', width: '200px', borderBottom: '10px', textAlign: 'center', color: 'white' }} value={username} onChange={e => setUserName(e.target.value)} />
            <br />
            <br />
            <input type="password" placeholder="password" style={{ height: '30px', width: '200px', borderBottom: '10px', textAlign: 'center', color: 'white' }} value={password} onChange={e => setPassword(e.target.value)} />
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
                })
            }} style={{ width: "70px", height: "30px", textAlign: 'center', color: 'grey' }}>sign in</button>
        </main>
    </>





}
