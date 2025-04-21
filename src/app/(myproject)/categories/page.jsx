'use client'

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'



export default function Categories() {

  const [allCategories, setallCategories] = useState([])
  const [isLoading, setisLoading] = useState(false)

  async function getAllCategories() {
    setisLoading(true)
    let data = await axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    setallCategories(data?.data?.categories)
    setisLoading(false)
    // console.log(data?.data?.categories);

  }

  useEffect(() => {
    getAllCategories()
  }, [])


  return <>
    <div className={isLoading ? 'd-flex justify-content-center align-items-center container vh-100 mt-0' : 'container mt-5'}>
      {isLoading ? <div><i className='fas fa-spinner fa-spin text-warning fa-3x'></i></div> :
        <div className="row justify-content-center gy-4 my-5 py-5">
          {allCategories.map((category) =>
            <div className="col-md-4" key={category.idCategory}>
              <Link href={`/categorydetails/${category.strCategory}`}>
                <div className='pointer meals position-relative rounded-3'>
                  <img src={category.strCategoryThumb} className='position-relative rounded-3 w-100' alt="" />
                  <div className="layer rounded-3">
                    <div>
                      <h5>Category : {category.strCategory}</h5>
                    </div>
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
