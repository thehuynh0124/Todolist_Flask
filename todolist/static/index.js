const deleteNote = (noteId) => {
    fetch("/delete-note", {
        method: "POST",
        body: JSON.stringify({ note_id: noteId }),
    }).then((Response) => {
        window.location.href = "/";
    })
}