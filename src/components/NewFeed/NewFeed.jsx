import Carousel from "react-material-ui-carousel";
import Stories from "../Stories/Stories";
import "./NewFeed.css";
import {Button} from '@mui/material';
import UpdateStatus from "../UpdateStatus/UpdateStatus";




function NewFeed(data) {
  return (
    <div className="newfeed-container">
      <Carousel>
        <Stories dataStories={data.dataNewFeed}></Stories>
        </Carousel>
        <UpdateStatus></UpdateStatus>
    </div>
  );
}
export default NewFeed;
