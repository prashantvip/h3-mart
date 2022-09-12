import React, { useEffect, useState } from 'react'

const CoinList = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);



    const fetchCoin = async () => {
        setLoading(true);
        try {
            const response = await fetch("https://api.coincap.io/v2/assets");
            const result = await response.json();
            setLoading(false);
            setData(result.data)
        }
        catch (error) {
            setLoading(false);
            console.log(error);
        }
    }

    useEffect(() => {
        fetchCoin()
    }, [])



    if (loading) {
        return (
            <section className='section'>
                <h3>Loading...</h3>
            </section>
        )
    }

    return (
        <section className='section'>
            <table>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Market Cap</th>
                        <th>VWAP(24hr)</th>
                        <th>Supply</th>
                        <th>Volume(24hr)</th>
                        <th>Change(24hr)</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => {

                        const { id, name, rank, marketCapUsd, vwap24Hr, maxSupply, volumeUsd24Hr, changePercent24Hr } = item;
                        return (
                            <tr key={id}>
                                <td>{rank}</td>
                                <td>{name}</td>
                                <td>{marketCapUsd}</td>
                                <td>{vwap24Hr}</td>
                                <td>{maxSupply}</td>
                                <td>{volumeUsd24Hr}</td>
                                <td>{changePercent24Hr}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

        </section>
    )
}

export default CoinList