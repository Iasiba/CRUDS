import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'
import UseData from './Hook/UseData.js'
import { useForm } from 'react-hook-form'
import Form from './components/Form.jsx'
function App() {
  const [Data, setData] = useState()
  const [ID, setID] = useState('')
  const [ShowForm, setShowForm] = useState(false)
  const [DataUp, setDataUp] = useState()
  const URL = `https://users-crud1.herokuapp.com/users/`// `https://cars-crud.herokuapp.com/cars/`
  //const { Data } = UseData(URL)
  //console.log(Data)
  const New = {
    name: 'xxx',
    genre: '😎😎',
    duration: '2H',
    release_date: '1800-10-10'
  }
  const getallcars = () => {
    axios.get(URL)
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }
  useEffect(() => {
    getallcars()
  }, [])
  useEffect(() => {
    if (ID == '') {
      setShowForm(false)
    } else {
      setShowForm(true)
    }
    console.log(ShowForm)
    console.log(ID)
  }, [ID])

  const createNewCard = (New) => {
    /*
    const New={
      name:'xxx',
      genre:'😎😎',
      duration:'2H',
      release_date:'1800-10-10'
    }
    */
    /*
    const New = {
      brand: 'tesla',
      model: 'patito',
      color: 'red',
      year: 2021,
      price: 30000
    }*/
    axios.post(URL, New)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
      .finally(() => getallcars())
  }
  const DeletebyID = (id) => {
    //axios.delete(`https://cars-crud.herokuapp.com/cars/${id}/`)
    axios.delete(`${URL}${id}/`)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
      .finally(() => getallcars())
  }
  const updatebyID = (id, New) => {
    /*
    const NewCar = {
      brand: 'tesla',
      model: 'patito',
      color: 'red',
      year: 2021,
      price: 30000
    }
    axios.put(`https://cars-crud.herokuapp.com/cars/${id}/`, NewCar)*/
    axios.put(`${URL}${id}/`, New)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
      .finally(() => getallcars())
  }
  const updatePartialbyID = (id, New) => {
    //axios.patch(`https://cars-crud.herokuapp.com/cars/${id}/`, { year: 1995 })
    axios.patch(`${URL}${id}/`, New)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
      .then(getallcars)
  }
console.log(Data)
  return (
    <div className="App">
      <div className='Form'>
        <button onClick={() => setShowForm(true)}><i className='bx bxs-user-plus'></i></button>
        {
          ShowForm && <Form
            createNewCard={createNewCard}
            ID={ID}
            setID={setID}
            ShowForm={ShowForm}
            setShowForm={setShowForm}
            updatebyID={updatebyID}
            DataUp={DataUp}
          />
        }
      </div>
      <div className='Cards'>
        {
          Data?.map(data =>
            <Card
              data={data}
              Delete={DeletebyID}
              setID={setID}
              setDataUp={setDataUp}
              key={data.id}
              className='x'
            />)
        }
      </div>
      {/*<button onClick={() => createNewCard(New)}>create</button>*/}
    </div>
  )
}

export default App
