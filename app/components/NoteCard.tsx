type Note = {
   note: { id: number, title: string, category: string, body: string };
}

function handleClick( ){
    alert("Are you sure you want to delete this?")
}
export default function NoteCard({note}: Note) {
    return (
        <section className="noteCard" key={note.id}>
            <header className="noteCardHeader">
                <h2 className="noteCardTitle">{note.title}</h2>
                <button type="button" className="trashIcon" onClick={handleClick}>🗑️</button>
            </header>
            <p className="noteCardBody">{note.body}</p>
        </section>
    )
}