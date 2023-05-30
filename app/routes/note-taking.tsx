import { Outlet, Link } from "@remix-run/react";
import { LinksFunction } from "@remix-run/node";
import stylesHref from "app/styles/note-taking.css";
import Footer from "~/components/Footer";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: stylesHref,
    },
  ];
};

export default function NoteTaking() {
  return (
    <div className="bodyContentWrapper">
      <header>
        <nav className="navContainer">
        <Link to="/note-reading">
          <button className="navButton">Go Read My Notes</button>
        </Link>
        </nav>
      </header>
      <main>
      <h1>Take A Note If You Want</h1>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
