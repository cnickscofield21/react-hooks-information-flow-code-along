import { getRandomColor } from "./randomColorGenerator.js";

function Child({ onChangeColor, color }) {
    function clickHandler() {
        const newColor = getRandomColor();
        onChangeColor(newColor);
    }

    return (
        <div
            onClick={clickHandler}
            className="child"
            style={{ backgroundColor: color }}
        />
    );
}

export default Child;
