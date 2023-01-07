import { useState } from "react";
import { ColorCard } from "./components/ColorCard";
import { randomColor } from "./util/util";

function App() {
  const [colors, setColors] = useState([
    randomColor(),
    randomColor(),
    randomColor(),
    randomColor(),
  ]);

  const updateColor = (newColor: string, index: number): void => {
    const currentColors = [...colors];
    currentColors[index] = newColor;
    setColors(currentColors);
  };

  return (
    <main className="container">
      {colors.map((color, index) => (
        <ColorCard
          key={index}
          color={color}
          onUpdateColor={(newColor) => updateColor(newColor, index)}
        />
      ))}
    </main>
  );
}

export default App;
