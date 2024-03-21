import React from 'react'
import { Range } from 'react-slider';

const SliderRange = () => {
    const [sliderValues, setSliderValues] = useState([25, 75]);

    return (
        <Range
            values={sliderValues}
            onChange={(values) => setSliderValues(values)}
            min={0}
            max={100}
            step={1}
            renderTrack={({ props, children }) => (
                <div
                    {...props}
                    style={{
                        ...props.style,
                        height: '5px',
                        width: '100%',
                        backgroundColor: '#ddd'
                    }}
                >
                    {children}
                </div>
            )}
            renderThumb={({ props, isDragged }) => (
                <div
                    {...props}
                    style={{
                        ...props.style,
                        height: '20px',
                        width: '20px',
                        borderRadius: '50%',
                        backgroundColor: '#007bff',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        boxShadow: '0px 2px 6px #AAA',
                        outline: 'none'
                    }}
                >
                    <div
                        style={{
                            height: '10px',
                            width: '10px',
                            borderRadius: '50%',
                            backgroundColor: isDragged ? '#FFF' : '#007bff'
                        }}
                    />
                </div>
            )}
        />

    )
}

export default SliderRange;