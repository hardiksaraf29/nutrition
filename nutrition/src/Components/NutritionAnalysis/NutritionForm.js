import Axios from 'axios';
import React, { useState } from 'react';
import { Col , Form , Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

let NutritionForm = () => {

  let [details, setDetails] = useState(
    {
      title: "",
      prep: "",
      yield: "",
      ingrVal: "",
      ingr: []
    }
  )

  let updateValue = (event) => {
    setDetails(
      {
        ...details,
        [event.target.name]: (event.target.value)
      }
    )
  }

  let addIng = (event) => {
    event.preventDefault();
    (details.ingrVal !== "" &&
      setDetails({
        ...details,
        ingr: [...details.ingr, details.ingrVal],
        ingrVal: ''
      })
    )
  }

  let deleteItem = (val) =>{
    let indexVal = details.ingr.indexOf(val);
    details.ingr.splice(indexVal, 1)
    setDetails ({
      ...details,
      ingr : [...details.ingr]
    })
  }

  let submitData = (event) => {
    event.preventDefault()
    let dataUrl = "https://api.edamam.com/api/nutrition-details?app_id=5feb500a&app_key=7c331a1ad3b3fb99a70f3a907fe49396"
    Axios.post(dataUrl, details)
    .then((response)=>{console.log(response)})
    .catch((error)=>{console.log(error)})
    console.log(details)
  }

  return (
    <React.Fragment>
      <pre>{JSON.stringify(details)}</pre>
      <Link to="/getData" className="btn btn-primary">Get Data</Link>
      <section className="m-5">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="card">
                <div className="card-header bg-light text-center">
                  <h4>Fill The Details</h4>
                </div>
                <div className="card-body">
                  <form onSubmit={submitData}>
                    <Form.Group as={Row}>
                      <Form.Label column sm={4}>
                        Title
                      </Form.Label>
                      <Col sm={8}>
                        <Form.Control required type="text" name="title"  onChange={updateValue} value={details.title} />
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                      <Form.Label column sm={4}>
                        Prep
                      </Form.Label>
                      <Col sm={8}>
                        <Form.Control required type="text" name="prep"  onChange={updateValue} value={details.prep} />
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                      <Form.Label column sm={4}>
                        Yield
                      </Form.Label>
                      <Col sm={8}>
                        <Form.Control required type="text" name="yield" onChange={updateValue} value={details.yield} />
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                      <Form.Label column sm={4}>
                        Ingr
                      </Form.Label>
                      <Col sm={6}>
                        <Form.Control  type="text" name="ingrVal" onChange={updateValue} value={details.ingrVal} />
                      </Col>
                      <button onClick={addIng}>+</button>
                    </Form.Group>
                    <div className="text-center">

                      {details.ingr.length !== 0 &&
                        details.ingr.map((ingrOne) => {
                          return (
                            <div key={details.ingr.indexOf(ingrOne) + 1} className="row">
                              <p className="bg-light col-md-10">{ingrOne}</p>
                              <a onClick={deleteItem.bind(this, ingrOne)}  className="text-danger ml-2"   >Del</a>
                            </div>
                          )
                        })
                      }
                    </div>
                    <button className="btn btn-success btn-sm">Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default NutritionForm;
