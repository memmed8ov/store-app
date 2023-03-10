import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from 'react'
import { BaseLayout } from '../../components/layout/base-layout'
import { productGet } from '../../service/product'
import { categoryList as categoryListLocal } from '../../service/category'

export function ProductView() {
    
    const navigate = useNavigate()
    const itemId = useParams().id
    const [categoryId, setCategoryId] = useState('')
    const [nameUpdate, setNameUpdate] = useState('')
    const [descriptionUpdate, setDescriptionUpdate] = useState('')
    const [categoryList, setCategoryList] = useState([])

    useEffect(() => {
        productGet(itemId, setNameUpdate, setDescriptionUpdate, setCategoryId)
        categoryListLocal(setCategoryList)
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