import * as React from 'react';
// import Typography from '@mui/material/Typography';
// import { BaseLayout } from '../../pages/layout/base-layout'

// import dayjs, { Dayjs } from 'dayjs';
// import TextField from '@mui/material/TextField';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';


export function Test() {
  // const [value, setValue] = React.useState < Dayjs | null > (dayjs('2022-04-07'));

  return <>
    
<div style={{width:'50%',height:'500px',background:'black',display:'flex',justifyContent:'space-between',flexWrap:'wrap',flexDirection:'',}} >

<div style={{width:'200px',height:'50px',background:'yellow',margin:'10px'}}></div>
<div style={{width:'200px',height:'50px',background:'red',alignSelf:'center',marginLeft:'10px'}}></div>
<div style={{width:'200px',height:'50px',background:'blue',alignSelf:'self-end',marginRight:'10px',marginLeft:'10px',marginBottom:'5px'}}></div>

</div>




  </>
}


class Car {
  printHello(a) {
      console.log(a)
  }
}

const car1 = new Car()

car1.printHello(123)


function printHello(a) {
  console.log(a)
}

class Insan {
  boyrey() {

  }

  qaraciyer() {
      this.boyrey()
  }

  urey() {
      this.agciyer()
  }

  agciyer() {
      this.qaraciyer()
  }
}

const reyhan = new Insan()

const taleh = new Insan()


reyhan.urey()

taleh.qaraciyer()








{/* <BaseLayout>
      <Typography paragraph style={{ color: 'white' }}>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateTimePicker
            renderInput={(props) => <TextField {...props} />}
            label="DateTimePicker"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
          />
        </LocalizationProvider>

      </Typography>

    </BaseLayout> */}
