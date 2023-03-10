import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { BaseLayout } from '../../components/layout/base-layout'
import { Password } from "../../components/password/password";
import { userGet } from '../../service/user';

export function UsersView() {

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
                UserName: <input disabled type="text" style={{ width: '20%', height: '30px', color: 'white' }}
                    value={userName} onChange={e => setUserName((e.target.value))} />
                Password:<Password value={password} onChange={e => setPassword((e.target.value))} />
                <button onClick={() => {
                    navigate('/users')
                }} style={{ width: '60px', height: '30px', color: 'white' }}>back</button>
            </div>
        </BaseLayout>
    </>
}