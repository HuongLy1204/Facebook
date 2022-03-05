import Myavar from "./../../Asset/avatar.jpeg"
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import ImageIcon from '@mui/icons-material/Image';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function UpdateStatus(){
return(
    <div className="status-container">
        <div>
            <img src={Myavar}></img>
            <input type="search"/>
        </div>
        <div>
        <Stack direction="row" spacing={2}>
      <Button  startIcon={< VideoCameraFrontIcon/>}>
        Video trực tuyến
      </Button>
      <Button  endIcon={< ImageIcon/>}>
        Ảnh/ video
      </Button>
      <Button  endIcon={< SentimentVerySatisfiedIcon/>}>
        Cảm xúc
      </Button>
    </Stack>
        </div>
    </div>
)
}
export default UpdateStatus