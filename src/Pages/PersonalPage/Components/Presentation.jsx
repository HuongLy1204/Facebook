import "./Presentation.css";
import Mycover from "../../../Asset/cover.jpeg";
import Myavatar from "../../../Asset/avatar.jpeg";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import AddIcon from '@mui/icons-material/Add';
import CreateIcon from '@mui/icons-material/Create';

function Presentation() {
  return (
    <div className="presentation-container">
      <div className="cover-container">
        <img src={Mycover} className="cover-item" />
        <button className="add-cover">
          <CameraAltIcon></CameraAltIcon>
          <span>Chỉnh sửa ảnh bìa</span>
        </button>
        <div className="avatar-container">
          <div>
            <img src={Myavatar} className="avatar-item" />
            <button className="add-newava">
              <CameraAltIcon></CameraAltIcon>
            </button>
          </div>
          <div className="infor-container">
            <h3>LY(AB)</h3>
            <h5>1,3K Bạn bè</h5>
            <div className="edit-container">
              <AvatarGroup max={4}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                <Avatar
                  alt="Trevor Henderson"
                  src="/static/images/avatar/5.jpg"
                />
              </AvatarGroup>
              <div className="edit-items">
                <button className="edit-item">
                  <AddIcon></AddIcon>
                  <span>Thêm vào tin</span> 
                  </button>
                <button className="edit-item">
                  <CreateIcon></CreateIcon>
                  <span>Chỉnh sửa trang cá nhân</span>
                  </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Presentation;
