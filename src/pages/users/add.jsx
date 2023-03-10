import { BaseLayout } from '../../components/layout/base-layout'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Password } from "../../components/password/password";
import { userCreate } from '../../service/user';

export function UsersAdd() {

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    return <>
        <BaseLayout>
            <div style={{ display: 'grid', gap: '10px', width: '100%' }}>
                <input placeholder='username' style={{ width: '20%', height: '30px', color: 'white' }} type="text"
                    value={userName} onChange={e => setUserName((e.target.value))} />
                <Password value={password} onChange={e => setPassword((e.target.value))} />
                <button style={{ width: '70px', height: '40px', background: 'grey', marginLeft: '50px' }} onClick={() => {
                    userCreate(password, userName, navigate)
                }}>Add</button>
            </div>
        </BaseLayout>
    </>
}
