'use client'

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'




export default function home() {

  const [allFoods, setallFoods] = useState([])
  const [isLoading, setisLoading] = useState(false)

  async function getAllFoods() {
    setisLoading(true)
    let { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
    setallFoods(data?.meals)
    setisLoading(false)
    // console.log(allFoods);

  }
  useEffect(() => {
    getAllFoods()
  }, [])

  return <>
    <div className={ isLoading? 'd-flex justify-content-center align-items-center container vh-100 mt-0' : 'container mt-5'}>
      {isLoading ? <div><i className='fas fa-spinner fa-spin text-warning fa-3x'></i></div> :
        <div className="row justify-content-center gy-4 my-5 py-5">
          {allFoods.map((meal) =>
            <div className="col-md-3" key={meal.idMeal}>
              <Link href={`/mealdetails/${meal.idMeal}`}>
                <div className='pointer meals position-relative rounded-3'>
                  <img src={meal.strMealThumb} className='position-relative rounded-3 w-100' alt="" />
                  <div className="layer rounded-3">
                    <div>
                      <h5>Title : {meal.strMeal}</h5>
                      <h5>Category : {meal.strCategory}</h5>
                      <h5>Area : {meal.strArea}</h5>
                    </div>
                  </div>
                  {/* <p>{meal.strInstructions}</p> */}
                </div>
              </Link>
            </div>

          )}
        </div>
      }
    </div>

  </>
}
