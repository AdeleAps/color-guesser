import styles from "../styles/WordBox.module.css";
import GuessingComponent from "./GuessingComponent";

const WordBox = props => {

const wordSplit = props.colorName.split("");
console.log(wordSplit);

const Word = wordSplit.map((letter) => <GuessingComponent value={letter}/>);
    
return <div className={styles["word-box-wrapper"]}>
    <div className={styles["word-guess-box"]}>
    {Word}
    </div>
</div>
}

export default WordBox;