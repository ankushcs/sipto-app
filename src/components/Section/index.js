import "../../Styles/Section/Section.css";

const Section = (props) => {
  return (
    <div className="section">
      <img alt="section img" src={props.imgUrl} className="section-img" />
      <div className="section-text-container">
        <h1>Lorem Ipsum</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non possimus
          hic corporis illo deleniti minus unde vel aliquam ab! Dolorum
          assumenda molestiae perspiciatis animi neque dolores qui aliquid vero
          eum.
        </p>
      </div>
    </div>
  );
};

export default Section;
