import Axios from 'axios';
import React, { useEffect, useState } from 'react';

let GetData = () => {

  let [data, setData] = useState('')

  useEffect(() => {
    let dataUrl = "https://api.edamam.com/api/nutrition-data?app_id=5feb500a&app_key=7c331a1ad3b3fb99a70f3a907fe49396&ingr=1%20large%20apple"
    Axios.get(dataUrl)
      .then((response) => {
        setData(response.data)
        console.log(Object.keys(data.totalNutrients));
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  let getObjVal = () => {
    let val = "";
    for (let x in data) {
      console.log(x)
      console.log(data[x])
    }
  }


  return (
    <React.Fragment>
      {/* <pre>{JSON.stringify(data.totalNutrients)}</pre> */}
      <section className="m-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {/* {JSON.stringify(data)} */}
              <ul>
                <div className="row">
                  <b for="label" className="font-weight-bold">uri : </b>
                  <p id="label">{data.uri}</p>
                </div>
                <div className="row">
                  <label for="label" className="font-weight-bold">calories : </label>
                  <p id="label">{data.calories}</p>
                </div>
                <div className="row">
                  <label for="label" className="font-weight-bold">total weight : </label>
                  <p id="label">{data.totalWeight}</p>
                </div>
                <div className="row">
                  <label for="label" className="font-weight-bold">Diet Labels : </label>
                  <ul>

                    {
                      data !== "" &&
                      data.dietLabels.map((val) => {
                        return (
                          <li id="label">{val}</li>
                        )
                      })
                    }
                  </ul>
                  {/* <p id="label" className="ml-2">{data.dietLabels[1]}</p> */}
                </div>
                <div className="row">
                  <label for="label" className="font-weight-bold">Health Labels : </label>
                  <ul>
                    {
                      data !== "" &&
                      data.healthLabels.map((val) => {
                        return (
                          <li>{val}</li>
                        )
                      })
                    }
                  </ul>
                </div>

              </ul>
              <table className="table">
                <thead className="bg-light">
                  <tr>
                    <th className="font-weight-bold">Nutrients</th>
                    <th className="font-weight-bold">Label</th>
                    <th className="font-weight-bold">Quantity</th>
                    <th className="font-weight-bold">Unit</th>
                  </tr>
                </thead>
                {
                  data !== "" &&
                  (Object.keys(data.totalNutrients).map((key, index) => {
                    return (
                      <tbody>
                        <tr>
                          <td>{key}</td>
                          <td>{data.totalNutrients[key].label}</td>
                          <td>{data.totalNutrients[key].quantity}</td>
                          <td>{data.totalNutrients[key].unit}</td>
                          {/* <td>{data.totalNutrients.key.quantity}</td> */}
                        </tr>
                      </tbody>
                    )
                  }))
                }

              </table>
              <ul>
                <div className="row">
                  <b for="label" className="font-weight-bold">Ingredients : </b>
                  {/* <p id="label">{data.ingredients[0].text}</p> */}
                  {/* <p id="label">{data.ingredients}</p> */}
                </div>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default GetData;
