import { useEffect, useCallback, useState } from "react";
import styles from "../styles/WordBox.module.css";
import GuessingComponent from "./GuessingComponent";

const WordBox = (props) => {
  const wordSplit = props.colorName.split("");
  const keys = [
    "Q",
    "W",
    "E",
    "R",
    "T",
    "Y",
    "U",
    "I",
    "O",
    "P",
    "A",
    "S",
    "D",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
    "Z",
    "X",
    "C",
    "V",
    "B",
    "N",
    "M",
  ];

  const [selectedLetter, setSelectedLetter] = useState();
  const [currentFocus, setCurrentFocus] = useState(0);
  const guessArray = [];
  guessArray.length = wordSplit.length;
  console.log(guessArray);

  const handleKeyboard = useCallback((event) => {
    if (event.key === "Enter" || event.key === "Tab") {
      event.preventDefault();
      currentFocus < wordSplit.length - 1
        ? setCurrentFocus(currentFocus + 1)
        : setCurrentFocus(0);      
    }

    if (event.key === "Backspace") {
      if (currentFocus > 0) {
        setCurrentFocus(currentFocus - 1);
      }
    }

    keys.forEach((key) => {
      if (event.key.toLowerCase() === key.toLowerCase()) {
        setSelectedLetter(key);
        setCurrentFocus(currentFocus + 1);
      }
    });
  });

  const calculateGap = (array, index) => {
    if (array[index - 1] === " ") {
      return true;
    }
    return false;
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);
    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    };
  }, [handleKeyboard]);

  const Word = wordSplit.map((letter, index, array) => (
    <GuessingComponent
      gap={calculateGap(array, index)}
      focus={currentFocus}
      selectedLetter={selectedLetter}
      index={index}
      key={Math.random()}
      value={letter}
    >
      {props.children}
    </GuessingComponent>
  ));

  return (
    <div className={styles["word-box-wrapper"]}>
      <div className={styles["word-guess-box"]}>{Word}</div>
    </div>
  );
};

export default WordBox;
