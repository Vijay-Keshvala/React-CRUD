import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const Read = () => {
  const [data, setData] = useState([]);
  const {id} = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:3000/quotes/${id}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Quotes</h1>
      
      <div className="w-full max-w-6xl overflow-x-auto bg-white shadow-md rounded-lg p-4">
        

        <table className="w-full border-collapse table-auto">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="px-4 py-2 text-left">ID</th>
              <th className="px-4 py-2 text-left">Quote</th>
              <th className="px-4 py-2 text-left">Author</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
              <tr className="border-b hover:bg-gray-100">
                <td className="px-4 py-2">{data.id}</td>
                <td className="px-4 py-2">{data.quote}</td>
                <td className="px-4 py-2">{data.author}</td>
                <td className="px-4 py-2">
                  <div className="flex gap-2">
                    <Link to={`/update/${id}`} className="text-decoration-none bg-green-500 text-white px-3 py-1 rounded hover:bg-green-700 transition">
                      Edit
                    </Link>
                    <Link to="/" className="text-decoration-none bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700 transition">
                      Back
                    </Link>
                  </div>
                </td>
              </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Read
