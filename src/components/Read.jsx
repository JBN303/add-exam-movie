import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Read = (props) => {
    var [st,setst] = useState(props.data)
    const handler = (e) =>{
      const {name,value}= e.target 
      setst({...st,[name]:value})
      console.log(st)
    }
    const saveData = () =>{
      console.log("Button clicked")
      if (props.method==="post"){
      axios.post(" http://localhost:3005/movie",st)
      .then(respones=>{
        alert("succesfully added")
      })
      .catch(error=>{
        alert("Failed")
      })}
     else if (props.method==="put"){
      axios.put(" http://localhost:3005/movie/"+st.id,st)
      .then(respones=>{
        alert("succesfully ADD")
      })}
    }





  return (
    <div>
           <Typography>ADD STUDENTS</Typography>
        <TextField name='id' variant='standard' label="Name" onChange={handler}
       value={st.id}>Name</TextField>
      <br></br>
      <br></br>
      <TextField name='dir' variant='standard' label="director"
       onChange={handler} value={st.dir}>Director</TextField>
      <br></br>
      <br></br>
      <TextField name='lang' variant='standard' label="language"
       onChange={handler} value={st.lang}>Language</TextField>
      <br></br>
      <br></br>
      
      <TextField name='gener' variant='standard' label="genere"
       onChange={handler} value={st.gener}>Genre</TextField>
      <br></br>
      <br></br>
      
      <TextField name='relyear' variant='standard' label="year" onChange={handler}
       value={st.relyear}>Year</TextField>
      <br></br>
      <br></br>
      <Button variant='contained' onClick={saveData}>submit</Button>






    </div>
  )
}

export default Read
