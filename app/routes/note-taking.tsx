import { Outlet } from "@remix-run/react";

export default function NoteTaking() {
    return (
        <div>
            <h1>note-taking</h1>
            <Outlet />
        </div>
    );
}