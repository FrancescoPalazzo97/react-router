import React, { use } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Item = () => {
    let { id } = useParams();
    id = parseInt(id);
    const API = `https://fakestoreapi.com/products`
    const [items, setItems] = useState(null);
    const [item, setItem] = useState(null);

    let maxLength = null;

    const getItems = () => {
        axios.get(API)
            .then(res => {
                console.log(res.data);
                setItems(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        getItems();
    }, [id])

    useEffect(() => {
        if (items.length) {
            const itemFound = items.find((item) => item.id === id);
            setItem(itemFound);
            maxLength = items.length;
        }
    }, [items])

    const navigate = useNavigate();

    const handleBack = () => {
        navigate(`/items/${id - 1}`);
    }

    const handleForward = () => {
        navigate(`/items/${id + 1}`);
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
                                <div className="row mt-5">
                                    <div className="col-12">
                                        <div className="d-flex justify-content-between">
                                            <button className='btn btn-primary' onClick={handleBack} disabled={id === 1}>Precedente</button>
                                            <button className='btn btn-primary' onClick={handleForward} disabled={id === maxLength}>Successivo</button>
                                        </div>
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
