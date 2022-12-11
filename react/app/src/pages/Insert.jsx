import { Grid } from '@mui/material';
import axios from 'axios'
import { useState } from 'react';
import {Button, TextField} from '@mui/material';

function Insert() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [result, setResult] = useState("");
  const insertUser = e => {
    e.preventDefault();
    if (name === "") {
      alert("名前が未入力です")
      return false
    }
    if (email === "") {
      alert("メールアドレスが未入力です")
      return false
    }
      axios.post('http://localhost:8080/insert',{
        "name": name,
        "email": email
      }).then(res => {
        setResult(res.data.response)
      })
      .catch(res => {
        setResult(res.response.data.error)
      })
  }
    return (
      <>
        <Grid  container alignItems='center' justifyContent='center' direction="column" className='grid'>
          <h2>ユーザ登録</h2>
          <Grid item xs={12}>
              <TextField id="name" label="User Name" variant="standard" value={name} onChange={(event) => setName(event.target.value)}/>
          </Grid>   
          <Grid item xs={12}>
              <TextField name="email" label="User Email" variant="standard" value={email} onChange={(event) => setEmail(event.target.value)} />
          </Grid>
          <Button type="submit" variant="contained" onClick={insertUser}>
              検索
          </Button>
        </Grid>
        結果: {result}
      </>
    )  
  }
  
  export default Insert;