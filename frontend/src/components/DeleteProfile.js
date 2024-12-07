import React, { useState, useEffect } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import axios from 'axios'

function DeleteProfile() {
  const { id } = useParams();
  const navigate = useNavigate()

  function handleDelete() {
    // API REQ - DELETE USER
    axios.delete(`/delete_user/${id}`)
      .then(res => {
        console.log(res.data)
        navigate('/') //redirect to home page after success
      }).catch(err => console.log(err))
  }

  return (
    <div>
      <h1>Delete Profile</h1>
      <p>Are you sure you want to delete your account?</p>
      <button onClick={() => handleDelete()}>Yes</button>
      <Link to="/"><button>No</button></Link>
    </div>

  )
}

export default DeleteProfile