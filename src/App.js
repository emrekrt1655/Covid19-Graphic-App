import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid'
import logo from'./virus.svg'
 const App = () => {
  return (
    <React.Fragment>
    <CssBaseline />
    <Container maxWidth="lg">
      <Grid container >
        <img src = {logo} alt='Covid19' style={{
          width:100, height:100, marginTop:20 }} />
      </Grid>
    
    </Container>
  </React.Fragment>
  )
}

export default App
