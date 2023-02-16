import React from 'react'

export default function About() {
  return (
    <div className='container'>
    <h1 className='container' style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
       color: 'navy',
       fontStyle: 'italic'
      }}>About Our Store</h1>
    <br/>
       <p style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
       color: 'navy',
       fontSize:'30px',
       fontStyle: 'italic'
      }}>Our store were made by a vision. A pretty greedy vision of getting a high grade in React course and improving our gpa. That's it. Thank you for reading.
       Nitay Chen Kurt, the CEO and the founder of the store is second year student to Practical Software Engineer in Ariel University.
       Eviatar S. Zilberman, the content writer is is second year student to Practical Software Engineer in Ariel University either. We hope you will have fun in our store :)</p>
      <center><img height="200px" width="200px" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU_Ug7NwLA-GYwCZy9-ZMpwi8L-r8hj8pZPg&usqp=CAU' alt='img1' /></center>
  
  </div>
  )
}
