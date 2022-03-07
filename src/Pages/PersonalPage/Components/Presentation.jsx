import "./Presentation.css";
import Mycover from "../../../Asset/cover.jpeg";
import Myavatar from "../../../Asset/avatar.jpeg";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
function Presentation() {
  return (
    <div className="presentation-container">
      <div className="cover-container">
        <img src={Mycover} className="cover-item" />
        <button className="add-cover">
          <CameraAltIcon></CameraAltIcon>
          <span>Chỉnh sửa ảnh bìa</span>
        </button>
        <img src={Myavatar} className="avatar-item" />
      </div>
    </div>
  );
}
export default Presentation;
