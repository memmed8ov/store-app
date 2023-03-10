import axios from 'axios'

export function productList(setProducts) {
    axios.get('http://tiswork.tisserv.net:9009/product?limit=1000', {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    }).then(resp => {
        setProducts(resp.data.content)
    })
}

export function productCreate(name, categoryId, description, navigate) {
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
    }).then(() => {
        navigate('/products')
    })
}

export function productGet(itemId, setNameUpdate, setDescriptionUpdate, setCategoryId) {
    axios.get(`http://tiswork.tisserv.net:9009/product/${itemId}`, {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    }).then(resp => {
        setNameUpdate(resp.data.Record.properties.name)
        setDescriptionUpdate(resp.data.Record.properties.description)
        setCategoryId(resp.data.Record.properties.category)
    })
}

export function productUpdate(itemId, categoryId, descriptionUpdate, nameUpdate, navigate) {
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
}