import React from "react";
import { MdOutlinePushPin, MdOutlineEdit, MdDelete } from "react-icons/md";

const NoteCard = ({
  title,
  date,
  content,
  tags,
  isPinned,
  onEdit,
  onDelete,
  onPinNote,
}) => {
  return (
    <div className="border p-3 rounded-md space-y-3">
      <div className="flex justify-between">
        <span className="">
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="text-sm leading-tight">{date}</p>
        </span>
        <MdOutlinePushPin className="size-5 text-gray-500 hover:text-black cursor-pointer"/>
      </div>
      <p className="text-wrap">{content?.slice(0, 60)}</p>
      <p className="text-gray-500">{tags}</p>
      <div className="flex justify-between items-center">
        <button className="flex items-center gap-1 border rounded p-2">
          Edit
          <MdOutlineEdit onClick={onEdit} />
        </button>
        <button className="flex items-center gap-1 border rounded p-2 cursor-pointer hover:text-red-500">
            Delete
          <MdDelete onClick={onDelete} className="hover:text-red-500" />
        </button>
      </div>
    </div>
  );
};

export default NoteCard;
