import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { db } from "~/utils/db.server";

export const loader = async () => {
    return json({
        notes: await db.note.findMany(),
    });
};

export default function ReadIndex() {
    const data = useLoaderData<typeof loader>();
    return (
        <div>
            <h2>read._index</h2>
            {data.notes.map(note => (
                <section>
                    <h3>{note.title}</h3>
                    <p>{note.body}</p>
                </section>
            ))}
        </div>
    );
}