import React from 'react'
import { CoinRow } from './CoinRow'

export const TableCoins = ({coins, search}) => {

    const filteredCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <table className="table table-dark table-hover">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Coin</th>
                    <th>Price $US</th>
                    <th>Price Change</th>
                    <th>24h Volume</th>
                </tr>
            </thead>
            <tbody>
                    {filteredCoins.map((coin, index) => (
                        <CoinRow key={coin.id} coin={coin} index={index+1}/>
                    ))}
            </tbody>
        </table>
    )
}
