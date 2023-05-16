import { Outlet } from "@remix-run/react";

export default function Read() {
    return (
        <div>
            <h1>read</h1>
            <Outlet />
        </div>
    );
}