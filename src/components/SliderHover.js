// SliderHover.js

import React from 'react';
import { Slider } from '@mantine/core';
import { useHover } from '@mantine/hooks';

export function SliderHover() {
  const { hovered, ref } = useHover();

  return (
    <Slider
      defaultValue={40}
      min={10}
      max={90}
      ref={ref}
      label={null}
      styles={{
        thumb: {
          transition: 'opacity 150ms ease',
          opacity: hovered ? 1 : 0,
        },
        markLabel: {
          marginLeft: 10, // Adjust the distance from the slider thumb
          display: 'flex',
          alignItems: 'center',
        },
      }}
    >
      <Slider.Mark position={40}>40%</Slider.Mark> {/* Display the percentage value */}
    </Slider>
  );
}
