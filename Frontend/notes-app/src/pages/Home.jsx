import React from "react";
import NoteCard from "../components/NoteCard";

export const Home = () => {
  return (
    <div className="my-10 grid md:grid-cols-3 grid-cols-1 gap-5">
      <NoteCard
        title="hello"
        date="4th July 2024"
        content="Hello this is Rajeev, this is my MERN stack notes app"
        tags="#Meeting"
        isPinned={true}
        onEdit={() => {}}
        onDelete={() => {}}
        onPinNote={() => {}}
      />
       <NoteCard
        title="hello"
        date="4th July 2024"
        content="Hello this is Rajeev, this is my MERN stack notes app"
        tags="#Meeting"
        isPinned={true}
        onEdit={() => {}}
        onDelete={() => {}}
        onPinNote={() => {}}
      />
       <NoteCard
        title="hello"
        date="4th July 2024"
        content="Hello this is Rajeev, this is my MERN stack notes app"
        tags="#Meeting"
        isPinned={true}
        onEdit={() => {}}
        onDelete={() => {}}
        onPinNote={() => {}}
      />
    </div>
  );
};
