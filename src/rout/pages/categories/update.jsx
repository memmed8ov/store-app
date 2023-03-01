import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { BaseLayout } from '../../layout/base-layout'
export function CategoriesUpdate() {
    const navigate = useNavigate()
    const itemId = useParams().id
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    useEffect(() => {
        axios.get(`http://tiswork.tisserv.net:9009/category/${itemId}`,{
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        }).then(resp => {
            setName(resp.data.record.properties.name)
            setDescription(resp.data.record.properties.description)
        })
    })
    return <>
        <BaseLayout>
            <div style={{ display: 'grid', gap: '10px', width: '100%' }}>
                Name: <input type="text" style={{ width: '20%', height: '30px', color: 'white' }}
                    value={name} onChange={e => setName((e.target.value))} />
                Description: <input type="text" style={{ width: '20%', height: '30px', color: 'white' }}
                    value={description} onChange={e => setDescription((e.target.value))} />
                <button onClick={() => {
                    let object = {
                        "id": "d6df7154-91fb-11ed-b5ad-7c10c91d547f",
                        "resource": "category",
                        "type": "USER",
                        "properties": {
                            "description": description,
                            "name": name
                        },
                        "references": null,
                        "auditData": {
                            "createdOn": "2023-01-11T22:03:54.614Z",
                            "updatedOn": "2023-01-11T22:03:54.614Z",
                            "createdBy": "test-user",
                            "updatedBy": ""
                        },
                        "version": 1
                    }
                    axios.put('http://tiswork.tisserv.net:9009/category/' + itemId, object,{
                        headers: {
                            Authorization: 'Bearer ' + localStorage.getItem('token')
                        }
                    }).then(() => {
                        navigate('/categories')
                    })
                }} style={{ width: "80px", height: "40px", marginLeft: '30px', backgroundColor: 'white',borderRadius: '50px'}}>
                    update</button>
                <button onClick={() => {
                    navigate('/categories')
                }} style={{ width: '60px', height: '30px', color: 'white' }}>back</button>
            </div>
        </BaseLayout>
    </>
}