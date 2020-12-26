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
    return { label: item.Country };
  })
  const countryValues = countries?.map((item)=>{
    return  item.Slug ;
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
      style={{ width: 300 }}
      value={null}
      onChange={(event, value) => {
        setCountry(value.label)
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
            autoComplete: 'new-password'
          }}
          
        />
      )}
    />



      </Grid>
   
    
    </Container>
  </React.Fragment>
  )
}

export default App
