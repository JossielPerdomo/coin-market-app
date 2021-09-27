import React from 'react'

export const CoinRow = ({coin, index}) => {

    let price_percent = coin.price_change_percentage_24h;

    return (
        <tr>
            <td>{index}</td>
            <td>
                <img 
                    src={coin.image} alt={coin.name} style={{width:'15px'}} className="me-2"
                />
                <span>{coin.name}</span>
                <span className="ms-3 text-muted text-uppercase">
                    {coin.symbol}
                </span>
            </td>
            <td>${coin.current_price}</td>
            <td className={(price_percent > 0) ? "text-success" : "text-danger"}>
                {price_percent.toFixed(2)}%
            </td>
            <td>{coin.total_volume}</td>
        </tr>
    )
}
