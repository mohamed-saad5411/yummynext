'use client'

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'

export default function catdetails() {
    const [allCategoriesTypes, setallCategoriesTypes] = useState([])
    const [isLoading, setisLoading] = useState(false)
    let params = useParams()

    async function getSpecialMeal(type) {
        setisLoading(true)
        let data = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${type}`)
        setallCategoriesTypes(data.data.meals)
        setisLoading(false)
        // console.log(data.data.meals);
    }

    useEffect(() => {
        getSpecialMeal(params.type)
    }, [])

    return <>
        <div className={isLoading ? 'd-flex justify-content-center align-items-center container vh-100 mt-0' : 'container mt-5'}>
            {isLoading ? <div><i className='fas fa-spinner fa-spin text-warning fa-3x'></i></div> :
                <>
                    <h2 className='mt-5 pt-5 text-dark text-center h1'>{params.type} Food</h2>
                    <div className="row justify-content-center gy-4 mb-5 pb-5">
                        {allCategoriesTypes.map((category) =>
                            <div className="col-md-3" key={category.idMeal}>
                                <Link href={`/mealdetails/${category.idMeal}`}>
                                    <div className='pointer meals position-relative rounded-3'>
                                        <img src={category.strMealThumb} className='position-relative rounded-3 w-100' alt="" />
                                        <div className="layer rounded-3">
                                            <div>
                                                <h5>{category.strMeal}</h5>
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