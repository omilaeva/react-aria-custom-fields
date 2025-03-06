import {CustomTextInput} from "./components/CustomTextInput.tsx";
import styles from "./styles/App.module.css";
import {CustomButton} from "./components/CustomButton.tsx";
import {TrashIcon} from "./components/icons/TrashIcon.tsx";
import {CustomNumberInput} from "./components/CustomNumberInput.tsx";
import {useState} from "react";
import {CustomSlider} from "./components/CustomSlider.tsx";

const minSize: number = 0;
const maxSize: number = 100;

function App() {
  const [name, setName] = useState<string>("");
  const [size, setSize] = useState<number>(0);

  const handleSizeChange = (newValue: number) => {
    setSize(!isNaN(newValue) ? newValue : 0);
  }

  const clearForm = () => {
    setSize(0);
    setName("");
  }

  const handleOnClear = () => {
    clearForm();
  }

  const handleOnSubmit = () => {
    alert(`Submitted:
     Name: ${name}
     Size (GB): ${size}`);
    clearForm();
  }

  const handleOnNameChange = (value: string)=> {
    setName(value);
  }

  const isChanged = name.length > 0 || size != 0;
  return (
    <form className={styles.testingForm}>
      <CustomTextInput label={"Name"}
                       value={name}
                       placeholder={"enter text"} onChange={handleOnNameChange}/>
      <div className={styles.rowContainer}>
        <CustomNumberInput minValue={minSize} maxValue={maxSize} label={"Size (GB)"}
                           value={size} onChange={handleSizeChange}/>
        <CustomSlider value={size} minValue={minSize} maxValue={maxSize}
                      onChange={handleSizeChange} aria-label={"Size (GB)"}/>
      </div>
      <div className={styles.rowContainer}>
        <CustomButton variant={"outlined"} isDisabled={!isChanged}
                      onPress={handleOnClear} icon={<TrashIcon />}>
          Clear
        </CustomButton>
        <CustomButton isDisabled={!isChanged}
                      onPress={handleOnSubmit}>
          Submit
        </CustomButton>
      </div>
    </form>
  )
}

export default App
