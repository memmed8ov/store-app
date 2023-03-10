import axios from 'axios'

export function login(username, password, navigate) {
    let object = {
        'Username': username,
        'Password': password,
        "term": 3
    }
    axios.post('http://tiswork.tisserv.net:9009/authentication/token', object).then((response) => {
        const token = response.data.token.content
        localStorage.setItem('token', token)
        navigate('/layout')
    }, err => {
        alert('username or password is incorrect')
    })
}
