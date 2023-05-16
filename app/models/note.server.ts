import type { Note } from "@prisma/client";
import { db } from "~/utils/db.server";

export async function getNote(id: number){
    return db.note.findUnique({where: {id}});
}

export function createNote({title, category, body}: ) {
    return db.note.create({
        data: {
            title,
            category,
            body,
        }
    })
}