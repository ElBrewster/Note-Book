import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import NoteCard from "~/components/NoteCard";
import { db } from "~/utils/db.server";

type Note = {
    note: { id: number, title: string, category: string, body: string };
 }

export const loader = async () => {
    return json({
        notes: await db.note.findMany(),
    });
};

export default function ReadIndex() {
    const data = useLoaderData<typeof loader>();
    return (
        <div className="noteGrid">
            {/* <h3>I want a category nav</h3> */}
            {/* <h4>and I want a keyword filter for all notes</h4> */}
            {data.notes.map(note => (
                <NoteCard key={note.id} note={note}/>
            ))}
        </div>
    );
}