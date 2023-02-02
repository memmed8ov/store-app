import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from 'react'
import axios from 'axios'
import { BaseLayout } from '../../layout/base-layout'
export function ProductView() {
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
            <div style={{ display: 'grid', gap: '5px', width: '100%' }}>
                Name: <input disabled type="text" style={{ width: '20%', height: '30px', color: 'white' }}
                    value={nameUpdate} onChange={e => setNameUpdate((e.target.value))} />
                Description: <input disabled type="text" style={{ width: '20%', height: '30px', color: 'white' }}
                    value={descriptionUpdate} onChange={e => setDescriptionUpdate((e.target.value))} />
                Category: <select disabled style={{ width: '20%', height: '30px' }} value={categoryId}
                    onChange={e => {
                        setCategoryId(e.target.value)
                    }}>
                    <option></option>
                    {categoryList.map(item => <option value={item.id}>{item.properties.name}</option>)}
                </select>
                <button onClick={() => {
                    navigate('/products')
                }} style={{ width: '60px', height: '30px', color: 'white' }}>back</button>
            </div>
        </BaseLayout>
    </>
}