import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios";


import { createChart, ColorType } from 'lightweight-charts';
import React, { useRef } from 'react';

export const ChartComponent = props => {
    const {
        data,
        colors: {
            backgroundColor = 'white',
            lineColor = '#2962FF',
            textColor = 'black',
            areaTopColor = '#2962FF',
            areaBottomColor = 'rgba(41, 98, 255, 0.28)',
        } = {},
    } = props;

    const chartContainerRef = useRef();

    useEffect(
        () => {
            const handleResize = () => {
                chart.applyOptions({ width: chartContainerRef.current.clientWidth });
            };

            const chart = createChart(chartContainerRef.current, {
                layout: {
                    background: { type: ColorType.Solid, color: backgroundColor },
                    textColor,
                },
                width: chartContainerRef.current.clientWidth,
                height: 300,
            });
            chart.timeScale().fitContent();

            const newSeries = chart.addAreaSeries({ lineColor, topColor: areaTopColor, bottomColor: areaBottomColor });
            newSeries.setData(data);

            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);

                chart.remove();
            };
        },
        [data, backgroundColor, lineColor, textColor, areaTopColor, areaBottomColor]
    );

    return (
        <div
            ref={chartContainerRef}
        />
    );
};

export function ViewHistoricalChart() {

    const { symbol, timeRange } = useParams()
    const [historicalList, setHistoricalList] = useState([])

    function HistoricalList() {
        // timeRange
        axios.get('https://financialmodelingprep.com/api/v3/historical-chart/' + timeRange + '/' + symbol + '?apikey=728063db84382e434ffdf8a2fd017beb')
            .then(resp => {
                setHistoricalList(resp.data)
            })
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
