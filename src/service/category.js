import axios from 'axios'

export function categoryList(setCategories) {
    axios.get('http://tiswork.tisserv.net:9009/category', {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    }).then(resp => {
        setCategories(resp.data.content)
    })
}

export function categoryCreate(description, name, navigate) {
    let object = {
        "properties": {
            "description": description,
            "name": name
        }
    }
    axios.post('http://tiswork.tisserv.net:9009/category', object, {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    }).then(resp => {
        navigate('/categories')
    })

}

export function categoryGet(itemId, setName, setDescription) { 
    axios.get(`http://tiswork.tisserv.net:9009/category/${itemId}`, {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    }).then(resp => {
        setName(resp.data.record.properties.name)
        setDescription(resp.data.record.properties.description)
    })
}

export function categoryUpdate(itemId, description, name, navigate) {
    let object = {
        "id": "d6df7154-91fb-11ed-b5ad-7c10c91d547f",
        "resource": "category",
        "type": "USER",
        "properties": {
            "description": description,
            "name": name
        },
        "references": null,
        "auditData": {
            "createdOn": "2023-01-11T22:03:54.614Z",
            "updatedOn": "2023-01-11T22:03:54.614Z",
            "createdBy": "test-user",
            "updatedBy": ""
        },
        "version": 1
    }
    axios.put('http://tiswork.tisserv.net:9009/category/' + itemId, object, {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    }).then(() => {
        navigate('/categories')
    })
}


