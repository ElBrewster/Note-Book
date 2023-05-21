//note-taking route at URL "/note-taking/smol", this replaces "/note-taking._index.tsx" at the Outlet in the main tag in note-taking.tsx(the layout)
//because of dot notation, this is a standalone route

export default function Smol() {
  return (
    <div>
      Smol
      <p>
        This is a new route in the note-taking layout route with URL
        "/note-taking/smol"
      </p>
      <p>
        It only includes html from "note-taking.tsx" and ignores
        "note-taking._index.tsx"
      </p>
      <p>
        So the _index is default contents of "note-taking.tsx" where "Outlet"
        indicates to add in "main"
      </p>
    </div>
  );
}
