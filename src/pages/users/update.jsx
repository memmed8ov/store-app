import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { BaseLayout } from '../../components/layout/base-layout'
import { Password } from "../../components/password/password";
import { userGet, userUpdate } from '../../service/user';

export function UsersUpdate() {

    const navigate = useNavigate()
    const itemId = useParams().id
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        userGet(itemId, setUserName, setPassword)
    }, [])

    return <>
        <BaseLayout>
            <div style={{ display: 'grid', gap: '10px', width: '100%' }}>
                UserName: <input type="text" style={{ width: '20%', height: '30px', color: 'white' }}
                    value={userName} onChange={e => setUserName((e.target.value))} />
                Password:   <Password value={password} onChange={e => setPassword((e.target.value))} />
                <button onClick={() => {

                    userUpdate(itemId, userName, password, navigate)

                }} style={{ width: "80px", height: "40px", marginLeft: '30px', backgroundColor: 'white', borderRadius: '50px' }}>
                    update</button>
                <button onClick={() => {
                    navigate('/users')
                }} style={{ width: '60px', height: '30px', color: 'white' }}>back</button>
            </div>
        </BaseLayout>
    </>
}