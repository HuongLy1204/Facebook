import "./Story.css"

function Story(prop){
return (
    <button className="story-item">
    <div>{prop.dataStory.content}</div>
    <span>{prop.dataStory.name}</span>
    <img src={prop.dataStory.avatar}/>
    </button>
)
}
export default Story