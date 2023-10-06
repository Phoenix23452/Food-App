import React, { useEffect, useRef, useState } from 'react'
import '../App.css';
import { useCart, useDispatchCart } from './ContextReducers';


export default function Card(props) {
    let data = useCart()
    const priceRef = useRef()
    let foodItem = props.foodItem
    let dispatch = useDispatchCart()
    const [qty, setQty] = useState(1)
    const [size, setSize] = useState("")


    let options = props.option
    let priceOption = Object.keys(options)

    const handleAddToCart = async () => {
        let food = []
        for (const item of data) {
          if (item.id === foodItem._id) {
            food = item;
    
            break;
          }
        }
        console.log(food)
        console.log(new Date())
        if (food !== []) {
          if (food.size === size) {
            await dispatch({ type: "UPDATE", id: foodItem._id, price: finalprice, qty: qty })
            return
          }
          else if (food.size !== size) {
            await dispatch({ type: "ADD", id: foodItem._id, name: foodItem.name, price: finalprice, qty: qty, size: size,img: foodItem.img })
            console.log("Size different so simply ADD one more to the list")
            return
          }
          return
        }
    
        await dispatch({ type: "ADD", id: foodItem._id, name: foodItem.name, price: finalprice, qty: qty, size: size })
    
    
        
    
      }
    let finalprice = qty * parseInt(options[size])
    useEffect(() => {
        setSize(priceRef.current.value)
    },[])
    return (
        <div>
            <div
                className="block rounded-lg max-w-sm w-[268px] bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <div
                    className="relative overflow-hidden bg-cover bg-no-repeat"
                    data-te-ripple-init
                    data-te-ripple-color="light">
                    <img
                        className="rounded-t-lg w-[268px] h-[180px]"
                        src={props.foodItem.img}
                        alt="" />
                    {/* <a href="#!">
      <div
        className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
    </a> */}
                </div>
                <div className="p-6">
                    <h5
                        className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                        {props.foodItem.name}
                    </h5>
                    <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                        {/* Some quick example text to build on the card title and make up the
                        bulk of the card's content. */}
                        {foodItem.description}
                    </p>

                </div>

                <div className="mx-auto max-w-screen-lg w-full justify-center justify-items-center p-2 flex">
                    <select className="block  m-2 h-full flex-wrapse bg-pink-100 rounded" onChange={(e) => setQty(e.target.value)}>
                        {Array.from({ length: 6 }, (e, i) => {
                            return (
                                <option key={i + 1} value={i + 1}> {i + 1}</option>
                            )
                        })}
                    </select>
                    <select className="block  m-2 h-full flex-wrap bg-pink-100 rounded" ref={priceRef} onChange={(e) => setSize(e.target.value)}>
                        {
                            priceOption.map((data) => {
                                return (
                                    <option key={data} value={data}>{data}</option>
                                )
                            }
                            )
                        }
                    </select>
                    <div className="h-full text-2xl font-bold">${finalprice}/-</div>
                </div>
                <hr />
                <div className='p-3 ml-2'>
                    <button
                        type="button"
                        onClick={handleAddToCart}
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        class="inline-block rounded bg-blue-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-pink-300 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-pink-300 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-pink-600 active:duration-300 active:ease-out active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                        Add to Cart
                    </button>
                </div>
            </div>



        </div>
    )
}
