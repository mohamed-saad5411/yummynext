'use client'

import axios from 'axios'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function mealdetails() {
    const [specialMeal, setspecialMeal] = useState([])
    const [isLoading, setisLoading] = useState(false)
    let params = useParams()


    async function getSpecialMeal(id) {
        setisLoading(true)
        let data = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        setspecialMeal(data.data.meals[0])
        setisLoading(false)
        // console.log(id);

    }



    useEffect(() => {
        getSpecialMeal(params.id)
    }, [])

    return <>
        <div className={ isLoading? 'd-flex justify-content-center align-items-center container vh-100 mt-0' : 'container my-5'}>
            {isLoading ? <div><i className='fas fa-spinner fa-spin text-warning fa-3x'></i></div> :
                <div className="row py-5">
                    <div className="col-md-3" key={specialMeal.idMeal}>
                        <div>
                            <img className='w-100 rounded-3' src={specialMeal.strMealThumb} alt="" />
                            <h1 className='text-center mt-3'>{specialMeal.strMeal}</h1>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div>
                            <p className='h3'>Instructions</p>
                            <p className='lead my-3'>{specialMeal.strInstructions}</p>
                            <h5>Area : {specialMeal.strArea}</h5>
                            <h5>Title : {specialMeal.strMeal}</h5>
                            <h5>Category : {specialMeal.strCategory}</h5>
                            <h5>Tages  : <a href={specialMeal.strYoutube} className='text-decoration-none text-dark fw-bolder' target='_blank'><button className='btn px-5 btn-outline-danger'>Youtube</button></a></h5>
                        </div>
                    </div>
                </div>
            }

        </div>
    </>

}
