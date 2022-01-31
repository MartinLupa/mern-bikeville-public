import "./OtherServiceItem.css";

export const OtherServiceItem = ({ img, text }) => {
  return (
    <div className="other-service-container">
      <input type="radio" />
      <img className="other-img" src={img} alt="" />
      <p>{text}</p>
    </div>
  );
};
