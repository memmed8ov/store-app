import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { ChartComponent } from "../../components/chart/chart";
import { symbolHistoricalList } from "../../service/symbol-dashboard";

export function ViewHistoricalChart() {

    const { symbol, timeRange } = useParams()
    const [historicalList, setHistoricalList] = useState([])

    function HistoricalList() {
        // timeRange
        symbolHistoricalList(symbol,timeRange,setHistoricalList)
    }
    useEffect(() => {
        HistoricalList()
    }, [])

    const initialData = historicalList.map(item => {
        return { time: new Date(item.date).getTime(), value: item.close }
    })

    initialData.sort(function (a, b) { return a.time - b.time })

    console.log(initialData)
    return <>
        <ChartComponent data={initialData}></ChartComponent>
    </>
}
