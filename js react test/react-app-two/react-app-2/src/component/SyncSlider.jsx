import React, { useState } from "react";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import "react-datepicker/dist/react-datepicker-cssmodules.css";

const SyncSlider = () => {
    const [dateArr, setDateArr] = useState([]);
    const [value, setValue] = useState([0, 30]);

    const getDateOfNintyDaysBack = () => {
        let today = new Date();
        today.setDate(-90);
        return `${(today.toISOString()).split("T")[0]}T00:00:00.000+00:00`
    }

    const getTodaysDate = () => {
        let today = new Date();
        return `${(today.toISOString()).split("T")[0]}T00:00:00.000+00:00`
    }

    const [selectedDate, setSelectedDate] = useState([getDateOfNintyDaysBack(), getTodaysDate()]);

    console.log(selectedDate);
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    const handleChange = (event) => {
        console.log(e.target.value);
        // const days = parseInt(event.target.value);
        // const newDate = new Date();
        // newDate.setDate(newDate.getDate() + days);
        // setSelectedDate(newDate);
    }

    return (
        <>
            {/* <input
                type="range"
                min={0}
                max={365}
                value={Math.round(
                    (selectedDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
                )}
                onChange={handleChange}
            /> */}
            <Box sx={{ width: 400 }}>
                <Slider
                    getAriaLabel={() => 'Temperature range'}
                    value={(selectedDate[0].getTime() - getTodaysDate.getTime()) / (1000 * 60 * 60 * 24)}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    min={0}
                    max={365}
                />
            </Box>
            <DatePicker selected={selectedDate[0]} onChange={handleDateChange} />

        </>
    )
}

export default SyncSlider