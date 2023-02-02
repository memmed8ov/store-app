import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from 'react'
import axios from 'axios'
import { BaseLayout } from '../../layout/base-layout'
export function View() {
    const navigate = useNavigate()
    const itemId = useParams().id
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    useEffect(() => {
        axios.get(`http://tiswork.tisserv.net:9009/category/${itemId}`,{
            headers: {
                // Authorization: 'Beaerer ' + localStorage.getItem('token')
            }
        }).then(resp => {
            setName(resp.data.record.properties.name)
            setDescription(resp.data.record.properties.description)
        })
    })
    return <>
        <BaseLayout>
            <div style={{ display: 'grid', gap: '5px', width: '100%' }}>
                Name: <input disabled type="text" style={{ width: '20%', height: '30px', color: 'white' }}
                    value={name} onChange={e => setName((e.target.value))} />
                Description: <input disabled type="text" style={{ width: '20%', height: '30px', color: 'white' }}
                    value={description} onChange={e => setDescription((e.target.value))} />
                <button onClick={() => {
                    navigate('/categories')
                }} style={{ width: '60px', height: '30px', color: 'white' }}>back</button>
            </div>
        </BaseLayout>
    </>
}