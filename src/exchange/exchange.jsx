import { ExchangeSimpleWidget } from "./exsimwid"
import { Card } from '@mui/material'

export function Exchange() {
    return <div className="" style={{}}>
        <Card style={{ margin: '10px', width: '500px'}}>
            From currency: <input type="text" style={{color: 'white'}} />
            <br />
            <br />
            To Currency: <input type="text" style={{color: 'white'}} />
            <br />
            <br />
            Rate: <input type="text"  style={{color: 'white'}}/>
            <br />
            <br />
            <button style={{ width: "70px", height: "30px", textAlign: 'center', color: 'grey' }}>Apply</button>
        </Card>

        <br />
        <br />
        <br />

        <ExchangeSimpleWidget fromCurrency='AZN' toCurrency='USD' rate={1.7}></ExchangeSimpleWidget>
    </div >
}
