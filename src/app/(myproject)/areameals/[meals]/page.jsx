'use client'
import axios from 'axios'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'


export default function areameals() {

    const [areaMeals, setareaMeals] = useState([])
    const [isLoading, setisLoading] = useState(false)
    let param = useParams()
    // console.log(param);

    async function getareaMeals(area) {
        setisLoading(true)
        let { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
        setareaMeals(data?.meals)
        setisLoading(false)
    }

    useEffect(() => {
        getareaMeals(param.meals)
    }, [])

    return <>
        <div className={isLoading ? 'd-flex justify-content-center align-items-center container vh-100 mt-0' : 'container mt-5'}>

            {isLoading ? <div><i className='fas fa-spinner fa-spin text-warning fa-3x'></i></div> :
            <>
                <h2 className='mt-5 pt-5 text-dark text-center h1'>{param.meals} Food</h2>
                <div className="row justify-content-center gy-4 mb-5 pb-5">
                    {areaMeals.map((meals) =>
                        <div className="col-md-3" key={meals.idMeal}>
                            <Link href={`/mealdetails/${meals.idMeal}`}>
                                <div className='pointer meals position-relative rounded-3'>
                                    <img src={meals.strMealThumb} className='position-relative rounded-3 w-100' alt="" />
                                    <div className="layer rounded-3">
                                        <div>
                                            <h5>{meals.strMeal}</h5>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>

                    )}
                </div>
            </>
            }
        </div>

    </>
}