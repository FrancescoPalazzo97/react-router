import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Card from '../components/Card'

const API = 'https://fakestoreapi.com/products'

const Items = () => {

    const [items, setItems] = useState(null);

    useEffect(() => {
        axios.get(API)
            .then(res => {
                console.log(res.data);
                setItems(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    return (
        <main className='bg-dark text-light'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className='text-center py-4 text-uppercase'>Item List</h1>
                        <div className="row g-5">
                            {
                                items === null ? (
                                    <div className="col-12 overlay d-flex justify-content-center align-items-center">
                                        <span className="loader"></span>
                                    </div>
                                ) : (
                                    items.map((item) => (
                                        <Card item={item} key={`card-${item.id}`} />
                                    ))
                                )
                            }

                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Items
