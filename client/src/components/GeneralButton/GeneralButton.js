import "./GeneralButton.css";

export const GeneralButton = ({ type, text, passedEvent }) => {
  return (
    <button onClick={passedEvent} type={type} className="general-btn">
      {text}
    </button>
  );
};
