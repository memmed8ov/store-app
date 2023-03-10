import { ExchangeSimpleWidget } from "../../components/exchange/exsimwid"
import { useNavigate, useParams } from 'react-router-dom'

export function ExchangeItem() {

    const { fromCurrency, toCurrency, rate } = useParams()

    return <>
        <ExchangeSimpleWidget fromCurrency={fromCurrency} toCurrency={toCurrency} rate={rate}></ExchangeSimpleWidget>
    </>
}