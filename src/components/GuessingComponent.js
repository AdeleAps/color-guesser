import styles from "../styles/GuessContainer.module.css";

const GuessingComponent = (props) => {

  return (
    <span
      tabIndex={props.index} className={`${styles["guess-container"]} ${
        props.value === " " ? styles["gap"] : ""
      } ${
        props.index === props.focus ? styles["focus"] : ""
      }`}
    >{ props.index === props.focus && props.selectedLetter}
    </span>
  );
};

export default GuessingComponent;
