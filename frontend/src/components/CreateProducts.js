import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const CreateProducts = () => {
    const [form, setForm] = useState({})
    const navi = useNavigate()

    const handleChange = (e) => {

        if (e.target.name === 'file') {
            setForm({
                ...form,
                [e.target.name]: e.target.files[0]
            })
        } else {
            setForm({
                ...form,
                [e.target.name]: e.target.value
            })
        }
        }

        


    const handleSubmit = async (e) => {
        e.preventDefault()

        const formWithImageData = new FormData()
        for (const key in form) {
            formWithImageData.append(key,form[key])
        }
        await axios.post('http://localhost:8001/api/products', formWithImageData)
            .then((res) => {
                console.log(res);
                navi("/")
            })
            .catch((error) => {
                console.log(error);
            })
    }
 


    return (
        <>
            <h1 className='text-center text-dark-bg-subtle my-5'>Add New Tattoo</h1>
            <div className='container my-5'>
                <div className="row" >
                    <div className='col'>
                        <Link to="/">
                            <button type="button" className="btn btn-danger">Back</button>
                        </Link>
                    </div>
                    <div className='col-6'>
                        Create New Tattoo
                        <form onSubmit={handleSubmit} encType='multipart/form-data'>
                            <input className="form-control my-2"
                                name='name'
                                onChange={e => handleChange(e)}
                                type="text"
                                placeholder="Name"
                                required/>

                            <input className="form-control my-2"
                                name='detail'
                                onChange={e => handleChange(e)}
                                type="text"
                                placeholder="Detail"
                                required/>

                            <input className="form-control my-2"
                                name='price'
                                onChange={e => handleChange(e)}
                                type="text"
                                placeholder="Price"
                                required/>

                            <input className="form-control my-2"
                                name="file"
                                onChange={e => handleChange(e)}
                                type="file"
                                required/>

                            <button type="submit" className="btn btn-success my-3">Submit</button>
                        </form>
                    </div>
                    <div className='col'>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateProducts