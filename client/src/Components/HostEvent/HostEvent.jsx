import React,{useState,useEffect} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import styles from '../Login/Login.module.css'
import { createTheme , ThemeProvider} from '@mui/material/styles';
import { purple, cyan } from '@mui/material/colors';
import { useDispatch } from 'react-redux'
// import { login } from '../../store/auth/actions'
// import { useSelector } from 'react-redux'
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import TimePicker from '@mui/lab/TimePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import swal from 'sweetalert';
import { Link, useHistory } from "react-router-dom";
import Loader from '../Loader/Loader';
import {loadData}from "../../utils/localSt"
const theme = createTheme({
   palette: {
    primary: {
      main: cyan[500],
    },
    secondary:{
      main: cyan[500],
    },
    secondary2:{
      main: '#000000',
    }, 
  },
});
 

const HostEvent = () => {
  const [check, setCheck] = useState(false);
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const dispatch = useDispatch()
    const history = useHistory();
     const [value, setValue] = React.useState("Sun Oct 10 2021 11:42:18 GMT+0530 (India Standard Time)");

     let user=loadData("user");
  const handleChange = (newValue) => {
    console.log('newValue:', newValue)
    let res=""+newValue
    setValue(res);
    setCheck(false)
  };
     
    const payload = {
       name,
      mobile,
      date: value.split(" ")[2] + " " + value.split(" ")[1] + " " + value.split(" ")[3],
      time: value.split(" ")[4],
      day: value.split(" ")[0],
      user
  };
  useEffect(() => {
    setTimeout(() => {
      setCheck(false)
    }, 1200)
  },[check])
  const loader = () => {
    setCheck(true)
  }
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(payload)
      loader()
      setName("");
      setMobile("");
      setTimeout(() => {
        history.push("/home")
        swal({
            title: "Event Created Successfully!",
            icon: "success",
            button: "Ok",
        });
    }, 1500)
      
  };
  
    return check ? <Loader/>:(
        <div className={styles.mainDivLogin}>
            
            <div className={styles.boxInputField}>
          <div>
            <svg width="220" height="25" viewBox="0 0 260 28.016302311429175" class="css-1j8o68f"><defs id="SvgjsDefs6473"></defs><g id="SvgjsG6474" featurekey="nameFeature-0" transform="matrix(0.999154556837787,0,0,0.999154556837787,0,-11.949887585026614)" fill="#08e1e9"><path d="M5.12 33.4 c1.96 0.88 3.68 1.32 5.12 1.32 c0.72 0 1.16 -0.04 1.36 -0.16 c0.92 -0.24 1.56 -0.76 1.96 -1.56 l0.04 -0.08 c0.2 -0.36 0.28 -0.8 0.28 -1.36 c0 -0.28 -0.08 -0.6 -0.24 -1 l-0.08 -0.16 c-0.52 -1.08 -1.68 -1.8 -3.8 -2.48 l-0.4 -0.12 l-0.12 -0.04 c-3.24 -0.96 -5.32 -2.48 -6.32 -4.6 c-0.4 -0.8 -0.6 -1.68 -0.6 -2.64 c0 -1 0.2 -1.96 0.6 -2.96 l0.08 -0.16 c0.92 -1.84 2.4 -3.04 4.36 -3.64 c1.4 -0.2 2.2 -0.32 2.4 -0.32 c2.72 0 5.88 1.12 9.44 3.32 l0.76 -1.24 c-3.88 -2.36 -7.24 -3.52 -10.16 -3.52 c-1.16 0 -2.12 0.12 -2.8 0.4 c-2.36 0.64 -4.12 2.08 -5.28 4.36 l-0.12 0.28 c-0.48 1.16 -0.72 2.32 -0.72 3.48 c0 1.24 0.24 2.32 0.72 3.28 c1.24 2.48 3.64 4.24 7.24 5.32 l0.48 0.16 c1.64 0.52 2.6 1.08 2.96 1.72 l0.04 0.08 c0.08 0.12 0.12 0.28 0.12 0.48 c0 0.36 -0.04 0.6 -0.16 0.8 c-0.28 0.64 -0.96 0.96 -2.04 0.96 c-1.72 0 -4.2 -0.88 -6.12 -2.12 l-0.6 -0.36 l-3.52 5.68 l0.6 0.36 c2.84 1.92 6.6 3.12 9.64 3.12 c1 0 1.92 -0.12 2.76 -0.36 c2.36 -0.68 4.12 -2.16 5.28 -4.4 l0.16 -0.28 c0.48 -1.24 0.72 -2.4 0.72 -3.48 c0 -0.96 -0.32 -2.16 -0.92 -3.64 c-1.08 -2.16 -3.36 -3.8 -6.92 -4.92 l-0.56 -0.16 c-1.12 -0.36 -1.88 -0.72 -2.24 -1 c-0.48 -0.4 -0.76 -0.68 -0.88 -0.84 l-0.08 -0.44 c0 -0.4 0.08 -0.76 0.28 -1.04 c0.32 -0.6 0.64 -0.76 1.92 -0.76 c1.72 0 4.2 0.88 6.12 2.12 l0.6 0.36 l2.16 -3.44 l-0.64 -0.36 c-2.44 -1.6 -5.76 -2.72 -8.2 -2.72 c-1.08 0 -1.76 0.08 -2.12 0.28 c-1.64 0.48 -2.88 1.52 -3.68 3.08 c-0.36 0.68 -0.52 1.48 -0.52 2.48 c0 0.76 0.16 1.48 0.48 2.16 c0.84 1.8 2.72 3.12 5.64 4 l0.52 0.16 l1.08 0.4 c0.6 0.24 1.24 0.56 1.96 0.96 c1.28 0.76 1.92 1.84 1.92 3.28 c0 0.8 -0.2 1.56 -0.56 2.24 c-0.84 1.48 -2.28 2.24 -4.28 2.24 c-1.36 0 -3.28 -0.52 -5.76 -1.52 l-0.68 1.16 l-0.04 0.08 c2.28 1.16 4.44 1.72 6.52 1.72 c1.16 0 2.24 -0.24 3.2 -0.72 c1.88 -0.92 3.04 -2.84 3.04 -5.24 c0 -3.8 -2.92 -4.92 -6 -6 l-0.52 -0.16 c-2.52 -0.76 -4.08 -1.8 -4.72 -3.2 c-0.24 -0.48 -0.36 -1 -0.36 -1.6 c0 -0.76 0.12 -1.36 0.4 -1.88 c0.64 -1.16 1.56 -1.92 2.76 -2.28 l1.6 -0.2 c2.12 0 4.44 0.72 6.96 2.12 l-0.64 1 c-2.6 -1.28 -4.68 -1.92 -6.2 -1.92 c-0.76 0 -1.2 0.04 -1.4 0.16 c-0.88 0.24 -1.52 0.76 -1.96 1.6 l-0.04 0.08 c-0.2 0.36 -0.28 0.84 -0.28 1.44 c0 0.44 0.08 0.76 0.2 0.96 c0.52 1.08 1.88 1.96 4.04 2.6 l0.52 0.16 l1 0.32 c0.12 0.04 0.76 0.32 1.92 0.88 c1.56 0.88 2.68 2 3.32 3.32 c0.4 0.8 0.6 1.68 0.6 2.64 c0 1.16 -0.2 2.16 -0.64 3 l-0.08 0.16 c-0.92 1.84 -2.4 3.04 -4.36 3.64 c-1.4 0.2 -2.2 0.32 -2.4 0.32 c-2.04 0 -4.68 -0.76 -7.12 -1.92 l-1.12 -0.6 l2 -3.24 z M34.58 17.2 l9.56 0 l0 -3.8 l-17 0 l0 1.24 l15.64 0 l0 1.44 l-17.08 0 l0 -4.12 l19.88 0 l0 6.68 l-9.56 0 l0 18.72 l-1.44 0 l0 -20.16 z M31.9 18.64 l-6.2 0 l0 -1.44 l7.64 0 l0 21.32 l4 0 l0 -18.64 l1.44 0 l0 20.12 l-6.88 0 l0 -21.36 z M72.36 38.56 l-4.6 0 l-5.52 -10.28 l-3.72 0.04 l0 10.24 l-4.04 0 l0 -26.56 l-1.44 0 l0 28 l6.96 0 l0 -10.28 l1.4 0 l5.48 10.28 l7.88 0 l-5.52 -10.32 l-1.32 0.52 z M62.839999999999996 13.440000000000001 c5.8 0 9.08 2.6 9.08 7.36 c0 4.32 -2.6 6.96 -7.12 7.44 l-1.08 0.12 l5 9.24 l1.64 0 l-4.36 -8.12 c4.8 -0.84 7.36 -3.76 7.36 -8.68 c0 -1.64 -0.36 -3.12 -1.04 -4.44 c-1.6 -2.84 -4.88 -4.36 -9.48 -4.36 l-7.08 0 l0 25.56 l1.44 0 l0 -24.12 l5.64 0 z M62.519999999999996 27.04 c5.48 0 8.08 -1.88 8.08 -6.04 c0 -3.96 -2.72 -6.2 -7.08 -6.2 l-5.04 0 l0 4.2 l4.6 0 c2.12 0 3.2 0.6 3.2 1.8 c0 1.4 -1.32 2.08 -4 2.08 l-2.32 0 l0 -2.48 l-1.48 0 l0 3.92 l3.8 0 c3.56 0 5.44 -1.24 5.44 -3.52 c0 -0.72 -0.16 -1.28 -0.52 -1.72 c-0.68 -1 -2.04 -1.48 -4.12 -1.48 l-3.12 0 l0 -1.36 l3.56 0 c3.56 0 5.64 1.72 5.64 4.76 c0 3.16 -2.12 4.64 -6.64 4.64 l-4 0 l0 1.4 l4 0 z M79.7 12.079999999999998 l1.44 0 l0 26.48 l15.32 0 l0 -4 l-11.28 0 l0 -3.84 l1.44 0 l0 2.4 l11.28 0 l0 6.88 l-18.2 0 l0 -27.92 z M82.42 12.079999999999998 l15.28 0 l0 6.84 l-9.6 0 l0 -1.44 l8.16 0 l0 -3.96 l-12.4 0 l0 11.56 l9.32 0 l0 1.44 l-10.76 0 l0 -14.44 z M82.42 27.8 l12.16 0 l0 -4 l-9.4 0 l0 -9.08 l9.68 0 l0 1.44 l-8.24 0 l0 6.2 l9.4 0 l0 6.88 l-12.16 0 l0 6.64 l11.2 0 l0 1.44 l-12.64 0 l0 -9.52 z M107.72 37.52 l1.76 0 l1.4 -3.36 l10.44 0.04 l2.56 5.8 l7.36 -0.04 l-12.6 -27.96 l-2.56 0 l-12.52 27.96 l7.8 0 l1.36 -3.2 l7.96 0 l-0.6 -1.36 l-8.24 0 l-1.28 3.16 l-4.76 0 l11.08 -25.2 l0.96 0 l11.12 25.2 l-4.24 0 l-2.56 -5.72 l-12.4 0 z M112.48 30.48 l4.88 -11.64 l8.2 18.64 l1.64 0 l-9.84 -21.92 l-7.2 16.16 l11.6 0 l-4.4 -9.72 l-3.04 7.32 l1.56 0 l1.48 -3.64 l2.28 4.8 l-7.16 0 z M142.62 11.96 l11.6 21.8 l4.84 -8.96 l2.32 15.2 l1.44 0 l-3 -19.68 l-5.6 10.36 l-9.96 -18.72 l-1.64 0 z M155.38000000000002 22.72 l-1.88 3.48 l0.84 1.52 l2.64 -5 l3.52 -6.56 l0.12 -0.28 l1.32 -2.44 l0.96 0 l0.12 0.96 l3 19.52 l0.68 4.6 l-1.32 0 l-3.04 -19.8 l-0.36 -2.4 l-1.12 2.12 l3.2 20.96 l-0.04 0 l0.12 0.6 l4.24 0 l-4.24 -28.04 l-3.08 0 z M152.94000000000003 34.12 l-11.48 -21.64 l-0.24 -0.4 l-4.24 27.92 l7 0 l1.28 -8.28 l-0.84 -1.56 l-0.32 -0.6 l-1.36 8.96 l-4.08 0 l3.36 -21.92 l12.24 23.04 l4.36 -8.28 l-0.32 -2.12 l-0.04 -0.28 l-4 7.6 z M143.46 25.240000000000002 l7.84 14.76 l1.64 0 l-10.24 -19.24 l-2.6 16.72 l1.44 0 z M173.72000000000003 11.96 l4.12 0 l0 25.4 l-1.48 0 l0 -23.96 l-1.2 0 l0 25.16 l13.16 0 l0 -3.84 l-6.52 0 l0 -1.44 l7.96 0 l0 6.72 l-16.04 0 l0 -28.04 z M179.16000000000003 11.96 l1.44 0 l0 23.92 l6.44 0 l0 1.48 l-7.88 0 l0 -25.4 z M198.70000000000002 12 l4.2 0 l0 25.32 l-1.44 0 l0 -23.88 l-1.32 0 l0 25.12 l4.04 0 l0 -26.56 l1.44 0 l0 28 l-6.92 0 l0 -28 z M232.48000000000002 28.6 l-16.36 -16.6 l-2 0 l19.8 20.12 l0 -17.32 l-1.44 0 l0 13.8 z M231.16000000000003 25.4 l0 -12 l4.08 0 l0 25.16 l-0.68 0 l-0.16 -0.16 l-18.32 -18.56 l0 20.16 l4.2 0 l0 -11.8 l-1.48 -1.52 l0 11.88 l-1.28 0 l0 -15.2 l16.6 16.64 l2.56 0 l0 -28 l-6.96 0 l0 11.84 z M214.76000000000002 40 l0 -23.4 l19.16 19.44 l0 -2.12 l-20.56 -20.76 l0 26.84 l1.4 0 z M242.02000000000004 12.079999999999998 l1.44 0 l0 26.48 l15.32 0 l0 -4 l-11.28 0 l0 -3.84 l1.44 0 l0 2.4 l11.28 0 l0 6.88 l-18.2 0 l0 -27.92 z M244.74000000000004 12.079999999999998 l15.28 0 l0 6.84 l-9.6 0 l0 -1.44 l8.16 0 l0 -3.96 l-12.4 0 l0 11.56 l9.32 0 l0 1.44 l-10.76 0 l0 -14.44 z M244.74000000000004 27.8 l12.16 0 l0 -4 l-9.4 0 l0 -9.08 l9.68 0 l0 1.44 l-8.24 0 l0 6.2 l9.4 0 l0 6.88 l-12.16 0 l0 6.64 l11.2 0 l0 1.44 l-12.64 0 l0 -9.52 z"></path></g></svg>
          </div>
            <ThemeProvider theme={theme}>
                <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' }, }} noValidate autoComplete="off" >
                    <TextField label="Event Name" color="secondary" focused className={styles.textInputField}
                    inputProps={{ style: { fontFamily: 'Arial', color: 'cyan'}}}
                     onChange={(e) => setName(e.target.value)}  type="text" value={name}/>
                    <TextField  label="Mobile" color="secondary" focused className={styles.textInputField} inputProps={{ style: { fontFamily: 'Arial', color: 'cyan'}}} onChange={(e) => setMobile(e.target.value)}  type="number" value={mobile}/>
              <LocalizationProvider dateAdapter={AdapterDateFns} style={{ background: "white" }}>
                <div style={{textAlign: "center",width: "100%"}}>
                <div style={{background:'#a0e6f0',borderRadius:"5px" ,width: "50%",margin:"auto"}}>
                <DesktopDatePicker label="Date" inputFormat="MM/dd/yyyy" value={value} color="secondary" 
                  inputProps={{ style: { fontFamily: 'Arial', color: 'black',background:'#a0e6f0'} }} onChange={handleChange} renderInput={(params) => <TextField {...params} />} />
                  </div>
                  <br />
                <div style={{background:'#a0e6f0',borderRadius:"5px" ,width: "50%",margin:"auto"}}>
                    <TimePicker label="Time" value={value} color="secondary" 
                    inputProps={{ style: { fontFamily: 'Arial', color: 'black',background:'#a0e6f0'}}} onChange={handleChange} renderInput={(params) => <TextField {...params} />} />
                  </div>
                  </div>
                    </LocalizationProvider>
                </Box>
                <div className={styles.btnLoginDiv} >
                    <button onClick={handleSubmit} className={styles.loginBtn}><span /><span /><span /><span /> HOST  EVENT</button>
                </div>
                
          </ThemeProvider>
            </div>
        </div>
    )
}

export default HostEvent
