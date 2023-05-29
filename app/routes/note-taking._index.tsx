//note-taking route "main" tag default contents, displayed in note-taking.tsx <Outlet>

import { Form, Link, Outlet, useActionData, useParams } from "@remix-run/react";
import type { ActionArgs, ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { db } from "~/utils/db.server";
import MyTextarea from "~/components/MyTextarea";
import { useState } from "react";

type InitialState = 
  { title: string, category: string, textarea: string };

export const action = async ({ request }: ActionArgs) => {
  const formData = await request.formData();
  const title = formData.get("title");
  const category = formData.get("category");
  const body = formData.get("body");


  if (typeof title !== "string" || typeof body !== "string") {
    throw new Error("Form not stringy!");
  }

  const noteInput = { title, category, body };
  const note = await db.note.create({ data: noteInput });
  console.log("noteInput: ", noteInput);
  return json({ title, category, body });
};

export default function NoteTakingIndex() {
  const data = useActionData<typeof action>();

  const [richFormData, setRichFormData] = useState<InitialState>({ title: "", category: "", textarea: "" })

  console.log({richFormData});
  return (
    <div className="noteForm">
      <h3>note taking index </h3>
      <MyTextarea setRichFormData={setRichFormData} />

      <Form method="post" id="myNotesForm">
        <input type="text" name="title" placeholder="title" />
        <input type="text" name="category" placeholder="category" />
        <textarea
          name="body"
          aria-multiline="true"
          placeholder="content"
        ></textarea>
        <div className="buttonWrapper">
          <button type="submit" className="submitBtn">
            Save
          </button>
        </div>
      </Form>

      <div className="redirectBtn">
        <Link to="/note-reading">
          <button>See All My Notes</button>
        </Link>
      </div>
      <section>
        <Outlet />
        <h3>{data ? data.title : ""}</h3>
        <p>{data ? data.category : ""} </p>
        <p>{data ? data.body : ""}</p>
      </section>
      <div className="redirectBtn">
        <Outlet />
      </div>
    </div>
  );
}
