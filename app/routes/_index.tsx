import type { V2_MetaFunction } from "@remix-run/node";
import { Link, Outlet } from "@remix-run/react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { AiOutlineHeart } from "react-icons/ai";

export const meta: V2_MetaFunction = () => {
  return [{ title: "My Study Journal" }];
};

export default function Index() {
  return (
    <div className="bodyContentWrapper">
      <header>note book</header>
      <main>
        <div className="linkContainer">
          <Link to="note-taking" className="hotLink">take notes</Link>
          <Link to="note-reading" className="hotLink">read notes</Link>
        </div>
        <Outlet />
      </main>
      <footer>
      <div className="footerWrapper">
                <div className="footerNote">
                <small>made by me</small>&nbsp;
                    <AiOutlineHeart className="iconOutline" />
                    {/* link to personal website eventually */}
                </div>
                <a
                href="https://github.com/ElBrewster"
                aria-label="Go to El's github page"
                className="myLink"
                >
                    <SiGithub className="iconGit" />
                </a>
                <a
                href="https://www.linkedin.com/in/el-brewster/"
                aria-label="Go to El's linked-in page"
                className="myLink"
                >
                    <SiLinkedin className="iconLinked" />
                </a>
            </div>
      </footer>
    </div>
  );
}
