import React, { useEffect, useState } from 'react'
import listAllDogs from '../../../services/listAllDogs'

const ListDogs = () => {

  const [dogs, setDogs] = useState([])

  const getDogs = async () => {
      const result = await listAllDogs()
      setDogs(result)
  }
  
  useEffect(() => {
    getDogs()
  }, [])

  function displayDogs() {
    return (
      dogs.map((dog) =>{
        return(
          <>
          <div>
            <table>
              <tr>
                <th>Dog</th>
                <th>Name</th>
                <th>Breed</th>
                <th>Age</th>
                <th>Chip</th>
                <th>Problem</th>
                <th>Valoration</th>
              </tr>
              <tr>
                <td>{dog.id}</td>
                <td>{dog.name}</td>
                <td>{dog.breed}</td>
                <td>{dog.age}</td>
                <td>{dog.sex}</td>
                <td>{dog.chip}</td>
                <td>{dog.problem}</td>
                <td>{dog.valoration}</td>
              </tr>
            </table>
          </div>
          </>
        )
      })
    )
  }
  
  return(
    <div>
      {displayDogs()}
    </div>
  )
}

export default ListDogs
