import type { V2_MetaFunction } from "@remix-run/node";
import { Link, Outlet } from "@remix-run/react";
import Footer from "~/components/Footer";

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
      <Footer />
    </div>
  );
}
