import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import "leaflet/dist/leaflet.css";
import { GeneralButton } from "../../components/GeneralButton/GeneralButton";
import "./Contact.css";
import { Map } from "./Map";

export const Contact = () => {
  return (
    <div className="contact-container">
      <Map />
      <div className="contact-info">
        <div className="contact">
          <LocationOnOutlinedIcon className="icon" />
          <p>Calle Compositor Lehmberg 11, Málaga, 29007</p>
        </div>
        <div className="contact">
          <LocalPhoneOutlinedIcon className="icon" />
          <p>+34 644 12 23 34</p>
        </div>
        <div className="contact">
          <EmailOutlinedIcon className="icon" />
          <p>bikeville@gmail.com</p>
        </div>

        <form className="contact-form" action="">
          <h4>Send us a message</h4>
          <label htmlFor="">Name</label>
          <input type="text" />
          <label htmlFor="">Email</label>
          <input type="text" />
          <label htmlFor="">Message</label>
          <textarea name="" id="" cols="30" rows="8"></textarea>
          <GeneralButton text={"SUBMIT"} />
        </form>
      </div>
    </div>
  );
};
