import { useState } from "react"
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom'
import { symbolNewList, symbolHistoricalList } from "../../service/symbol-dashboard";

export function SymbolDashboard() {

    const navigate = useNavigate() // Structure(tip), What is, What for
    const [newsList, setNewsList] = useState([]) // array of object, newsList, (Api dan melumatlari getirecek, o melumatlari table da gosterecek)
    const [symbol, setSymbol] = useState('') // string, Axtardigimiz shirketin adi, Axtardigimiz shirketin adi
    const [historicalList, setHistoricalList] = useState([])
    const [timeRange, setTimeRange] = useState('1min') // string

    return <>
        <div style={{ color: 'white', marginLeft: '20px', background: 'grey', textAlign: 'center' }}>

            Symbol:<input type="text"
                style={{
                    background: 'white', width: '350px', height: '40px', marginTop: '20px',
                    marginRight: '15px', borderRadius: '10px', border: '3px solid', color: 'orange'
                }}
                value={symbol} onChange={e => setSymbol(e.target.value)}
            />

            <button style={{
                width: '70px', height: '30px', color: 'white', background: 'orange',
                borderRadius: '10px', border: '3px solid'
            }}
                onClick={() => {
                    symbolNewList(symbol, setNewsList)
                    symbolHistoricalList(symbol, timeRange, setHistoricalList)
                }}
            >Load</button>
            {/* symbol, timeRange */}
            <button style={{
                width: '150px', height: '30px', color: 'white', background: 'orange',
                borderRadius: '10px', border: '3px solid', marginLeft: '5px'
            }}
                onClick={() => { navigate(`/viewhistoricalchart/${symbol}/${timeRange}`) }}
            >View Historical Chart</button>

            <div style={{ marginTop: '10px', width: '70%', margin: '50px auto' }}>
                <h1>News</h1>
                <TableContainer component={Paper} style={{ background: 'orange', border: '3px solid', color: 'white' }} >
                    <Table sx={{ minWidth: 650 }} aria-label="caption table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Id</TableCell>
                                <TableCell>Pushlistdate</TableCell>
                                <TableCell>Description/title</TableCell>
                                <TableCell>Source</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>{newsList.map(item =>
                            <TableRow >
                                <TableCell >{item.symbol}</TableCell>
                                <TableCell >{item.publishedDate}</TableCell>
                                <TableCell >{item.title}</TableCell>
                                <TableCell >{item.site}</TableCell>
                            </TableRow>
                        )} </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <div style={{ marginTop: '10px', width: '70%', margin: '50px auto' }}>
                <h1>Historical</h1>
                {/* 30min - sehifeni acanda */}
                <select value={timeRange} onChange={e => {
                    setTimeRange(e.target.value)
                    symbolHistoricalList(symbol, timeRange, setHistoricalList)
                }}>
                    <option>1min</option>
                    <option>5min</option>
                    <option>15min</option>
                    <option>30min</option>
                    <option>1hour</option>
                    <option>4hour</option>
                </select>
                <TableContainer component={Paper} style={{ background: 'orange', border: '3px solid', color: 'white' }} >
                    <Table sx={{ minWidth: 650 }} aria-label="caption table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Date</TableCell>
                                <TableCell>Volume</TableCell>
                                <TableCell>Open</TableCell>
                                <TableCell>Close</TableCell>
                                <TableCell>High</TableCell>
                                <TableCell>Low</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>{historicalList.map(item =>
                            <TableRow >
                                <TableCell >{item.date}</TableCell>
                                <TableCell >{item.volume}</TableCell>
                                <TableCell >{item.open}</TableCell>
                                <TableCell >{item.close}</TableCell>
                                <TableCell >{item.high}</TableCell>
                                <TableCell >{item.low}</TableCell>
                            </TableRow>
                        )}</TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    </>
}