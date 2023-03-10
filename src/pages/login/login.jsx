import { useNavigate } from 'react-router-dom'
import { useState } from "react"
import { Password } from "../../components/password/password";
import { login } from "../../service/login";
export function Login() {

    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    return <>
        <main style={{ width: '400px', height: '400px', margin: '100px auto', borderRadius: '50px', textAlign: 'center' }}>
            <h1 style={{ paddingTop: '20px' }}>LOGIN</h1>
            <div style={{ display: 'grid', gap: '10px', width: '100%', paddingLeft: '100px' }}>
                <input type="text" placeholder="username" style={{ height: '30px', width: '200px', textAlign: 'center', color: 'white' }}
                    value={username} onChange={e => setUserName(e.target.value)} />
                <Password value={password} onChange={e => setPassword((e.target.value))} />
                <button onClick={() => {
                    login(username, password, navigate)
                }} style={{ width: "70px", height: "30px", textAlign: 'center', color: 'grey' }}>sign in</button>
            </div>
        </main>
    </>
}
