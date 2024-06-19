import React  ,{useState,useEffect}from 'react'
import './App.css';
import Search from './components/Search.jsx';
import AllList from './components/AllList.jsx';
import axios from 'axios';
import OneJob from './components/OneJob.jsx';
import Create from './components/Create.jsx';
import Update from './components/Update.jsx';

function App() {

  const [view, setView] = useState("allJobs")
  const [data, setData] = useState([])
  const [refetsch, setRefetsch] = useState(false)
  const [job,setJob]=useState({})

  const fetchData = () => {
    axios.get('http://127.0.0.1:5000/api/jobs').then((response) => {
      console.log(response.data)
      setData(response.data)
    }).catch((error) => {
      console.log(error)
    })
  } 
  const postData = (body) => {
    axios.post('http://127.0.0.1:5000/api/jobs', body).then((response) => {
      console.log(response.data)
      setRefetsch(!refetsch)
      alert("Job add with success")
      setView("allJobs")
    }).catch((error) => {
      console.log(error)
    })
  }

  const updateData = (body, id) => {
    axios.put(`http://127.0.0.1:5000/api/jobs/${id}`, body).then((response) => {
      console.log(response.data)
      setRefetsch(!refetsch)
      alert("Jobs updated with succsses")
      setView("allJobs")
    }).catch((error) => {
      console.log(error)
    })
  }

  const deleteData = (id) => {
    axios.delete(`http://127.0.0.1:5000/api/jobs/${id}`).then((response) => {
      console.log(response.data)
      setRefetsch(!refetsch)
      alert("Jobs deleted with succsses")
    }).catch((error) => {
      console.log(error)
    })
  }

  const searchByName = (name) => {
    axios.get(`http://127.0.0.1:5000/api/jobs/name/${name}`).then((response) => {
      console.log(response.data)
      setData(response.data)
    }).catch((error) => {
      console.log(error)
    })
  }

  const searchByCategory = (category) => {
    axios.get(`http://127.0.0.1:5000/api/jobs/category/${category}`).then((response) => {
      console.log(response.data)
      setData(response.data)
    }).catch((error) => {
      console.log(error)
    })
  }

  const searchByCity = (city) => {
    axios.get(`http://127.0.0.1:5000/api/jobs/city/${city}`).then((response) => {
      console.log(response.data)
      setData(response.data)
    }).catch((error) => {
      console.log(error)
    })
  }

  useEffect(() => {
    fetchData()
  }, [refetsch])


  const changeView = (option,job) => {
    setView(option)
    setJob(job)
  }

  const renderView = () => {
    if (view === "allJobs") {
      return <AllList jobs={data} change={changeView} delete={deleteData}/>
    }
    if (view === "createJob") {
      return <Create add={postData}/>
    }
    if (view === "oneJob") {
      return <OneJob job={job}/>
    }
    if (view === "updateJob") {
      return <Update job={job} updateP={updateData}/>
    }
  }

  return (
    <div>
       <div className="nav">
        <span className="logo" onClick={() => { changeView("allJobs") }}>
         Search Job
        </span>
        <span className="items" onClick={() => { changeView("createJob") }} >
          Create
        </span>
        <span className="items">
          <div className="dropdown">
             Job By Occupation
            <div className="dropdown-content">
              <p onClick={() => { fetchData() }}>All</p>
              <p onClick={() => { searchByCategory('It') }}>It</p>
              <p onClick={() => { searchByCategory('management') }}>Manegment</p>
              <p onClick={() => { searchByCategory('call center') }}>Call center</p>
            </div>
          </div>
        </span>
        <span className="items">
          <div className="dropdown">
            Job By City
            <div className="dropdown-content">
              <p onClick={() => { searchByCity('Sousse') }}>Sousse</p>
              <p onClick={()=>{searchByCity('Tunis')}}>Tunis</p>
              <p onClick={()=>{searchByCity('Sfax')}}>Sfax</p>
            </div>
          </div>
        </span>
        <Search search={searchByName}/>
        
      </div>

      {renderView()}

    </div>
  );
}

export default App;
