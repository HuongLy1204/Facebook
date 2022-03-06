import Carousel from "react-material-ui-carousel";
import Stories from "../Stories/Stories";
import "./NewFeed.css";
import {Button} from '@mui/material';
import UpdateStatus from "../UpdateStatus/UpdateStatus";
import Status from "../Status/Status";




function NewFeed(data) {
  return (
    <div className="newfeed-container">
      <Carousel>
        <Stories dataStories={data.dataNewFeed}></Stories>
        </Carousel>
        <UpdateStatus></UpdateStatus>
        <Status></Status>
    </div>
  );
}
export default NewFeed;
