import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Items = () => {

    const [items, setItems] = useState([]);

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
                        <div className="row row-cols-lg-4 row-cols-md-2 row-cols-sm-1 g-5">
                            {items.map((item) => (
                                <div className="col d-flex align-items-stretch" key={item.id}>
                                    <div className="card border-0">
                                        <img src={item.image} className="card-img-top h-50" alt={item.title} />
                                        <div className="card-body d-flex flex-column justify-content-between ">
                                            <h5 className="card-title ">{item.title}</h5>
                                            <p className="card-text text-truncate">{item.description}</p>
                                            <p className="card-text ">${item.price}</p>
                                            <p className="card-text ">{item.category}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Items
