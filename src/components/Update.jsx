import React, { useEffect, useState } from 'react'
import axios from 'axios';

import { useNavigate, useParams } from 'react-router-dom';

const Update = () => {
  const [values,setValues] = useState({
    quote:'',
    author:''
  })

  const navigate = useNavigate()
  const {id} = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:3000/quotes/${id}`)
      .then((res) => {
        setValues(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleUpdate = (event)=>{
    event.preventDefault()
    axios
    .put(`http://localhost:3000/quotes/${id}`,values)
    .then((res) => navigate('/'))
    .catch((err) => console.log(err));
  }

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 shadow">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
          Add Quote
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleUpdate} className="space-y-6">
          <div>
            <label
              htmlFor="quote"
              className="block text-sm font-medium text-gray-900 text-left"
            >
              Quote
            </label>
            <div className="mt-2">
              <textarea
                id="quote"
                name="quote"
                required
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                value={values.quote} 
                onChange={e=> setValues({...values,quote:e.target.value})}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="author"
              className="block text-sm font-medium text-gray-900 text-left"
            >
              Author
            </label>
            <div className="mt-2">
              <input
                id="author"
                name="author"
                type="text"
                required
                autoComplete="current-password"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                onChange={e=> setValues({...values,author:e.target.value})}
                value={values.author}
             
             />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              naviagte={'/'}
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Update
