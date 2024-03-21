import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
// import DatePicker from "react-date-picker";


const DateRangeSliderNew = () => {
    const getDateOfNintyDaysBack = () => {
        let today = new Date();
        today.setDate(-90);
        return `${(today.toISOString()).split("T")[0]}T00:00:00.000+00:00`
    }
    const getTodaysDate = () => {
        let today = new Date();
        return `${(today.toISOString()).split("T")[0]}T00:00:00.000+00:00`
    }

    const date = new Date();
    // const [dateArr, setDateArr] = useState([{}]);
    const [value, setValue] = useState([date.setDate(date.getDate() - 90), date]);
    // const [value, setValue] = useState([getDateOfNintyDaysBack(), getTodaysDate()]);

    const [startDate, setStartDate] = useState(getDateOfNintyDaysBack());
    const [endDate, setEndDate] = useState(getTodaysDate());

    // useEffect(() => {
    //     setDateArr([{
    //         startDate: value[0],
    //         endDate: value[1]
    //     }])
    //     const backDate = getDateOfNintyDaysBack();
    //     console.log(backDate)
    // }, [value]);
    // console.log(dateArr);

    // const dateToValue = (date) => {
    //     var unixEpoch = new Date(0);
    //     var millisecondsPerDay = 86400000;
    //     var daysSinceEpoch = Math.floor((date.getTime() - unixEpoch.getTime()) / millisecondsPerDay);
    //     return daysSinceEpoch + 1;
    // }

    // var dates = ['2022-01-01', '2022-01-02', '2022-01-03', '2022-01-04'];
    // var values = dates.map((date) => {
    //     return { date: date, value: dateToValue(new Date(date)) };
    // });
    // console.log(values);

    const handleChange = (event) => {
        const days = parseInt(event.target.value);
        const newDate = new Date();
        newDate.setDate(newDate.getDate() + days);
        console.log(newDate);
        setValue(newDate);
    };

    return (
        <>
            <div className="dateRangeSliderContainerNew" >
                <div className="displayDateContainerNew" >
                    <DatePicker
                        value={value}
                        onChange={(date) => setValue(date)}
                    />
                    {/* <DatePicker
                        value={endDate}
                        onChange={(date) => setEndDate(date)}
                    /> */}
                </div>

                <Box sx={{ width: 400 }}>
                    <Slider
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                    />
                </Box>
            </div>
        </>
    )
}

export default DateRangeSliderNew;