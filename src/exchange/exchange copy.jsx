import { useEffect, useState } from "react"
import axios from 'axios'
export function Exchange() {
    const [usd, setUsd] = useState(0)
    const [azn, setAzn] = useState(0)
    const [cad, setCad] = useState(0)
    
    // rates for usd
    const rates = {
        azn: 1.7,
        usd: 1,
        cad: 1.2
    }

    return <div className="" style={{}}>
        <br />
        <input className='laf' placeholder="USD" type="number" style={{ background: 'white' }}
            value={usd} onChange={e => {
                setUsd(e.target.value)
                setAzn(e.target.value * rates.azn)
                setCad(e.target.value * rates.cad)
            }} />
        <br />
        <br />
        <input className='laf' placeholder="AZN" type="number"
            value={azn} onChange={e => {
                setAzn(e.target.value) // 100 => 100
                setUsd(e.target.value / rates.azn) // 170
                setCad(e.target.value / rates.azn * rates.cad)
            }} />
        <br />
        <br />
        <input className='laf' placeholder="CAD" type="number"
            value={cad} onChange={e => {
                setCad(e.target.value)
                setAzn(e.target.value / rates.cad * rates.azn)
                setUsd(e.target.value / rates.cad)
            }} />
    </div>
}