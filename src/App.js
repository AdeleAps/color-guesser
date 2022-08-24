import colorNames from "./assets/pantone-colors.json";
import "./App.css";
import ColorBox from "./components/ColorBox";
import WordBox from "./components/WordBox";

const colorValue = Object.values(colorNames);
const randomColor = colorValue[parseInt(Math.random() * colorValue.length)];
const {name: colorName, hex: colorHex} = randomColor;
const colorNameCleanedUp = colorName.replace("-", " ")
console.log(colorNameCleanedUp);
console.log(colorHex);

function App() {
  return (
    <div className="App">
      <ColorBox colorHex={colorHex} />
      <WordBox colorName={colorNameCleanedUp} />
    </div>
  );
}

export default App;
