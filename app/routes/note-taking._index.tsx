import { Form, Link, useActionData, useParams } from "@remix-run/react";
import type { ActionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { db } from "~/utils/db.server";
import MyTextarea from "~/components/MyTextarea";
import { useState } from "react";

type InitialState = 
  { title: string, category: string, body: string };

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
  console.log("noteInput: ", noteInput)
  console.log("note: ", note);
  return json({ title, category, body });
};

export default function NoteTakingIndex() {
  const data = useActionData<typeof action>();

  const [richFormData, setRichFormData] = useState<InitialState>({ title: "", category: "", body: "" })

  console.log({richFormData});
  console.log("richformdata.title:", richFormData.title)
  return (
    <div className="noteForm">
      <h3>note taking index </h3>
      <MyTextarea setRichFormData={setRichFormData} richFormData={richFormData}/>

      <section>
        <h3>{richFormData ? richFormData.title : ""}</h3>
        <p>{richFormData ? richFormData.category : ""} </p>
        <p>{richFormData ? richFormData.body : ""}</p>
      </section>
      <Form method="post" id="myNotesForm">
        <input type="hidden" name="title" value={richFormData.title} placeholder="title" />
        <input type="hidden" name="category" value={richFormData.category} placeholder="category" />
        <input type="hidden" name="body" value={richFormData.body} placeholder="body" />

        <div className="buttonWrapper">
          <button type="submit" className="submitBtn">
            Add to Notebook:
          </button>
        </div>
      </Form>

      <div className="redirectBtn">
        <Link to="/note-reading">
          <button>Go See All My Notes</button>
        </Link>
      </div>
    </div>
  );
}
