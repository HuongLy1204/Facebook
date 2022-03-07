import "./Story.css"

function Story(prop){
return (
    <button className="story-item">
    <div>{prop.dataStory.content}</div>
    <span>{prop.dataStory.name}</span>
    <img className="my-avatars" src={prop.dataStory.avatar}/>
    </button>
)
}
export default Story