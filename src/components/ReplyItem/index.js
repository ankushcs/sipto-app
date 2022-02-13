import "../../Styles/ReplyItem/ReplyItem.css";

const ReplyItem = (props) => {
    return(
        <div className="reply-item-container">
            <h2>{props.name}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat maxime tempora, corrupti aut officiis pariatur illo perferendis possimus, odio sapiente omnis?</p>
        </div>
    )
}


export default ReplyItem