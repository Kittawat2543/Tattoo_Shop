import React, { useState, useEffect } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'

const FormProducts = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        loadData()
    }, [])

    const loadData = async () => {
        await axios.get('http://localhost:8001/api/products')
            .then((res) => {
                setData(res.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }
    // console.log(data);

    return (
        <>
            <div>
                <h1 className='text-center text-dark-bg-subtle my-5'>Tattoo Shop</h1>
            </div>
            <div className='container'>
                <div className="d-flex justify-content-end mb-3">
                    <Link to="/createtattoo">
                        <button type="button" className="btn btn-success">Crate New Tattoo</button>
                    </Link>
                </div>
                <div className='row'>
                    {
                        data && data.length > 0 ? data.map((items, index) =>
                            <div className='col-md-3 my-3' key={index} >
                                <div className="card" style={{ width: "18rem" }} >
                                    <img src={`http://localhost:8001/uploads/${items.file}`} width={"200px"} height={"200px"} className="card-img-top" alt={`data ${items._id}`} />
                                    <div className="card-body">
                                        <h5 className="card-title">{items.name}</h5>
                                        <h6 className="card-subtitle mb-2 text-body-secondary">{items.price} bath</h6>
                                        <p className="card-text">{items.detail}</p>
                                        <a href="#" className="btn btn-primary">More info</a>
                                    </div>
                                </div>
                            </div>
                        ) : null
                    }
                </div>
            </div>
        </>
    )
}

export default FormProducts