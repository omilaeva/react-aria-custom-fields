import styles from "../styles/ButtonComponent.module.css";
import * as React from "react";
import {ButtonColor, ButtonSize, ButtonVariant} from "../utilityTypes.ts";
import {Button} from "react-aria-components";

interface ButtonComponentProps {
  size: ButtonSize;
  variant: ButtonVariant;
  color: ButtonColor;
  disabled: boolean;
  icon?: React.ReactElement;
  children?: React.ReactNode;
  onPress?: () => void;
  slot?: string | null;
}

export const ButtonComponent: React.FC<ButtonComponentProps> = (props: ButtonComponentProps) => {
  const isSquare = props.icon && !props.children;

  return (
    <Button onPress={props.onPress}
            isDisabled={props.disabled}
            slot={props.slot}
            className={`${styles.button} ${styles[props.size]} ${styles[props.variant]} ${styles[props.color]} ${isSquare ? styles.buttonIcon : ""}`}>
      {props.icon &&
          <span className={`${styles.icon}`}>
            {props.icon}
          </span>
      }
      {props.children && <span className={styles.text}>{props.children}</span>}
    </Button>
  );
}