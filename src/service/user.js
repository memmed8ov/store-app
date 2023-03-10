import axios from 'axios'

export function userCreate(password, userName, navigate) {
    let object = {
        "password": password,
        "username": userName
    }
    axios.post('http://tiswork.tisserv.net:9009/users', object, {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    }).then(resp => {
        navigate('/users')
    })
}

export function userGet(itemId, setUserName, setPassword) {
    axios.get(`http://tiswork.tisserv.net:9009/users/${itemId}`, {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    }).then(resp => {
        setUserName(resp.data.username)
        setPassword(resp.data.password)
    })
}

export function userUpdate(itemId, password, userName, navigate) {
    let object = {
        "password": password,
        "username": userName,
    }
    axios.put('http://tiswork.tisserv.net:9009/users/' + itemId, object, {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    }).then(() => {
        navigate('/users')
    })
}

export function userList(setUsers) {
    axios.get('http://tiswork.tisserv.net:9009/users', {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    }).then(resp => {
        setUsers(resp.data.content)
    })
}
