import React  ,{useState,useEffect}from 'react'
import './App.css';
import Search from './components/Search.jsx';
import AllList from './components/AllList.jsx';
import axios from 'axios';
import OneJob from './components/OneJob.jsx';
import Create from './components/Create.jsx';

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

  useEffect(() => {
    fetchData()
  }, [refetsch])


  const changeView = (option,job) => {
    setView(option)
    setJob(job)
  }

  const renderView = () => {
    if (view === "allJobs") {
      return <AllList jobs={data} change={changeView}/>
    }
    if (view === "createJob") {
      return <Create add={postData}/>
    }
    if (view === "oneJob") {
      return <OneJob job={job}/>
    }
    if (view === "updateJob") {
      return <div>update</div>
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
            Categories
            <div className="dropdown-content">
              <p>All</p>
              <p>It</p>
              <p>manegment</p>
              <p>call center</p>
            </div>
          </div>
        </span>
        <span className="items">
          <div className="dropdown">
            Job By City
            <div className="dropdown-content">
              <p>All</p>
              <p>Sousse</p>
              <p>Tunis</p>
              <p>Sfax</p>
            </div>
          </div>
        </span>
        <Search/>
        
      </div>

      {renderView()}

    </div>
  );
}

export default App;
