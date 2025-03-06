import {
  Label,
  Slider,
  SliderProps,
  SliderThumb,
  SliderTrack,
} from 'react-aria-components';
import styles from '../styles/CustomSlider.module.css';
import React from "react";

interface CustomSliderProps extends SliderProps<number> {
  value: number;
  minValue: number;
  maxValue: number;
  label?: string;
  ariaLabel?: string;
}

export const CustomSlider: React.FC<CustomSliderProps> = ( props: CustomSliderProps ) => {
  return (
    <Slider {...props} className={styles.slider}>
      <Label className={styles.label} aria-label={props.ariaLabel}>{props.label}</Label>
      <SliderTrack className={styles.track}>
        {({ state }) => (
          <>
            {/* Set styles for the whole track */}
            <div className={styles.trackMain} />
            {/* Set styles for the part for tack before the thumb */}
            <div className={styles.trackFilled}
              style={{ width: `${state.getThumbPercent(0) * 100}%` }}
            />
            <SliderThumb className={styles.thumb} />
          </>
        )}
      </SliderTrack>
    </Slider>
  );
}