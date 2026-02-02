function ButtonComponent({ color, setColor,colorNm }) {
    return (
        <button
            onClick={() => setColor()}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: color }}>{colorNm}</button>
    )
}

export default ButtonComponent;