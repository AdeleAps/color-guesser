import styles from "../styles/GuessContainer.module.css";

const GuessingComponent = (props) => {

  const spanLetter = (
    <span
      tabIndex={props.index}
      className={`${styles["guess-container"]} ${
        props.index === props.focus ? styles["focus"] : ""
      } ${
        props.gap ? styles["gap"] : ""
      } ${
        props.value === " " ? styles["hide"] : ""
      }  `}
    >{props.value}
      {props.index === props.focus && props.selectedLetter}
    </span>
  );

  return spanLetter;
};

export default GuessingComponent;
