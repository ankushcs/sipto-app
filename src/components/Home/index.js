import "../../Styles/Home/index.css";
import Card from "../Card";
import Section from "../Section";
import ReplyItem from '../ReplyItem'

const imgUrl1 =
  "https://images.unsplash.com/photo-1624996379671-b4d0837e45cb?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8Y3J5cHRvfHx8fHx8MTY0NDc0Mzk5MQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400";

const imgUrl2 =
  "https://images.unsplash.com/photo-1630048421776-1f552787465d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8Y3J5cHRvfHx8fHx8MTY0NDc0NDA2NA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400";

const imgUrl3 =
  "https://images.unsplash.com/photo-1621501103258-3e135c8c1fda?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8Y3J5cHRvfHx8fHx8MTY0NDc0NDEzMA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400";

const imgUrl4 =
  "https://images.unsplash.com/photo-1629339941379-da30348cdba6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8Y3J5cHRvfHx8fHx8MTY0NDc1NjMyMw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400";

const imgUrl5 =
  "https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8Y3J5cHRvfHx8fHx8MTY0NDc1NjM3NQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400";

const imgUrl6 =
  "https://images.unsplash.com/photo-1620808244394-f4b654ff7d8b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8Y3J5cHRvfHx8fHx8MTY0NDc1NjQzOA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-first-container">
        <h1>most reliable crypto investment platform</h1>
      </div>
      <div className="home-second-container">
        <div className="home-second-container__text-container">
          <h1>What is Sipto?</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores
            quis natus suscipit at reprehenderit accusantium consequatur animi
            fugit, tempore temporibus aliquid eum et harum! Illum, deserunt!
            Quasi vitae adipisci sapiente!
          </p>
        </div>
        <div className="home-second-container__card-container">
          <Card imgUrl={imgUrl1} />
          <Card imgUrl={imgUrl2} />
          <Card imgUrl={imgUrl3} />
        </div>
      </div>
      <div className="home-third-container">
        <div className="home-third-container-text-container">
            <h1>How Sipto Works?</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus iusto adipisci eos autem recusandae fugit fuga quisquam voluptates nam odio, cupiditate enim! Distinctio laborum rerum odio! Enim iusto magnam illo?</p>
        </div>
        <div className="home-third-container-section-container">
          <Section imgUrl={imgUrl4} />
          <Section imgUrl={imgUrl5} />
          <Section imgUrl={imgUrl6} />
        </div>
      </div>
      <div className="home-fourth-container">
          <h1>Why You Should Invest Now With Sipto?</h1>
          <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus illum fugit quam laborum libero est asperiores aperiam commodi, harum odio nam sequi perspiciatis magnam qui animi consequuntur ullam. Magnam, voluptatem.
          </p>
          <button type="button" className="btn btn-primary">Invest Now</button>
      </div>
      <div className="home-fifth-container">
        <h1>What people say about Sipto?</h1>
        <div className="reply-items-container">
            <ReplyItem name="Rahul Singh"/>
            <ReplyItem name="Siddhant Verma"/>
            <ReplyItem name="Sai Vira Reddy"/>
            <ReplyItem name="Hema Kaul"/>
        </div>
      </div>
    </div>
  );
};

export default Home;
