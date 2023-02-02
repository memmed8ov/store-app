import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { BaseLayout } from '../../layout/base-layout'
import { Password } from "../../password/password";
export function UsersUpdate() {
    const navigate = useNavigate()
    const itemId = useParams().id
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        axios.get(`http://tiswork.tisserv.net:9009/users/${itemId}`, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        }).then(resp => {
            setUserName(resp.data.username)
            setPassword(resp.data.password)
        })
    }, [])

    return <>
        <BaseLayout>
            <div style={{ display: 'grid', gap: '10px', width: '100%' }}>
                UserName: <input type="text" style={{ width: '20%', height: '30px', color: 'white' }}
                    value={userName} onChange={e => setUserName((e.target.value))} />
                Password:   <Password value={password} onChange={e => setPassword((e.target.value))} />
                <button onClick={() => {
                    let object = {
                        "password": password,
                        "username": userName,
                    }
                    axios.put('http://tiswork.tisserv.net:9009/users/' + itemId, object, {
                        headers: {
                            Authorization: 'Bearer ' + localStorage.getItem('token')
                        }
                    }).then(() => {
                        navigate('/users')
                    })
                }} style={{ width: "80px", height: "40px", marginLeft: '30px', backgroundColor: 'white', borderRadius: '50px' }}>
                    update</button>
                <button onClick={() => {
                    navigate('/users')
                }} style={{ width: '60px', height: '30px', color: 'white' }}>back</button>
            </div>
        </BaseLayout>
    </>
}