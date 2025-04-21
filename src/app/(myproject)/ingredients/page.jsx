'use client'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'


export default function Ingredients() {

  const [Ingredients, setIngredients] = useState([])
  const [isLoading, setisLoading] = useState(false)

  async function getIngredients() {
    setisLoading(true)
    let { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
    setIngredients(data.meals)
    setisLoading(false)

  }


  useEffect(() => {
    getIngredients()
  }, [])

  return <>
    <div className={isLoading ? 'd-flex justify-content-center align-items-center container vh-100 mt-0' : 'container mt-5'}>
      {isLoading ? <div><i className='fas fa-spinner fa-spin text-warning fa-3x'></i></div> :
        <div className="row bg- text-center justify-content-center gy-4 my-5 py-5">
          {Ingredients.map((ingredient) =>
            <div className="col-md-3" key={ingredient.idIngredient}>
              <Link className='text-decoration-none ' href={`ingredientsmeals/${ingredient.strIngredient}`}>
                <div className='pointer  position-relative rounded-3'>
                  <div className="p-3 rounded-3 bg-body-tertiary">
                    <i class="fa-solid fa-utensils text-muted"></i>
                    <h5 className='text-dark mt-3'>{ingredient.strIngredient}</h5>
                    <p className='text-muted lead'>{(ingredient.strDescription)?.split('', 150).join('')}</p>

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
