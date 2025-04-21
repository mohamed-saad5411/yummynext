'use client'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function Area() {

  const [Allarea, setAllarea] = useState([])
  const [isLoading, setisLoading] = useState(false)

  async function getAllArea() {
    setisLoading(true)
    let {data}  = await axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
    setAllarea(data?.meals)
    setisLoading(false)
    // console.log(data?.data?.meals);

  }

  useEffect(() => {
    getAllArea()
  }, [])
  ///mealdetails/${meal.idMeal}
  return <>
    <div className={isLoading ? 'd-flex justify-content-center align-items-center container vh-100 mt-0' : 'container mt-5'}>
      {isLoading ? <div><i className='fas fa-spinner fa-spin text-warning fa-3x'></i></div> :
        <div className="row bg- text-center justify-content-center gy-4 my-5 py-5">
          {Allarea.map((region) =>
            <div className="col-md-3">
              <Link className='text-decoration-none' href={`areameals/${region.strArea}`}>
                <div className='pointer  position-relative rounded-3'>
                  <div className="p-3 rounded-circle bg-body-tertiary">
                      <i className="fa-solid fa-house text-muted"></i>
                      <h5 className='text-dark mt-3'>{region.strArea}</h5>
                    
                  </div>
                </div>
              </Link>
            </div>

          )}
        </div>
      }
    </div>

  </>
}
