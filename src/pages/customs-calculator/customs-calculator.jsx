import { useNavigate } from 'react-router-dom'
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

export function CustomsCalculator() {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [quantity, setQuantity] = useState('')
    const [shippingPrice, setShippingPrice] = useState(0)
    const [list, setList] = useState([])
    const [limit, setLimit] = useState(300)
    const [paperWork, setPaperWork] = useState(60)
    const [back, setBack] = useState('')

    const [index, setIndex] = useState('')
    let total = 0
    for (let i = 0; i < list.length; i++) {
        total = total + list[i].p * list[i].q + list[i].sh // p: price; q: quantity
    }

    let overflow = total - limit
    if (total < limit) {
        overflow = 0
    }

    let customChange = overflow * 0.36
    const [undoKnopkasiIshlesinmi, setUndoKnopkasiIshlesinmi] = useState(false)

    return <>
        <div style={{ display: 'flex' }}>
            <div style={{ marginTop: '10px', width: '60%', margin: '10px' }}>
                <TableContainer component={Paper}
                    style={{ background: 'green', border: '3px solid', color: 'white' }} >
                    <h4 style={{ color: 'white', display: 'flex', justifyContent: 'center' }}>Items on Basket</h4>
                    <Table sx={{ minWidth: 650 }} aria-label="caption table">
                        <TableHead>
                            <TableRow >
                                <TableCell>No</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>Price</TableCell>
                                <TableCell>Quantity</TableCell>
                                <TableCell>Shipping Price</TableCell>
                                <TableCell>Sub Total</TableCell>
                                <TableCell>Total</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>{list.map((item, index) =>
                            <TableRow >
                                <TableCell >{index + 1}</TableCell>
                                <TableCell >{item.n}</TableCell> {/*(n : name*/}
                                <TableCell >{item.p}</TableCell> {/*(p : price*/}
                                <TableCell >{item.q}</TableCell> {/*(q : quantity*/}
                                <TableCell >{item.sh}</TableCell> {/*(sh : shippingPrice*/}
                                <TableCell >{item.p * item.q}</TableCell>
                                <TableCell >{item.p * item.q + item.sh}</TableCell>
                                <TableCell ><button style={{ width: '70px', height: '40px', background: 'white', }}
                                    onClick={() => {
                                        setIndex(index)

                                        setUndoKnopkasiIshlesinmi(true)

                                        setBack(item)
                                        setList(list.filter(y => y != item))
                                    }}>delete</button></TableCell>
                            </TableRow>
                        )} </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <div style={{
                background: 'green', width: '350px', marginLeft: '10px', height: '350px', borderRadius: '10px', padding: '5px',
                border: '3px solid', color: 'white', marginTop: '10px'
            }}>
                <h4>Total: {total} USD</h4>
                <h4>Limit: {limit} USD</h4>
                <br />
                <h4>Customs Payment</h4>
                <h4>Overflow:{overflow}</h4>
                <h4>Custom change(36%):{customChange}</h4>
                <h4>Paper work:{paperWork}</h4>
                <h4>Result:{paperWork + customChange}</h4>
            </div>
        </div>
        <div>
            <Button style={{
                width: '170px', height: '30px', color: 'white', background: 'green',
                borderRadius: '10px', border: '3px solid', margin: '10px'
            }}
                onClick={handleOpen}>Add new Item</Button>
            <Button onClick={() => {
                // setList([...list, back])
                // list.push(back)

                if (undoKnopkasiIshlesinmi) { // eger birinci defedirse [boolean]
                    list.splice(index, 0, back) // sildiyimizi geri qaytarmalidir.
                }

                setUndoKnopkasiIshlesinmi(false)

                setList([...list])  // tekrar render etme
            }}>Undo</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">

                        No:
                    </Typography>
                    <Typography id="modal-modal-title" variant="h6" component="h2">

                        Name:<input type="text" style={{
                            height: '30px', width: '200px', textAlign: 'center',
                            color: 'white', background: 'black', marginLeft: '50px'
                        }}
                            value={name} onChange={e => {
                                setName(e.target.value)
                            }}
                        />
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Price:<input type="number" style={{
                            height: '30px', width: '200px', textAlign: 'center',
                            color: 'white', background: 'black', marginLeft: '67px'
                        }}
                            value={price} onChange={e => {
                                setPrice(parseInt(e.target.value))
                            }}
                        />
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Quantity:<input type="text" style={{
                            height: '30px', width: '200px', textAlign: 'center',
                            color: 'white', background: 'black', marginLeft: '43px'
                        }}
                            value={quantity} onChange={e => {
                                setQuantity(e.target.value)
                            }}
                        />
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Shipping price:<input type="number" style={{
                            height: '30px', width: '200px', textAlign: 'center',
                            color: 'white', background: 'black'
                        }}
                            value={shippingPrice} onChange={e => {
                                setShippingPrice(parseInt(e.target.value))
                            }}
                        />
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}
                        style={{ display: 'flex', justifyContent: 'end' }}>
                        <button style={{
                            width: '70px', height: '40px', background: 'black',
                            marginLeft: '10px', color: 'white'
                        }}
                            onClick={() => {
                                handleClose()
                            }}
                        >cancel</button>
                        <button style={{
                            width: '70px', height: '40px', background: 'black',
                            marginLeft: '10px', color: 'white'
                        }}
                            onClick={() => {
                                setList([...list, {
                                    n: name,
                                    p: price,
                                    q: quantity,
                                    sh: shippingPrice
                                }])
                            }}
                        >add</button>
                    </Typography>

                </Box>
            </Modal>
        </div>
    </>
}
