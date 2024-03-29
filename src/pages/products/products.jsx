import { BaseLayout } from '../../components/layout/base-layout'
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
import { BasicCrudActions } from '../../components/BasicCrudActions/BasicCrudActions';
import { productList } from '../../service/product'

export function Products() {

    const navigate = useNavigate()
    const [products, setProducts] = useState([])

    useEffect(() => {
        productList().then(setProducts)
    }, [])


    function productListLocal() {
        productList(setProducts)
    }

    return <>
        <BaseLayout>
            <button style={{ width: '70px', height: '40px', background: 'grey' }}
                onClick={() => { navigate('/products/add') }}>Add</button>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="caption table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Category</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Details</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>{products.map(productItem =>
                        <TableRow >
                            <TableCell >{productItem.properties.category}</TableCell>
                            <TableCell >{productItem.properties.name}</TableCell>
                            <TableCell >{productItem.properties.description}</TableCell>
                            <TableCell style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                                <BasicCrudActions onReload={productListLocal} pageName='product' pageUrlPart='products' item={productItem}></BasicCrudActions>
                            </TableCell>
                        </TableRow>
                    )}</TableBody>
                </Table>
            </TableContainer>
        </BaseLayout>
    </>
}
