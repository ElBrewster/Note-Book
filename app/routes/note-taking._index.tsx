import { Form, Outlet, useActionData } from "@remix-run/react";
import type { ActionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { db } from "~/utils/db.server";

export const action = async ({ request }: ActionArgs) => {
    const formData = await request.formData();
    const title = formData.get("title");
    const body = formData.get("body");

    if((typeof title !== "string") || (typeof body !== "string")) {
        throw new Error("Form not stringy!");
    }

    const noteInput = { title, body };
    const note = await db.note.create({ data: noteInput });
    console.log("noteInput: ", noteInput)
    return json({title, body});
}

//actions/loaders allow you to:
//co-locate data read, component that renders the data, and the data writes
export default function NoteTakingIndex() {
    const data = useActionData<typeof action>();

    return (
        <div className="noteForm">
            <h3>note taking index </h3>
            <Form method="post" >
                <input type="text" name="title" placeholder="note title"/>
                <textarea name="body" placeholder="note content" ></textarea>
                <button type="submit">Save</button>
            </Form>
            <section>
                <Outlet />
                <h3>{data ? data.title : ""}</h3>
                <p>{data ? data.body : ""}</p>
            </section>
            <div className="redirectButton">
            <button>See All My Notes</button>
            </div>
        </div>
    );
}