/**
 * Home page component
 */

import './Home.css'
import getData from '../../service/data.service'
import { Pagination } from '@mui/material'
import { Suspense, useEffect, useState } from 'react'
import BeerComponent from '../../components/beersGridComponent/beersGridComponent'
import LoadingComponent from '../../components/loadingComponent/loadingComponent'

export default function Home() {
    const [page, setPage] = useState(1)
    const [beers, setBeers] = useState([])

    // fetch new part of data based on current page number
    const onPageChange = (e, pageNum) => {
        setPage(pageNum)
        getData(pageNum).then((data) => setBeers(data))
    }

    // fetch first part of data - default page num = 1
    useEffect (() => {
        getData(page).then((data) => setBeers(data))
    })

    return (
        <Suspense fallback={<LoadingComponent />}>
        <div className="Home">
            <h1 className="AppTitle">Beers</h1>
            <div className="container">
                { beers.map((beer) => (
                    <BeerComponent key={beer.id} beer={beer} />
                    ))
                }
            </div>
            <Pagination
                count={28}
                variant='outlined'
                siblingCount={1}
                size={"large"}
                onChange={onPageChange}
            />
        </div>
        </Suspense>
      )

}