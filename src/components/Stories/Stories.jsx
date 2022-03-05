import Story from "../Story/Story";
import "./Stories.css";
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'



// function Item(props)
// {
//     return (
//         <Paper>
//             <h2>{props.item.name}</h2>
//             <p>{props.item.description}</p>

//             <Button className="CheckButton">
//                 Check it out!
//             </Button>
//         </Paper>
//     )
// }

function Stories(data) {
  const handleShowupStory = () => {
    const resutl = data.dataStories.map((item) => {
      return<Story dataStory={item} />;
    });
    return resutl;
  };
  return(

    <div className="stories-container">
        <button className="story-item">
            <div>ly</div>
            <button>ly</button>
            <img/>
        </button>

           {handleShowupStory()}
        
       
      
        </div>
  )
}
      
  
export default Stories;
