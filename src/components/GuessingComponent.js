import styles from "../styles/GuessContainer.module.css"


function checkGap(value) {
  if (value === "") {
    return `marginLeft: "50px"`
  }
}

const GuessingComponent = (props) => {
  return <span className={styles["guess-container"]}>{props.value}</span>;
};

export default GuessingComponent;

// checkGap(props.value)
