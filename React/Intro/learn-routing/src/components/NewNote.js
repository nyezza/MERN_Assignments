import React from 'react'

const NewNote = () => {
  return (
    <div class="new-note-container">
      <form class="new-note-form">
        <h2>New Note</h2>
        <input type="text" name="title" placeholder="Note title" />
        <textarea rows="10" placeholder="Note text" />
        <button class="button primary">Save Note</button>
      </form>
    </div>
  );
}

export default NewNote