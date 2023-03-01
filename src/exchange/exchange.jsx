import { ExchangeSimpleWidget } from "./exsimwid"
import { Card } from '@mui/material'
import { useState } from "react"
import { useNavigate } from 'react-router-dom'
export function Exchange(props) {
    const [fromCurrency, setFromCurrency] = useState(0)
    const [toCurrency, setToCurrency] = useState(0)
    const [rate, setRate] = useState(0)
    const [fromCurrency2, setFromCurrency2] = useState(0)
    const [toCurrency3, setToCurrency3] = useState(0)
    const [rate4, setRate4] = useState(0)
    const [list, setList] = useState([])
    const navigate = useNavigate()

    return <div className="" style={{}}>
        <Card style={{ margin: '10px', width: '500px' }}>
            From currency: <input type="text" style={{ color: 'white' }}
                value={fromCurrency} onChange={e => {
                    setFromCurrency(e.target.value)
                }} />
            <br />
            <br />
            To Currency: <input type="text" style={{ color: 'white' }}
                value={toCurrency} onChange={e =>
                    setToCurrency(e.target.value)
                } />
            <br />
            <br />
            Rate: <input type="number" style={{ color: 'white' }}
                value={rate} onChange={e => {
                    setRate(parseInt(e.target.value))
                }} />
            <br />
            <br />
            <button style={{ width: "70px", height: "30px", marginRight: '5px', textAlign: 'center', color: 'grey' }} onClick={() => {
                setList([...list, {
                    fc: fromCurrency,
                    tc: toCurrency,
                    ra: rate

                }])
            }}>Add</button>

            <button style={{ width: "70px", height: "30px", textAlign: 'center', color: 'grey' }} onClick={() => {

                setList([...list, {
                    fc: fromCurrency,
                    tc: toCurrency,
                    ra: rate
                }])
                navigate(`/exchange-item/${fromCurrency}/${toCurrency}/${rate}`)
            }}>Go</button>

        </Card>

        <Card style={{ width: '500px', height: '200px' }}>
            <table>
                <thead>
                    <tr>
                        <th style={{ paddingRight: '50px' }}>From Currency</th>
                        <th style={{ paddingRight: '50px' }}>To Currency</th>
                        <th style={{ paddingRight: '50px' }}>Rate</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map(item =>
                        <tr>
                            <td>{item.fc}</td>
                            <td>{item.tc}</td>
                            <td>{item.ra}</td>
                            <td>
                                <button onClick={() => {
                                    setFromCurrency2(item.fc)
                                    setToCurrency3(item.tc)
                                    setRate4(item.ra)
                                    navigate(`/exchange-item/${fromCurrency}/${toCurrency}/${rate}`)
                                }} style={{ width: '40px', height: '30px', }}></button>
                            </td>
                        </tr>

                    )}
                </tbody>
            </table>
        </Card>

        <br />
        <br />
        <br />

        <ExchangeSimpleWidget fromCurrency={fromCurrency2} toCurrency={toCurrency3} rate={rate4}></ExchangeSimpleWidget>

    </div >
}
