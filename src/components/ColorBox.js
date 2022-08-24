import styles from "../styles/ColorBox.module.css";

const ColorBox = (props) => {
  return (
    <div
      className={styles["color-box-wrapper"]}
      style={{ backgroundColor: `#${props.colorHex}` }}
    >
      <h1>What color is this?</h1>
    </div>
  );
};

export default ColorBox;
