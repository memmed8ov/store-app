import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { BaseLayout } from '../../components/layout/base-layout'
import { categoryGet, categoryUpdate } from '../../service/category'

export function CategoriesUpdate() {
    
    const navigate = useNavigate()

    const itemId = useParams().id
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    useEffect(() => {
        categoryGet(itemId, setName, setDescription)
    })

    return <>
        <BaseLayout>
            <div style={{ display: 'grid', gap: '10px', width: '100%' }}>
                Name: <input type="text" style={{ width: '20%', height: '30px', color: 'white' }}
                    value={name} onChange={e => setName((e.target.value))} />
                Description: <input type="text" style={{ width: '20%', height: '30px', color: 'white' }}
                    value={description} onChange={e => setDescription((e.target.value))} />
                <button onClick={() => {
                    categoryUpdate(itemId, description, name, navigate)
                }} style={{ width: "80px", height: "40px", marginLeft: '30px', backgroundColor: 'white', borderRadius: '50px' }}>
                    update</button>
                <button onClick={() => {
                    navigate('/categories')
                }} style={{ width: '60px', height: '30px', color: 'white' }}>back</button>
            </div>
        </BaseLayout>
    </>
}