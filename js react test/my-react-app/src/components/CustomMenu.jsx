import React, { useState } from 'react'
import MenuPage from './MenuPage';

const CustomMenu = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);
    return (
        <div>
            <button onClick={handleOpen}>Select your date range</button>
            <MenuPage open={open} />
        </div>
    )
}

export default CustomMenu;