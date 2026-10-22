import type { SelectionThreeColsProps } from "../Types/Types.tsx";
import Card from "./Card.tsx";

function SelectionThreeCols({
  Topic,
  ElementMapOne = [],
  ElementMapTwo = [],
  ElementMapThree = [],
}: SelectionThreeColsProps) {
  return (
    <>
      <div className="SelectionContainer">
        <h1 className="SelectionTopic">{Topic}</h1>
        <div className="CardContainerThreeCols">
          <div className="SelectionOne">
            {ElementMapOne.map((Data, key) => (
              <Card
                Image={Data.Image}
                Title={Data.Title}
                MadeYear={Data.MadeYear}
                Kind={Data.Kind}
                key={key}
              />
            ))}
          </div>
          <div className="SelectionTwo">
            {ElementMapTwo.map((Data, key) => (
              <Card
                Image={Data.Image}
                Title={Data.Title}
                MadeYear={Data.MadeYear}
                Kind={Data.Kind}
                key={key}
              />
            ))}
          </div>
          <div className="SelectionThree">
            {ElementMapThree.map((Data, key) => (
              <Card
                Image={Data.Image}
                Title={Data.Title}
                MadeYear={Data.MadeYear}
                Kind={Data.Kind}
                key={key}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default SelectionThreeCols;
