import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

function EditProfile() {
  const { id } = useParams();
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  })

  // display user details
  // useEffect(() => {
  //   // API REQ - GET USER DETAILS
  //   axios.get(`/get_user/${id}`)
  //     .then((res) => {
  //       setValues(res.data);
  //       console.log(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // }, [id]);

  const navigate = useNavigate()

  //update user details
  function handleSubmit(e) {
    e.preventDefault() //prevent pg refresh

    // API REQ - UPDATE USER DETAILS
    axios.put(`/edit_user/${id}`)
      .then(res => {
        navigate(`/profile/${id}`) //redirect to profile page after success
        console.log("EDITING USER PROFILE"+res.data)
      })
      .catch((err) => console.log(err))
  }

  return (
    <div>
      <h1>Edit Profile</h1>
      <p></p>
      <form onSubmit={handleSubmit}>
      {/* edit - remove "required" - deal with null values - only update ones filled in! */}
      <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '200px', }}>
        <input type="text" placeholder="First Name" value={values.firstName} onChange={(e) => setValues({ ...values, firstName: e.target.value })} required />
        <input type="text" placeholder="Last Name" value={values.lastName} onChange={(e) => setValues({ ...values, lastName: e.target.value })} required />
        <input type="email" placeholder="Email" value={values.email} onChange={(e) => setValues({ ...values, email: e.target.value })} required />
        <input type="password" placeholder="Password" value={values.password} onChange={(e) => setValues({ ...values, password: e.target.value })} required />
      </div>
        <button type="submit">Submit</button>
      </form>
    </div>

  )
}

export default EditProfile