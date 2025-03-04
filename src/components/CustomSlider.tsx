import {
  Label,
  Slider,
  SliderOutput,
  SliderProps,
  SliderThumb,
  SliderTrack,
} from 'react-aria-components';
import styles from '../styles/CustomSlider.module.css';

interface CustomSliderProps extends SliderProps<number> {
  value: number;
  label?: string;
  ariaLabel?: string;
}

export const CustomSlider: React.FC<CustomSliderProps> = ( props: CustomSliderProps ) => {
  return (
    <Slider {...props} className={styles.slider}>
      <Label aria-label={props.ariaLabel}>{props.label}</Label>
      <SliderOutput />
      <SliderTrack className={styles.track}>
            <SliderThumb className={styles.thumb}/>
      </SliderTrack>
    </Slider>
  );
}