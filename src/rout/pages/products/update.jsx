import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { BaseLayout } from '../../layout/base-layout'

export function ProductUpdate() {
    const navigate = useNavigate()
    const itemId = useParams().id
    const [categoryId, setCategoryId] = useState('')
    const [nameUpdate, setNameUpdate] = useState('')
    const [descriptionUpdate, setDescriptionUpdate] = useState('')
    const [categoryList, setCategoryList] = useState([])

    useEffect(() => {
        axios.get(`http://tiswork.tisserv.net:9009/product/${itemId}`, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        }).then(resp => {
            setNameUpdate(resp.data.Record.properties.name)
            setDescriptionUpdate(resp.data.Record.properties.description)
            setCategoryId(resp.data.Record.properties.category)
        })
        axios.get('http://tiswork.tisserv.net:9009/category', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        }).then(resp => {
            setCategoryList(resp.data.content)
        })
    }, [])

    return <>
        <BaseLayout>
            <div style={{ display: 'grid', gap: '10px', width: '100%' }}>
                Name: <input type="text" style={{ width: '20%', height: '30px', color: 'white' }}
                    value={nameUpdate} onChange={e => setNameUpdate((e.target.value))} />
                Description: <input type="text" style={{ width: '20%', height: '30px', color: 'white' }}
                    value={descriptionUpdate} onChange={e => setDescriptionUpdate((e.target.value))} />
                Category: <select style={{ width: '20%', height: '30px' }} value={categoryId} onChange={e => {
                    setCategoryId(e.target.value)
                }}>
                    <option></option>
                    {categoryList.map(item => <option value={item.id}>{item.properties.name}</option>)}
                </select>
                <button onClick={() => {
                    let object = {
                        "id": "09ddf21c-938a-11ed-b5ad-7c10c91d547f",
                        "resource": "product",
                        "type": "USER",
                        "properties": {
                            "category": categoryId,
                            "description": descriptionUpdate,
                            "name": nameUpdate
                        },
                        "references": null,
                        "auditData": {
                            "createdOn": "2023-01-13T21:34:19.866372Z",
                            "updatedOn": "2023-01-13T21:34:19.866372Z",
                            "createdBy": "test-user",
                            "updatedBy": ""
                        },
                        "version": 1
                    }
                    axios.put('http://tiswork.tisserv.net:9009/product/' + itemId, object, {
                        headers: {
                            Authorization: 'Bearer ' + localStorage.getItem('token')
                        }
                    }).then(() => {
                        navigate('/products')
                    })
                }} style={{ width: "80px", height: "40px", marginLeft: '30px', backgroundColor: 'white', borderRadius: '50px' }}>
                    update</button>
                <button onClick={() => {
                    navigate('/products')
                }} style={{ width: '60px', height: '30px', color: 'white' }}>back</button>
            </div>
        </BaseLayout>
    </>
}