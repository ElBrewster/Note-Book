import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

async function seed() {
    await Promise.all(
        getNotes().map((note) => {
            return db.note.create({ data: note })
        })
    )
}

seed();

function getNotes() {
    return [
        {
            "title": "my hair care",
            "category": "shower thoughts",
            "body": "the truth is I don't have thoughts about this"
        },
        {
            "title": "lessons in scope",
            "category": "coding",
            "body": "I like scope creep too much to change my behavior"
        }
    ];
}
