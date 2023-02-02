import { BaseLayout } from '../../layout/base-layout'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export function Add() {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [categories, setCategories] = useState([])
    const [categoryId, setCategoryId] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://tiswork.tisserv.net:9009/category', {
            headers: {
                Authorization: 'Beaerer ' + localStorage.getItem('token')
            }
        }).then(resp => {
            setCategories(resp.data.content)
        })
    }, [])

    // 1. Render
    // 2. Add funksiasi cagrilir
    /// ### /// useEffect qirir
    // 3. Add funksiasinin icinde axios.get cagrilir (assinxron)
    // 4. Backend cavab gelir
    // 5. setCategories funksiasi cagrilir
    // 6. setCategories useStatein set funksiasi olduguna gore, render prosesi cagrilir

    // input elementleri, ve ya form elementleri
    // bu elementlerde value onChange
    // two way binding
    // deyisen <=> input
    // input, select, textarea

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
                        Authorization: 'Beaerer ' + localStorage.getItem('token')
                    }
                }).then(resp => {
                    navigate('/products')
                })
            }}>Add</button>
        </BaseLayout>
    </>
}

// name, description, actions



// {
//     "total": 1,
//     "content": [
//       {
//         "id": "e19f114e-91fb-11ed-b5ad-7c10c91d547f",
//         "resource": "product",
//         "type": "USER",
//         "properties": {
//           "category": "d6df7154-91fb-11ed-b5ad-7c10c91d547f",
//           "description": "Test category details",
//           "name": "Test category"
//         },
//         "references": null,
//         "auditData": {
//           "createdOn": "2023-01-11T22:04:12.647049Z",
//           "updatedOn": "2023-01-11T22:04:12.647049Z",
//           "createdBy": "test-user",
//           "updatedBy": ""
//         },
//         "version": 1
//       }
//     ],
//     "error": null
//   }