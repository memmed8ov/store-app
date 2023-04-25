import { useState } from "react"
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

export function Order() {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'grey',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [product, setProduct] = useState()
    const [quantity, setQuantity] = useState('')
    const [price, setPrice] = useState(0)
    const [status, setStatus] = useState('')
    const [adress, setAdress] = useState('')
    const [country, setCountry] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [catalog, setCatalog] = useState([])
    const [value, setValue] = React.useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return <>
        <div>
            <Button style={{
                width: '170px', height: '30px', color: 'grey', background: 'yellow',
                borderRadius: '10px', border: '3px solid', margin: '10px'
            }}
                onClick={handleOpen}>Add</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChange} aria-label="lab API tabs example">
                                <Tab label="Main" value="1" />
                                <Tab label="Shipping" value="2" />
                            </TabList>
                        </Box>
                        <TabPanel value="1">
                            <Typography id="modal-modal-title" sx={{ mt: 2 }}>
                                Product:<input type="text" style={{
                                    height: '30px', width: '200px', textAlign: 'center',
                                    color: 'white', background: 'grey', marginLeft: '10px', border: '2px solid white'
                                }}
                                    value={product} onChange={e => {
                                        setProduct(e.target.value)
                                    }}
                                />
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                Price:<input type="number" style={{
                                    height: '30px', width: '200px', textAlign: 'center',
                                    color: 'white', background: 'grey', marginLeft: '30px', border: '2px solid white'
                                }}
                                    value={price} onChange={e => {
                                        setPrice(parseInt(e.target.value))
                                    }}
                                />
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                Quantity:<input type="text" style={{
                                    height: '30px', width: '200px', textAlign: 'center',
                                    color: 'white', background: 'grey', marginLeft: '6px', border: '2px solid white'
                                }}
                                    value={quantity} onChange={e => {
                                        setQuantity(e.target.value)
                                    }}
                                />
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                Status:<select value={status} onChange={e => {
                                    setStatus(e.target.value);
                                }} style={{
                                    height: '30px', width: '207px', textAlign: 'center',
                                    color: 'white', background: 'grey', marginLeft: '22px', border: '2px solid white'
                                }}>
                                    <option>New</option>
                                    <option>Processing</option>
                                    <option>Done</option>
                                </select>
                            </Typography>
                        </TabPanel>
                        <TabPanel value="2">
                            <Typography id="modal-modal-title" sx={{ mt: 2 }}>
                                Adress:<input type="text" style={{
                                    height: '30px', width: '200px', textAlign: 'center',
                                    color: 'white', background: 'grey', marginLeft: '12px', border: '2px solid white'
                                }}
                                    value={adress} onChange={e => {
                                        setAdress(e.target.value)
                                    }}
                                />
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                Country:<input type="text" style={{
                                    height: '30px', width: '200px', textAlign: 'center',
                                    color: 'white', background: 'grey', marginLeft: '6px', border: '2px solid white'
                                }}
                                    value={country} onChange={e => {
                                        setCountry(e.target.value)
                                    }}
                                />
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                City:<input type="text" style={{
                                    height: '30px', width: '200px', textAlign: 'center',
                                    color: 'white', background: 'grey', marginLeft: '35px', border: '2px solid white'
                                }}
                                    value={city} onChange={e => {
                                        setCity(e.target.value)
                                    }}
                                />
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                State:<input type="text" style={{
                                    height: '30px', width: '200px', textAlign: 'center',
                                    color: 'white', background: 'grey', marginLeft: '6px', border: '2px solid white'
                                }}
                                    value={state} onChange={e => {
                                        setState(e.target.value)
                                    }}
                                />
                            </Typography>
                        </TabPanel>
                    </TabContext>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}
                        style={{ display: 'flex', justifyContent: 'end' }}>
                        <button style={{
                            width: '55px', height: '30px', background: 'none', border: '2px solid white',
                            marginLeft: '10px', color: 'black'
                        }}
                            onClick={() => {
                                handleClose()
                            }}
                        >cancel</button>
                        <button style={{
                            width: '50px', height: '30px', background: 'none', border: '2px solid white',
                            marginLeft: '10px', color: 'black'
                        }}
                            onClick={() => {
                                setCatalog([...catalog, {
                                    product: product,
                                    price: price,
                                    quantity: quantity,
                                    status: status
                                }])
                            }}
                        >save</button>
                    </Typography>
                </Box>
            </Modal>

            <div style={{ marginTop: '10px', width: '75%', margin: '10px' }}>
                <TableContainer component={Paper}
                    style={{ background: 'grey', border: '3px solid', color: 'white' }} >
                    <h4 style={{ color: 'white', display: 'flex', justifyContent: 'center' }}>Order Table</h4>
                    <Table sx={{ minWidth: 650 }} aria-label="caption table">
                        <TableHead>
                            <TableRow >
                                <TableCell>Product</TableCell>
                                <TableCell>Quantity</TableCell>
                                <TableCell>Price</TableCell>
                                <TableCell>Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>{catalog.map((item) =>
                            <TableRow >
                                <TableCell >{item.product}</TableCell>
                                <TableCell >{item.quantity}</TableCell>
                                <TableCell >{item.price}</TableCell>
                                <TableCell >{item.status}</TableCell>
                            </TableRow>
                        )} </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    </>
}