import * as React from 'react';
import Typography from '@mui/material/Typography';
import { BaseLayout } from '../layout/base-layout'

import dayjs, { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';


export function Test(props) {
    const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-07'));

    return <>
        <BaseLayout>
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


            

        </BaseLayout>
    </>
}
