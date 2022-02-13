import '../../Styles/Card/Card.css'

const Card = (props) => {
  return (
    <div className="home-card">
      <img src={props.imgUrl} alt="sipto img" className="home-card-image" />
      <div className="home-card-text-container">
      <h1 className="home-card-title">Lorem Ipsum</h1>
      <p className="home-card-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, maiores?
        Eum, asperiores porro, nemo tenetur debitis dicta numquam culpa dolor
        dolorem mollitia ducimus, ex inventore quia molestiae dolore quae?
        Minima!
      </p>
      </div>
    </div>
  );
};

export default Card;
