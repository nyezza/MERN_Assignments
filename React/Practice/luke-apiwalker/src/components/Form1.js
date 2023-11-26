import React,{useEffect, useState} from 'react';
import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import NativeSelect from '@mui/material/NativeSelect';
import InputBase from '@mui/material/InputBase';
import Axios from 'axios'
const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}));
const Form = () => {
    const [type, setType] = useState('');
    const[id,setId]=useState('')
    const handleChange=(e)=>{
        e.preventDefault()
        setType('')
    }
    useEffect(()=>{
        Axios.get("https://swapi.dev/api/:{type}")
        .then(res=> {
            setType(type)
        })
        .catch(err=>console.log(err))
    },[])
  return (
    <div>
    
    <FormControl sx={{ m: 1 }} variant="standard">
      <InputLabel id="demo-customized-select-label">Serch For:</InputLabel>
      <Select
        labelId="demo-customized-select-label"
        id="demo-customized-select"
        value={type}
        onChange={handleChange}
        input={<BootstrapInput />}
      >
       
        <MenuItem value={"people"}>people</MenuItem>
        <MenuItem value={"planets"}>planets</MenuItem>
        <MenuItem value={"films"}>films</MenuItem>
        <MenuItem value={"species"}>species</MenuItem>
        <MenuItem value={"vehicles"}>vehicles</MenuItem>
        <MenuItem value={"starships"}>starships</MenuItem>
      </Select>
    </FormControl>
   
    <FormControl sx={{ m: 1 }} variant="standard">
      <InputLabel htmlFor="demo-customized-textbox">ID</InputLabel>
      <BootstrapInput id="demo-customized-textbox" />
    </FormControl>
  </div>
  )
}

export default Form