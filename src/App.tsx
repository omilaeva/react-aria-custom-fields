// import {TextField, Label, Input} from 'react-aria-components';
import {TextInputComponent} from "./components/TextInputComponent.tsx";
import styles from "./App.module.css";
import {ButtonComponent} from "./components/ButtonComponent.tsx";
// import {FaPlus, FaTrash} from "react-icons/fa";
import {TrashIcon} from "./components/icons/TrashIcon.tsx";
import {NumberInput} from "./components/NumberInput.tsx";
import {useState} from "react";
import {CustomSlider} from "./components/CustomSlider.tsx";
// import plusIcon from "./assets/plus.svg";
// import minusIcon from "./assets/minus.svg";
// import clearIcon from "./assets/clear.svg"

function App() {
  const [size, setSize] = useState<number>(0);

  const handleChange = (newValue: number) => {
    setSize(newValue);
  }

  return (
    <form className={styles.testingForm}>
      <TextInputComponent label={"Name"}
                          focused={true}
                          disabled={false}
                          placeholder={"enter text"}/>
      <div className={styles.buttonContainer}>
        <NumberInput label={"Size (GB)"} focused={true} disabled={false}
                     value={size} onChange={handleChange}/>
        <CustomSlider value={size} minValue={0} maxValue={100} onChange={handleChange}/>
      </div>
      <div className={styles.buttonContainer}>
        <ButtonComponent size={"small"} variant={"outlined"} color={"primary"} disabled={false}
                         onPress={() => console.log("Clear")} icon={<TrashIcon />}>
          Clear
        </ButtonComponent>
        <ButtonComponent size={"small"} variant={"contained"} color={"primary"} disabled={false}
                         onPress={() => console.log("Submit")}>
          Submit
        </ButtonComponent>
      </div>
    </form>
  )
}

export default App
