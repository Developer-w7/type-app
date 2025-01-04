import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { sliderState } from '../atoms/sliderAtom';
import { useRecoilState } from 'recoil';

function valuetext(value) {
  return `${value}°C`;
}

export default function DiscreteSlider() {
    const [range, setRange] = useRecoilState(sliderState);
  return (
    <Box sx={{ width: '100%'}}>
        <p>Slider</p>
      <Slider
      onChange={(v)=>{console.log(v.target.value);setRange(v.target.value)}}
        aria-label="Temperature"
        defaultValue={10}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={10}
        marks
        min={10}
        max={1000}
      />
      {/* <Slider defaultValue={30} step={10} marks min={10} max={110} disabled /> */}
    </Box>
  );
}