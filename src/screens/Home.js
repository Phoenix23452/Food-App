import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Carousel from '../components/Carousel'

export default function Home() {



    const [foodCat, setFoodCat] = useState([])
    const [foodItem, setFoodItem] = useState([])
    const [searchQuery, setSearchQuery] = useState("");

    let loadData = async () => {
        let response = await fetch('http://localhost:5000/api/food_items', {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })

        response = await response.json()
        setFoodItem(response[0])
        setFoodCat(response[1])
    }
    useEffect(() => {
        loadData()
    })

    return (
        <div>
            <div>
                <NavBar />
            </div>

            <div>
                <Carousel searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            </div>

            <div className='block' >
                {
                    foodCat != []
                    ? foodCat.map((data) => {
                            return (<div>
                                <div key={data._id} className="text-3xl m-3">
                                    {data.CategoryName}
                                </div>
                                <hr />
                                <div className='grid grid-cols-4 gap-6'>
                                    {foodItem != []
                                        ?
                                        foodItem.filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(searchQuery.toLowerCase().trim())))
                                            .map(filterItem => {
                                                return (

                                                    <div className='m-4' key={filterItem._id}>
                                                        <Card
                                                            foodItem={filterItem}
                                                            option={filterItem.option[0]}
                                                        />
                                                    </div>

                                                )

                                            }) : <div>No such item found</div>
                                    }
                                </div>
                            </div>
                            )
                        })
                        : ""
                }

            </div>

            <div>
                <Footer />
            </div>
        </div>
    )
}
