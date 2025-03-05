import * as React from "react";
import {Group, Input, Label, NumberField, NumberFieldProps} from "react-aria-components";
import {CustomButton} from "./CustomButton.tsx";
import styles from "../styles/CustomNumberInput.module.css";
import {MinusIcon} from "./icons/MinusIcon.tsx";
import {PlusIcon} from "./icons/PlusIcon.tsx";

interface NumberInputProps extends NumberFieldProps {
  label: string;
  value: number;
  disabled: boolean;
  onChange: (newValue: number) => void;
}

export const CustomNumberInput: React.FC<NumberInputProps> = (props: NumberInputProps) => {
  return (
    <NumberField {...props} className={styles.numberField} value={props.value} onChange={props.onChange}>
      <Label>{props.label}</Label>
      <Group className={styles.numberInputGroup}>
        <CustomButton size={"small"}
                      color={"secondary"}
                      appearance={"compact"}
                      disabled={props.minValue !== undefined && props.value <= props.minValue}
                      slot={"decrement"}
                      icon={<MinusIcon />} />
        <Input className={styles.numberInput}/>
        <CustomButton size={"small"}
                      color={"secondary"}
                      appearance={"compact"}
                      disabled={props.maxValue !== undefined && props.value >= props.maxValue}
                      slot={"increment"}
                      icon={<PlusIcon />} />
      </Group>
    </NumberField>
  );
}