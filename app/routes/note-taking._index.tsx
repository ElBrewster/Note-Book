//note-taking route "main" tag default contents, displayed in note-taking.tsx <Outlet>

import { Form, Link, Outlet, useActionData } from "@remix-run/react";
import type { ActionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { db } from "~/utils/db.server";
import MyTextarea from "~/components/MyTextarea";

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

//actions/loaders allow you to:
//co-locate data read, component that renders the data, and the data writes
export default function NoteTakingIndex() {
  const data = useActionData<typeof action>();

  return (
    <div className="noteForm">
      <h3>note taking index </h3>
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
          <input type="reset" value="Reset" className="resetBtn" />
        </div>
      </Form>
      <div className="redirectBtn">
        <Link to="/note-reading">
          <button>See All My Notes</button>
        </Link>
      </div>
      <MyTextarea />
      <section>
        <Outlet />
        <h3>{data ? data.title : ""}</h3>
        <p>{data ? data.category : ""} </p>
        <p>{data ? data.body : ""}</p>
        {/* it would be nice to have an "edit" button to fix up typos and etc. It makes sense for it to be here. I guess it would be another form to post the same stuff to the database but edited, is that "patch"? What a fun problem */}
        {/* following along this train of thought, it would be nice to edit past submissions too, from the 'read' view, but I'm not sure what I want for that either */}
      </section>
      <div className="redirectBtn">
        <Link to="/note-taking/smol">
          <button>See All My Notes</button>
        </Link>
        <Outlet />
      </div>
    </div>
  );
}
