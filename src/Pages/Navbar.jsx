import React, { useState } from "react";
import "../Style/Navbar.css";
import { Link, Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {
  const { loginWithRedirect, user, isAuthenticated, isLoading, logout } =
    useAuth0();
  const { picture, email, name } = useAuth0();
  const [active, setActive] = useState(false);

  const handleChangeActive = () => {
    setActive(!active);
  };

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <>
      <header>
        <nav>
          <h1>Logo</h1>
          <ul>
            <li>
              <Link to="about">About</Link>
            </li>
            <li>
              {" "}
              <Link to="home">Home</Link>{" "}
            </li>
            {!isLoading && !user && (
              <Link onClick={() => loginWithRedirect()}>Login</Link>
            )}

            {!isLoading && user && (
              <button onClick={() => logout()}>Log Out</button>
            )}
            {isAuthenticated && user && (
              <article className="avatar" onClick={handleChangeActive}>
                <img src={user.picture} alt="" />
                {/* <h2>{user.name}</h2> */}
              </article>
            )}
          </ul>
        </nav>
        {/* <div className={`porfile-wrapper ${active ? "active" : ""}`}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h2>{user.name}</h2>
            <h4>{user.email}</h4>
          </div>
        </div> */}
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
}

export default Navbar;
