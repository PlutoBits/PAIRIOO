import { Route, Routes, Navigate } from "react-router-dom";
import { Pages } from "./Types/Types";
import Navbar from "./components/Navbar";
import { Fragment } from "react";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        {Pages.map((Page) => (
          <Fragment key={Page.PageName}>
            <Route path={Page.Link} element={Page.element} />
            {Page.params == true && (
              <Route
                path={`${Page.Link}/${Page.paramsId}`}
                element={Page.paramsElement}
              />
            )}
          </Fragment>
        ))}
        <Route path="/" element={<Navigate to="/work" replace />} />
      </Routes>
    </>
  );
}

export default App;
