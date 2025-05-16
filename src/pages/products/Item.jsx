import React, { use } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';

const Item = () => {
    const { id } = useParams();
    const API = `https://fakestoreapi.com/products/${id}`
    const [item, setItem] = useState(null);

    const getItem = () => {
        axios.get(API)
            .then(res => {
                console.log(res.data);
                setItem(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        getItem();
    }, [])

    if (item === null) {
        return (
            <div className="col-12 overlay d-flex justify-content-center align-items-center">
                <span className="loader"></span>
            </div>
        )
    }

    return (
        <main className='bg-dark text-light'>
            <div className="container">
                <div className="row">
                    {
                        !item ? (
                            <div className="col-12 overlay d-flex justify-content-center align-items-center">
                                <span className="loader"></span>
                            </div>
                        ) : (
                            <div className="col-12">
                                <h1 className='text-center py-4 text-uppercase'>{item.title}</h1>
                                <div className="row g-5">
                                    <div className="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center align-items-center">
                                        <img src={item.image} alt={item.title} className='img-fluid' />
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12 d-flex flex-column justify-content-center align-items-start">
                                        <p>{item.description}</p>
                                        <p>${item.price}</p>
                                        <p>{item.category}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }

                </div>
            </div>
        </main>
    )
}

export default Item
