import { Outlet } from "@remix-run/react";
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
      <header></header>
      <h1>Take A Note If You Want</h1>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
