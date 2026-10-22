import { useState } from "react";
import type { CardProps } from "../Types/Types";

function Card({ Image, Title, MadeYear, Kind }: CardProps) {
  const [isHovered, SetHoverState] = useState(false);
  return (
    <div
      className="Card"
      onMouseEnter={() => SetHoverState(true)}
      onMouseLeave={() => SetHoverState(false)}
    >
      <img src={Image} alt={Title} aria-hidden="true" />
      <div className={`CardDetail ${isHovered ? "CardDetail-show" : ""}`}>
        <p className="CardDetailTitle">{Title}</p>
        <p className="CardDetailKind">
          {MadeYear} • {Kind}
        </p>
      </div>
    </div>
  );
}

export default Card;
