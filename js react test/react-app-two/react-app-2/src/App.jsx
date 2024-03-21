import { useState } from 'react'
import './App.css';
import DateRangePick from './component/DateRangePick';
import DateRangeSliderNew from './component/DateRangeSliderNew';
import SyncSlider from './component/SyncSlider';



function App() {

  return (
    <div className="App">
      {/* <DateRangeSliderNew /> */}
      {/* <SyncSlider /> */}
      <DateRangePick />
    </div>
  )
}

export default App
