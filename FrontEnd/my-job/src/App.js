import React  ,{useState,useEffect}from 'react'
import './App.css';
import Search from './components/Search.jsx';


function App() {

  const [view, setView] = useState("allJobs")
  const [data, setData] = useState([])

  const changeView = (option) => {
    setView(option)
  }
  const renderView = () => {
    if (view === "allJobs") {
      return <div><h1>AllJobs</h1></div>
    }
    if (view === "createJob") {
      return <div><h1>Create New Job</h1></div>
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
