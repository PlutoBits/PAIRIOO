import type { SelectionProps } from "../Types/Types.tsx";
import Card from "./Card.tsx";

function Selection({
  Topic,
  ElementMapRight = [],
  ElementMapLeft = [],
}: SelectionProps) {
  return (
    <>
      <div className="SelectionContainer">
        <h1 className="SelectionTopic">{Topic}</h1>
        <div className="CardContainer">
          <div className="SelectionLeft">
            {ElementMapLeft.map((Data, key) => (
              <Card
                Image={Data.Image}
                Title={Data.Title}
                MadeYear={Data.MadeYear}
                Kind={Data.Kind}
                key={key}
              />
            ))}
          </div>
          <div className="SelectionRight">
            {ElementMapRight.map((Data, key) => (
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

export default Selection;
