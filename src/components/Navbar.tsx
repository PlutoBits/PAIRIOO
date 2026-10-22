import { Link, NavLink } from "react-router-dom";
import { Links, Pages } from "../Types/Types";
import { MdOutlineExpandMore } from "react-icons/md";
import ExtLink from "./ExtLink";

function Navbar() {
  return (
    <>
      <div className="Navbar">
        <div className="NavIntro">
          <Link to="/work" className="NavIntro">
            <h1>Pairio Anklet</h1>
          </Link>
        </div>
        <div className="Mata">
          <div className="Tabs">
            {Pages.map((Page, key) => (
              <NavLink
                to={Page.Link}
                className={({ isActive }) =>
                  isActive ? "Links Active" : "Links"
                }
                key={key}
              >
                {Page.PageName}
              </NavLink>
            ))}
          </div>
          <div className="Socals">
            {Links.length > 4 ? (
              <>
                {Links.slice(0, 3).map((Link, key) => (
                  <ExtLink href={Link.Link} className="Links" key={key}>
                    {Link.LinkIcon}
                  </ExtLink>
                ))}
                {Links.length > 4 && (
                  <button
                    type="button"
                    className="MoreLinks"
                    aria-label="Scroll to Links"
                    onClick={() => {
                      document
                        .querySelector(".Footer")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    <MdOutlineExpandMore />
                  </button>
                )}
              </>
            ) : (
              Links.map((Link, key) => (
                <ExtLink href={Link.Link} className="Links" key={key}>
                  {Link.LinkIcon}
                </ExtLink>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
