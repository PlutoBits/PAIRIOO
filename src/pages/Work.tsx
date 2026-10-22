import Sketchbook from "../components/SketchBook";
import Selection from "../components/Selection";
import Footer from "../components/Footer";
import { BookPages, WorkCardLeftData, WorkCardRightData } from "../Types/Types";
import { useParams } from "react-router-dom";

function WorkPage() {
  const { WorkTargetId } = useParams();
  console.log(WorkTargetId);
  return (
    <>
      <div className="MainWarp">
        <section className="WorkFirstSelection">
          <Sketchbook pages={BookPages} className="Book"></Sketchbook>
        </section>
        <section className="WorksCardSelection">
          <Selection
            Topic={"PROJECTS"}
            ElementMapLeft={WorkCardLeftData}
            ElementMapRight={WorkCardRightData}
          ></Selection>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default WorkPage;
