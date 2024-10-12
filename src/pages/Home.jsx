import "../styles/Home.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { homeSection } from "../data/HomeSection";
import { courseSection } from "../data/CourseSection";
import parser from "html-react-parser";

function Home() {
  return (
    <>
      <Navbar />

      <div className="wrapper">
        <section id="home">
          <img src={homeSection.image} />
          <div className="kolom">{parser(homeSection.content)}</div>
        </section>

        <section id="courses">
          <div class="kolom">{parser(courseSection.content)}</div>
          <img src={courseSection.image} />
        </section>
      </div>

      <Footer />
    </>
  );
}

export default Home;
