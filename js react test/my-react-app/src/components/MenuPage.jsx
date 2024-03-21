import React, { useState } from 'react'
import DateRange from './dateRange/DateRange';
import './MenuPage.css'

const MenuPage = (props) => {
    const { open } = props;
    const [tabs, setTabs] = useState("range");

    return (
        <>
            {
                open ? <div className='menu-container'>
                    <div className='menu-container-left'>
                        <div className={tabs === 'range' ? 'range-tab-active' : 'range-tab'} onClick={() => setTabs("range")}>Select Two Range</div>
                        <div className={tabs === 'date' ? 'date-tab-active' : 'date-tab'} onClick={() => setTabs("date")}>Select Two Date</div>
                        <div className={tabs === 'month' ? 'month-tab-active' : 'month-tab'} onClick={() => setTabs("month")}>Last 30 Days</div>
                    </div>
                    <div className='menu-container-right'>

                        {tabs === "range" && <div>date range slider</div>}
                        {tabs === "date" && <div>
                            <h1>Start Date</h1>
                            <DateRange />
                            <h1>End Date</h1>
                            <DateRange />
                        </div>}
                        {tabs === "month" && <div>
                            <DateRange />
                        </div>}
                    </div>
                </div> : ""
            }
        </>
    )
}

export default MenuPage