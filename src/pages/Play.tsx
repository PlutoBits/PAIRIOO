import SelectionThreeCols from "../components/SelectionThreeCols";
import {
  PlayCardOneData,
  PlayCardTwoData,
  PlayCardThreeData,
} from "../Types/Types";
import Footer from "../components/Footer";

function Play() {
  return (
    <>
      <div className="MainWarp">
        <section
          className="PlaysCardSelection"
          style={{ padding: `80px 4vw 0` }}
        >
          <SelectionThreeCols
            Topic={"PROJECTS"}
            ElementMapOne={PlayCardOneData}
            ElementMapTwo={PlayCardTwoData}
            ElementMapThree={PlayCardThreeData}
          />
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Play;
