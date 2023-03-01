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
import axios from 'axios'
import { useState, useEffect } from 'react'
import { BasicCrudActions } from '../../BasicCrudActions/BasicCrudActions';
export function Categories() {
    const navigate = useNavigate()
    const [categories, setCategories] = useState([])

    function categoriesList() {
        axios.get('http://tiswork.tisserv.net:9009/category?limit=1000',{
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        }).then(resp => {
            setCategories(resp.data.content)
        })
    }
    useEffect(() => {
        categoriesList()
    }, [])

    return <>
        <BaseLayout>
            <button style={{ width: '70px', height: '40px', background: 'grey' }}
             onClick={() => { navigate('/categories/add') }}>Add</button>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="caption table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Details</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>{categories.map(categoryItem =>
                        <TableRow >
                            <TableCell >{categoryItem.properties.name}</TableCell>
                            <TableCell >{categoryItem.properties.description}</TableCell>
                            <TableCell style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                            <BasicCrudActions pageName='category' pageUrlPart='categories' item={categoryItem}></BasicCrudActions>
                            </TableCell>
                        </TableRow>
                    )}</TableBody>
                </Table>
            </TableContainer>
        </BaseLayout>
    </>
}


