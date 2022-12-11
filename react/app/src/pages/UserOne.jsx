import axios from 'axios'
import { Button, TextField } from '@mui/material';
import {Grid} from '@mui/material';
import React, { useState } from 'react';
import '../static/grid.css'
import UserTable from '../components/Table';

function UserOne() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [user, setUser] = useState([]);
    
    const selectUserOne = e => {
        e.preventDefault();
        axios.post('http://localhost:8080/userOne',{
          "name": name,
          "email": email
        }).then(res => {
            setUser(res.data.data)
        })
        .catch(function (error){
          console.log(error)
        })
      }



    return (
    <>

    <Grid container alignItems='center' justifyContent='center' direction="column" className='grid'>
        <h2>ユーザ検索</h2>
        <Grid item xs={12}>
            <TextField id="name" label="User Name" variant="standard" value={name} onChange={(event) => setName(event.target.value)}/>
        </Grid>   
        <Grid item xs={12}>
            <TextField name="email" label="User Email" variant="standard" value={email} onChange={(event) => setEmail(event.target.value)} />
        </Grid>
        <Button type="submit" variant="contained" onClick={selectUserOne}>
            検索
        </Button>

        <Grid item xs={12}> 
            <UserTable 
            user = {user}
            />
        </Grid>
    </Grid>

    
    </>
  )}


  export default UserOne;
// "1' or '1' = '1';--",
