import Myavar from "./../../Asset/avatar.jpeg"
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import ImageIcon from '@mui/icons-material/Image';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import "./UpdateStatus.css"

function UpdateStatus(){
return(
    <div className="status-container">
        <div className="input-container">
            <img className="my-avatar" src={Myavar}></img>
            <input value={"   LY ơi, Bạn đang nghĩ gì thế?"} className="input-search" type="search"/>
        </div>
        <div className="button-container">
        <button className="button-item">
          <button>
            <VideoCameraFrontIcon></VideoCameraFrontIcon>
          </button>
          <span>Video trực tiếp</span>
        </button>
        <button className="button-item">
          <button>
            <ImageIcon></ImageIcon>
          </button>
          <span>Ảnh/ video</span>
        </button>
        <button className="button-item">
          <button>
            <SentimentVerySatisfiedIcon></SentimentVerySatisfiedIcon>
          </button>
          <span>Cảm xúc/ Hoạt động</span>
        </button>
        </div>
    </div>
)
}
export default UpdateStatus