import React, {useState, useEffect} from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import logo from'./virus.svg'
import {fetchCountry} from './api'
import AreaChart from './components/AreaChart';



const useStyles = makeStyles({
  option: {
    fontSize: 15,
    '& > span': {
      marginRight: 10,
      fontSize: 18,
    },
  },
});


 const App = () => {

  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('turkey');
  const classes = useStyles();

  useEffect(()=>{
    const fetchCountriesData = async () => {
      const countries = await fetchCountry();
      setCountries(countries)
    };
    fetchCountriesData();
    
  }, [])

  const countryNames = countries?.map((item)=>{
    return { label: item.Country, slug: item.Slug };
  })


  return (
    <React.Fragment>
    <CssBaseline />
    <Container maxWidth="lg">
      <Grid container >
        <img src = {logo} alt='Covid19' style={{
          width:100, height:100, marginTop:20 }} />
        
        <Autocomplete
      id="country-select-demo"
      style={{ width: '50%', margin: '50px auto' }}
      value={null}
      onChange={(event, value) => {
        console.log(value.slug)
      }}
      options={countryNames}
      classes={{
        option: classes.option,
      }}
      autoHighlight
      getOptionLabel={(option) => option.label}
      renderOption={(option) => (
        <React.Fragment>
          {option.label} 
        </React.Fragment>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Choose a country"
          variant="outlined"
          inputProps={{
            ...params.inputProps,
           
          }}
          
        />
      )}
    />



      </Grid>
      <Grid item xs={12} >
        <AreaChart country={country}/>
      </Grid>
    
    </Container>
  </React.Fragment>
  )
}

export default App
