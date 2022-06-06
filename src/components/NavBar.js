import React from "react";

function NavBar(props) {
  const links = ["home", "about", "projects"];

  const linksName = links.map((link) => {
    return <a key = {link} href={'#' + link}>{link}</a>
  })
  return (
  <nav>
    {linksName}
  </nav>
  )
}

export default NavBar;
