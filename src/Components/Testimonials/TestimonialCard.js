import React from 'react'

function TestimonialCard({profilePic, studentName, schoolName, review}) {
  return (
    <div className='testimonial-card'>
        <img src={profilePic} alt="" id="profile-pic" />
        <h4 id="student-name">{studentName}</h4>
        <p id="school-name">{schoolName}</p>
        <p id="review">{review}</p>
    </div>
  )
}

export default TestimonialCard