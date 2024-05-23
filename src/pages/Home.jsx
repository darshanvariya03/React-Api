import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div align="center">
            <h2>Api Calling Project</h2>
            <Link to={'/axios'}>
                <button className='homebtn'>Axios Method</button>
            </Link>
            <Link to={'/fetch'}>
                <button className='homebtn'>Fetch Method</button>
            </Link>

        </div>
    )
}

export default Home