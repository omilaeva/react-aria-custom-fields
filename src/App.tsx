import {CustomTextInput} from "./components/CustomTextInput.tsx";
import styles from "./styles/App.module.css";
import {CustomButton} from "./components/CustomButton.tsx";
import {TrashIcon} from "./components/icons/TrashIcon.tsx";
import {CustomNumberInput} from "./components/CustomNumberInput.tsx";
import {useState} from "react";
import {CustomSlider} from "./components/CustomSlider.tsx";

function App() {
  const minSize: number = 0;
  const maxSize: number = 100;

  const [name, setName] = useState<string>("");
  const [size, setSize] = useState<number>(0);

  const handleChange = (newValue: number) => {
    setSize(newValue ? newValue : 0);
  }

  const handleOnClear = () => {
    setSize(0);
    setName("");
  }

  const handleOnSubmit = () => {
    setSize(0);
    setName("");
    console.log("Submitted");
  }

  const handleOnNameChange = (value: string)=> {
    setName(value);
  }

  const isChanged = name.length > 0 || size != 0;
  return (
    <form className={styles.testingForm}>
      <CustomTextInput label={"Name"}
                       disabled={false}
                       value={name}
                       placeholder={"enter text"} onChange={handleOnNameChange}/>
      <div className={styles.rowContainer}>
        <CustomNumberInput minValue={minSize} maxValue={maxSize} label={"Size (GB)"}
                           disabled={false}
                           value={size} onChange={handleChange}/>
        <CustomSlider value={size} minValue={minSize} maxValue={maxSize}
                      onChange={handleChange} aria-label={"Size (GB)"}/>
      </div>
      <div className={styles.rowContainer}>
        <CustomButton variant={"outlined"} disabled={!isChanged}
                      onPress={handleOnClear} icon={<TrashIcon />}>
          Clear
        </CustomButton>
        <CustomButton disabled={!isChanged}
                      onPress={handleOnSubmit}>
          Submit
        </CustomButton>
      </div>
    </form>
  )
}

export default App
