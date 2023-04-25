import axios from 'axios'

export async function productList() {
    const resp = await axios.get('http://tiswork.tisserv.net:9009/product?limit=1000', {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    })
    return resp.data.content
}

export async function productCreate(name, categoryId, description) {
    let object = {
        "properties": {
            "category": categoryId,
            "description": description,
            "name": name
        }
    }
   await axios.post('http://tiswork.tisserv.net:9009/product', object, {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    })
}

export async function productGet(itemId) {
    const resp = await axios.get(`http://tiswork.tisserv.net:9009/product/${itemId}`, {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    })
    return resp.data.Record.properties
}

export async function productUpdate(itemId, categoryId, descriptionUpdate, nameUpdate) {
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
    await axios.put('http://tiswork.tisserv.net:9009/product/' + itemId, object, {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    })
}