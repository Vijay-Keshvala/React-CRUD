import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const [data, setData] = useState([]);

  const navigate = useNavigate()
  useEffect(() => {
    axios
      .get('http://localhost:3000/quotes')
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) =>{
    const confirm = window.confirm("Are you sure")
    if(confirm){
      axios.delete(`http://localhost:3000/quotes/${id}`)
      .then((res)=> location.reload())
      .catch((err)=>console.log(err))
    }
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">List of Quotes</h1>
      
      <div className="w-full max-w-6xl overflow-x-auto bg-white shadow-md rounded-lg p-4">
        <div className="flex justify-end mb-4">
          <Link
            to="/create"
            className="text-decoration-none bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
          >
            Add +
          </Link>
        </div>

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
            {data.map((item, index) => (
              <tr key={index} className="border-b hover:bg-gray-100">
                <td className="px-4 py-2">{item.id}</td>
                <td className="px-4 py-2">{item.quote}</td>
                <td className="px-4 py-2">{item.author}</td>
                <td className="px-4 py-2">
                  <div className="flex gap-2">
                  <Link to={`/read/${item.id}`} className="text-decoration-none bg-yellow-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition">
                      View
                    </Link>
                    <Link to={`update/${item.id}`} className="text-decoration-none bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition">
                      Edit
                    </Link>
                    <button onClick={e=> handleDelete(item.id)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
