import axios from 'axios'

// export function categoryList2() {
//     return axios.get('http://tiswork.tisserv.net:9009/category', {
//         headers: {
//             Authorization: 'Bearer ' + localStorage.getItem('token')
//         }
//     }).then(resp => resp.data.content)
// }

// export const categoryList = async () => {
//     const resp = await axios.get('http://tiswork.tisserv.net:9009/category', {
//         headers: {
//             Authorization: 'Bearer ' + localStorage.getItem('token')
//         }
//     })

//     return resp.data.content
// }

export async function categoryList() {
    const resp = await axios.get('http://tiswork.tisserv.net:9009/category', {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    })


    console.log(resp)

    return resp.data.content
}

export async function categoryCreate(description, name) {
    let object = {
        "properties": {
            "description": description,
            "name": name
        }
    }

    await axios.post('http://tiswork.tisserv.net:9009/category', object, {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    })
}

export async function categoryGet(itemId) {
    const resp = await axios.get(`http://tiswork.tisserv.net:9009/category/${itemId}`, {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    })

    return resp.data.record.properties
}

export async function categoryUpdate(itemId, description, name) {
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
    await axios.put('http://tiswork.tisserv.net:9009/category/' + itemId, object, {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    })

}


