import { useEffect, useState } from 'react';
import './App.css';
import { TableCoins } from './components/TableCoins';

function App() {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  const getData = async () => {

    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1';

    fetch(url)
    .then(resp => resp.json())
    .then(data => setCoins(data));


  }

  useEffect(() => {
    
    getData();

  }, [])

  return (
    <div className="container mt-3">
      <h1>Coin Market <span>
        <i className="fab fa-bitcoin"></i>
        </span>
      </h1>

      <input type="text" placeholder="Search a coin" 
        className="form-control bg-dark text-light border-0 mt-4 mb-4 text-center" onChange={e => setSearch(e.target.value)}
      />
      <TableCoins coins={coins} search={search}/>
    </div>
  );
}

export default App;
