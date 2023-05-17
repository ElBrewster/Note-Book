import { Outlet } from "@remix-run/react";
import { LinksFunction } from "@remix-run/node";

import stylesHref from "app/styles/note-reading.css";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: stylesHref
    }
  ]
}

export default function Read() {
    return (
        <div className="bodyContentWrapper">
            <header></header>
            <h1>read</h1>
            <main>
                <Outlet />
            </main>
            <footer>.</footer>
        </div>
    );
}