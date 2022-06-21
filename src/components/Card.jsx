import React from 'react'

const Card = ({ data, Delete, setID, setDataUp }) => {

  return (
    <div className='card'>
      <div className='userinfo'>
       <h2>{data.first_name}</h2>
        <ul>
          <li>{data.email}</li>
          <li><i className='bx bxs-cake'></i>{"  "+data.birthday}</li>
        </ul>
      </div>

      <div className='buttons'>
        <button onClick={() => Delete(data.id)}><i className='bx bxs-trash'></i></button>
        <button onClick={() => { setID(data.id); setDataUp(data) }}><i className='bx bx-pencil' ></i></button>
      </div>
    </div>
  )
}

export default Card