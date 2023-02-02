import { BaseLayout } from '../../layout/base-layout'
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { BasicCrudActions } from '../../BasicCrudActions/BasicCrudActions';
export function Users() {
    const navigate = useNavigate()
    const [users, setUsers] = useState([])
    function User() {
        axios.get('http://tiswork.tisserv.net:9009/users', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        }).then(resp => {
            setUsers(resp.data.content)
        })
    }
    useEffect(() => {
        User()
    }, [])

    return <>
        <BaseLayout>
            <button style={{ width: '70px', height: '40px', background: 'grey' }}
                onClick={() => { navigate('/users/add') }}>Add</button>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="caption table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Username</TableCell>
                            <TableCell>Password</TableCell>
                            <TableCell>Scopes</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>{users.map(usersItem =>
                        <TableRow >
                            <TableCell >{usersItem.username}</TableCell>
                            <TableCell >----</TableCell>
                            <TableCell></TableCell>
                            <TableCell style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                                <BasicCrudActions pageName='users' pageUrlPart='users' item={usersItem}></BasicCrudActions>
                            </TableCell>
                        </TableRow>
                    )} </TableBody>
                </Table>
            </TableContainer>
        </BaseLayout>
    </>
}