import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Card from '../components/Card'

const Items = () => {

    const [items, setItems] = useState(null);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
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
                                    <div className="col-12">
                                        <span class="loader"></span>
                                    </div>
                                ) : (
                                    items.map((item) => (
                                        <Card item={item} />
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
