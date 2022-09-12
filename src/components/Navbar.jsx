import React from 'react'

const Navbar = () => {
    return (
        <section className="section">
            <nav className='navbar'>
                <ul className="links">
                    <li>Coins</li>
                    <li>Exchanges</li>
                    <li>Swap</li>
                </ul>
                <img src="https://coincap.io/static/logos/black.svg" alt="coincap" />
                <button type="submit" className='btn'>Connect Wallet</button>
            </nav>
        </section>
    )
}

export default Navbar