import axios from 'axios'

export function symbolNewList(symbol, setNewsList) {
    axios.get('https://financialmodelingprep.com/api/v3/stock_news?tickers=' + symbol + '&limit=50&apikey=728063db84382e434ffdf8a2fd017beb')
        .then(function (resp) {
            setNewsList(resp.data)
        })
}
export function symbolHistoricalList(symbol, timeRange, setHistoricalList) {
    axios.get('https://financialmodelingprep.com/api/v3/historical-chart/' + timeRange + '/' + symbol + '?apikey=728063db84382e434ffdf8a2fd017beb')
        .then(resp => {
            setHistoricalList(resp.data)
        })
}
