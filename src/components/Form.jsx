import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

const Form = ({ createNewCard, ID, setID, ShowForm, setShowForm, updatebyID, DataUp }) => {
  const { handleSubmit, register, reset } = useForm()
  const defaultValuesForm = {
    birthday: "1001-11-10",
    email: "a@algo.com",
    first_name: "a",
    last_name: "a",
    password: "asds"
  }
  const submit = (data) => {
    if (ID == '') {
      createNewCard(data)
    } else {
      updatebyID(ID, data)
      setID('')
    }

    setShowForm(false)
  }
  useEffect(() => { 
    if (ShowForm) { 
      reset(DataUp) 
    } else { 
      reset(defaultValuesForm) 
    }}, [setShowForm])
  /*
  useEffect(() => {
    const URL = `https://movies-crud-academlo.herokuapp.com/movies/${ID}`
    axios.get(URL)
      .then(res =>console.log(res))
      .catch(err => console.log(err))
    reset()
  }, [ID])
  */
  return (
    <form onSubmit={handleSubmit(submit)}>
      <div className='name'>
        <label htmlFor="name"><i className='bx bxs-user'></i></label>
        <input type="text" id='name' placeholder='        name' {...register('first_name')} />
        <input type="text" id='last_name' placeholder='     last name' {...register('last_name')} />
      </div>
      <div>
        <label htmlFor="email"><i className='bx bxs-envelope'></i></label>
        <input type="text" id='email' placeholder='          example@gmail.com'{...register('email')} />
      </div>
      <div>
        <label htmlFor="password"><i className='bx bxs-lock-alt'></i></label>
        <input type="text" id='password' placeholder='                  *************' {...register('password')} />
      </div>
      <div>
        <label htmlFor="date"><i className='bx bxs-cake'></i></label>
        <input type="date" id='date' {...register('birthday')} />
      </div>
      <button>Submit</button>
    </form>
  )
}

export default Form