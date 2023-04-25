import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { BaseLayout } from '../../components/layout/base-layout'
import { productGet, productUpdate } from '../../service/product'
import { categoryList as categoryListLocal } from '../../service/category'

export function ProductUpdate() {

    const navigate = useNavigate()
    const itemId = useParams().id
    const [categoryId, setCategoryId] = useState('')
    const [nameUpdate, setNameUpdate] = useState('')
    const [descriptionUpdate, setDescriptionUpdate] = useState('')
    const [categoryList, setCategoryList] = useState([])

    useEffect(() => {
        productGet(itemId).then((data) => {
            setNameUpdate(data.name)
            setDescriptionUpdate(data.description)
            setCategoryId(data.category)

        })
        categoryListLocal().then(setCategoryList)

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

                    productUpdate(itemId, categoryId, descriptionUpdate, nameUpdate).then(() => navigate('/products'))

                }} style={{ width: "80px", height: "40px", marginLeft: '30px', backgroundColor: 'white', borderRadius: '50px' }}>
                    update</button>
                <button onClick={() => {
                    navigate('/products')
                }} style={{ width: '60px', height: '30px', color: 'white' }}>back</button>
            </div>
        </BaseLayout>
    </>
}