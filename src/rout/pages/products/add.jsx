import { BaseLayout } from '../../layout/base-layout'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export function ProductsAdd() {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [categories, setCategories] = useState([])
    const [categoryId, setCategoryId] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://tiswork.tisserv.net:9009/category', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        }).then(resp => {
            setCategories(resp.data.content)
        })
    }, [])

    return <>
        <BaseLayout>
            <br />
            <br />
            <input placeholder='name' style={{ marginLeft: '50px', width: '200px', height: '30px', color: 'white' }}
                type="text"
                value={name} onChange={e => setName((e.target.value))} />
            <br />
            <br />
            <input placeholder='description' style={{ marginLeft: '50px', width: '200px', height: '30px', color: 'white' }}
                type="text"
                value={description} onChange={e => setDescription((e.target.value))} />
            <br />
            <br />
            <select value={categoryId} onChange={e => {
                setCategoryId(e.target.value);
            }} style={{ backgroundColor: 'grey', marginLeft: '50px' }}>
                <option></option>
                {categories.map(item => <option value={item.id}>{item.properties.name} - {item.id}</option>)}
            </select>
            <br />
            <br />
            <button style={{ width: '70px', height: '40px', background: 'grey', marginLeft: '50px' }} onClick={() => {
                let object = {
                    "properties": {
                        "category": categoryId,
                        "description": description,
                        "name": name
                    }
                }
                axios.post('http://tiswork.tisserv.net:9009/product', object, {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem('token')
                    }
                }).then(resp => {
                    navigate('/products')
                })
            }}>Add</button>
        </BaseLayout>
    </>
}
