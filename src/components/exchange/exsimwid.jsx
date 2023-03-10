import { useState } from "react"
import { Card } from '@mui/material'
export function ExchangeSimpleWidget(props) {

    const [fromCurrency, setFromCurrency] = useState(0)
    const [toCurrency, setToCurrency] = useState(0)

    return <div className="" style={{}}>
        <Card style={{ margin: '10px', width: '500px' }}>
            <h1>{props.fromCurrency} - {props.toCurrency} ({props.rate})</h1>
            <br />
            {props.fromCurrency}: <input className='laf' placeholder={props.fromCurrency} type="number" style={{ background: 'white' }}
                value={fromCurrency} onChange={e => {
                    setFromCurrency(e.target.value)
                    setToCurrency(e.target.value * props.rate)
                }} />
            <br />
            <br />
            {props.toCurrency}: <input className='laf' placeholder={props.toCurrency} type="number"
                value={toCurrency} onChange={e => {
                    setToCurrency(e.target.value)
                    setFromCurrency(e.target.value / props.rate)
                }} />
            <br />
            <br />

        </Card>
    </div>
}

