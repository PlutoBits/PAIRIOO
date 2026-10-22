import { Pages, Links } from "../Types/Types";
import { Link } from "react-router-dom";
import ExtLink from "./ExtLink";

function ColsStart() {
  return (
    <div className="colsStart">
      {Links.map((LinkData) => (
        <ExtLink href={LinkData.Link} key={LinkData.Name}>
          {LinkData.Name.toUpperCase()}
        </ExtLink>
      ))}
    </div>
  );
}
function ColsEnd() {
  return (
    <div className="colsEnd">
      {Pages.map((PageData) => (
        <Link to={PageData.Link} key={PageData.PageName}>
          {PageData.PageName.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="Footer">
        <span className="FooterFirst">
          <p>@Pairio Anklet {currentYear}</p>
        </span>
        <span className="cols">
          {Pages.length >= Links.length ? (
            <>
              <ColsStart />
              <ColsEnd />
            </>
          ) : (
            <>
              <ColsEnd />
              <ColsStart />
            </>
          )}
        </span>
      </div>
    </>
  );
}

export default Footer;
