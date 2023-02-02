import { BaseLayout } from '../../layout/base-layout'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Password } from "../../password/password";
import VisibilityIcon from '@mui/icons-material/Visibility';
export function UsersAdd() {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [show, setShow] = useState('password')
    const navigate = useNavigate()
    return <>
        <BaseLayout>
            <div style={{ display: 'grid', gap: '10px', width: '100%' }}>
            <input placeholder='username' style={{ width: '20%', height: '30px', color: 'white'}} type="text"
                value={userName} onChange={e => setUserName((e.target.value))} />
            <Password value={password} onChange={e => setPassword((e.target.value))} />
            <button style={{ width: '70px', height: '40px', background: 'grey', marginLeft: '50px' }} onClick={() => {
                let object = {
                    "password": password,
                    "username": userName
                }
                axios.post('http://tiswork.tisserv.net:9009/users', object, {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem('token')
                    }
                }).then(resp => {
                    navigate('/users')
                })
            }}>Add</button>
            </div>
        </BaseLayout>
    </>
}
