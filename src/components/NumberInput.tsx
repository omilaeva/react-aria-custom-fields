import {Group, Input, Label, NumberField} from "react-aria-components";
import {ButtonComponent} from "./ButtonComponent.tsx";
import styles from "../styles/NumberInput.module.css";
import {MinusIcon} from "./icons/MinusIcon.tsx";
import {PlusIcon} from "./icons/PlusIcon.tsx";

interface NumberInputProps {
  label: string;
  value: number;
  focused: boolean;
  disabled: boolean;
  onChange: (newValue: number) => void;
}

export const NumberInput: React.FC<NumberInputProps> = (props: NumberInputProps) => {
  return (
    <NumberField defaultValue={0} className={styles.numberField} value={props.value} onChange={props.onChange}>
      <Label>{props.label}</Label>
      <Group className={styles.numberInputGroup}>
        <ButtonComponent size={"small"}
                         variant={"contained"}
                         color={"secondary"}
                         disabled={false}
                         slot={"decrement"}
        icon={<MinusIcon />} />
        <Input className={styles.numberInput}/>
        <ButtonComponent size={"small"} variant={"contained"} color={"secondary"}
                         disabled={false} slot={"increment"} icon={<PlusIcon />} />
      </Group>
    </NumberField>
  );
}