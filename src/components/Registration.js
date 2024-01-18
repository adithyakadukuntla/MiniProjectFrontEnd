import React from 'react'
import {useForm} from 'react-hook-form';
function Registration() {
  let {register,handleSubmit,formState: { errors }} = useForm();

  function handleFormSubmit(props) {
    console.log(props);
  }
  return (
    <div className='pt-5'>
     
        <div>
          <h3 className="text-white bg-secondary mt-4 mb-5 text-center">New User Register First..</h3>
          <div className="container mx-auto mb-5 ">
            <form
              className="w-50 mx-auto form bg-secondary rounded-4 text-white"
              onSubmit={handleSubmit(handleFormSubmit)}
              style={{
                boxShadow:
                  "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
              }}
            >
              
              <div className="d-flex pt-3 justify-content-around">
                <div className="w-40">
                  <label htmlFor="firstname" className="mb-2">
                    First name
                  </label>
                  <input
                    type="text"
                    id="firstname"
                    className="form-control me-4"
                    { ...register("firstname", {
                      required: true,
                      maxLength: 6,
                      minLength: 4,
                    })}
                  />
                  {errors.firstname?.type === "required" && (
                    <p>Required and length in between 6-4</p>
                  )}
                </div>
                <div className="w-40">
                  <label htmlFor="lastname" className="mb-2">
                    Last name
                  </label>
                  <input
                    type="text"
                    id="lastname"
                    className="form-control"
                    {...register("lastname", {
                      required: true,
                      maxLength: 6,
                      minLength: 4,
                    })}
                  />
                  {errors.lastname?.type === "required" && (
                    <p>Required and length in between 6-4</p>
                  )}
                </div>
              </div>
              <div className="d-flex mt-4">
                <div style={{ marginLeft: "50px" }}>
                  <label htmlFor="date" className="mb-2">
                    Date of birth
                  </label>
                  <input
                    type="date"
                    id="date"
                    className="form-control"
                    {...register("dateofbirth", { required: true })}
                  />
                  {errors.dateofbirth?.type === "required" && (
                    <p>Date of birth is required</p>
                  )}
                </div>
                <div style={{ marginLeft: "180px" }}>
                  <p className="mb-2">Gender</p>
                  <div className="d-flex">
                    <div className="form-check me-4">
                      <label htmlFor="m" className="form-check-label">
                        Male
                      </label>
                      <input
                        type="radio"
                        id="m"
                        className="form-check-input"
                        value="male"
                        {...register("gender", { required: true })}
                      />
                      {errors.gender?.type === "required" && (
                        <p>Gender is required</p>
                      )}
                    </div>
                    <div className="form-check">
                      <label htmlFor="f" className="form-check-label">
                        Female
                      </label>
                      <input
                        type="radio"
                        id="f"
                        className="form-check-input"
                        value="female"
                        {...register("gender", { required: true })}
                      />
                      {errors.gender?.type === "required" && (
                        <p>Gender is required</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex mt-4">
                <div style={{ marginLeft: "50px" }}>
                  <label htmlFor="email" className="mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    {...register("email", { required: true })}
                  />
                  {errors.email?.type === "required" && <p>Email is Required</p>}
                </div>
                <div style={{ marginLeft: "130px" }}>
                  <label htmlFor="number" className="mb-2">
                    Phone Number
                  </label>
                  <input
                    type="number"
                    id="number"
                    className="form-control"
                    {...register("phonenumber", {
                      required: true,
                      minLength: 10,
                      maxLength: 10,
                    })}
                  />
                  {errors.phonenumber?.type === "required" && (
                    <p>Phone number is required</p>
                  )}
                  {errors.phonenumber?.type === "minLength" && (
                    <p>Enter a valid number</p>
                  )}
                </div>
              </div>
              <div className="ms-5 mt-4 me-5 mb-4">
                <label htmlFor="Subject" className="mb-2">
                  Subject
                </label>
                <select
                  id="branch"
                  className="form-control"
                  defaultValue=""
                  {...register("Branch", { required: true })}
                >
                  <option value="" disabled>
                    Choose a Subject
                  </option>
                  <option value="Java">Java</option>
                  <option value="Python">Python</option>
                  <option value="c++">c++</option>
                  <option value="PHP">PHP</option>
                  <option value="NODEjs">NODEjs</option>
                </select>
                {errors.Subject?.type === "required" && <p>Subject is required</p>}
              </div>
              <button className="btn btn-warning ms-5 m-4">Submit</button>
            </form>
          </div>
        </div>
        
 
    </div>
  )
}

export default Registration
