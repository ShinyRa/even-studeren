import { useContext } from 'react'
import { Link } from "react-router-dom"
import { HeaderContext } from './HeaderContextProvider'

import './header.scss'

const Header = () => {
    const headerContext = useContext(HeaderContext)

    return (
        <nav className="navbar is-transparent is-fixed-top" role="navigation" aria-label="main navigation">
            <div className="navbar-back">
                <Link onClick={(e) => {
                    e.preventDefault();
                    navigate(-1);
                }}>
                    <button className="button">{"<"}</button>
                </Link>
            </div>
            <div className="navbar-menu">
                <div className="navbar-item title">
                    <h2>
                        {headerContext.data.title}
                    </h2>
                    <h3>
                        {headerContext.data.subtitle}
                    </h3>
                </div>
            </div>
        </nav>
    )
}

export default Header