import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import {NativeSelect } from '@mui/material';
import {useState,useEffect} from 'react'




const CountryPicker = ({country,HandleChange}) =>{
	

return(
	
	<FormControl fullWidth>
		<InputLabel variant="standard" style={{margin:'2px'}} htmlFor="uncontrolled-native"> Country </InputLabel>
  		<NativeSelect defaultValue='Select country' onChange={(e)=>{HandleChange(e.target.value)}}>
    		{country.map((items,key) => <option key={key} value={items}>{items}</option>)}
 		</NativeSelect>
	</FormControl>
	)}
export default CountryPicker;