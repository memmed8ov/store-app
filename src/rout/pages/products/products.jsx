import { BaseLayout } from '../../layout/base-layout'
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ClearIcon from '@mui/icons-material/Clear';
import DoneIcon from '@mui/icons-material/Done';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
export function Products() {
    return <>
        <BaseLayout>
            < button style={{ width: '70px', height: '40px', background: 'grey' }}>Add</button>
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
                    <TableBody>
                        <TableRow >
                            <TableCell ></TableCell>
                            <TableCell ></TableCell>
                            <TableCell ></TableCell>
                            <TableCell style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                                <button style={{ width: '40px', height: '30px', background: 'grey' }}>{<DoneIcon />}</button>
                                <button style={{ width: '40px', height: '30px', background: 'grey' }}>{<PriorityHighIcon/>}</button>
                                <button style={{ width: '40px', height: '30px', background: 'grey' }}>{<ClearIcon />}</button>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </BaseLayout>
    </>
}



{/* <table className='container table bordered table-success'>
            <thead>
                <tr>
                    <th>
                        Category
                    </th>
                    <th>
                        Name
                    </th>
                    <th>
                        Details
                    </th>
                    <th>
                        Actions
                    </th>
                </tr>
            </thead>
        </table>
            <h1 style={{ color: 'YELLOW' }}>GET OUT HERE</h1> */}

