import { BaseLayout } from '../../components/layout/base-layout'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { categoryCreate } from '../../service/category'

export function CategoriesAdd() {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const navigate = useNavigate()

    return <>
        <BaseLayout>
            <br />
            <br />
            <input placeholder='name' style={{ marginLeft: '50px', width: '200px', height: '30px', color: 'white' }} type="text"
                value={name} onChange={e => setName((e.target.value))} />
            <br />
            <br />
            <input placeholder='description' style={{ marginLeft: '50px', width: '200px', height: '30px', color: 'white' }} type="text"
                value={description} onChange={e => setDescription((e.target.value))} />
            <br />
            <br />
            <button style={{ width: '70px', height: '40px', background: 'grey', marginLeft: '50px' }} onClick={() => {
                categoryCreate(description, name, navigate)
            }}>Add</button>
        </BaseLayout>
    </>
}
