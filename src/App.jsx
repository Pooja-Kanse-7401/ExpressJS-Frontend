import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'

function App() {
  const [data, setData] = useState([])

  const getData = async () => {
    const mainData = await axios.get('https://expressjs-backend-klff.onrender.com/')
    console.log(mainData.data)
    setData(mainData.data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <table>
          <tr>
            <th>Index no.</th>
            <th>Courses</th>
          </tr>
        <tbody>
          {
            data.map((val,i) => {
              return(
                <>
                  <tr key={i+1}>
                    <td>{val.id}</td>
                    <td>{val.courseName}</td>
                  </tr>
                </>
              )
            })
          }
        </tbody>
      </table>
    </>
  )
}

export default App
