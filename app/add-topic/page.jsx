"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
const AddTopicPage = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert("title or desciption dont found!!!");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: {
          "Contect-Type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });
      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("failed to create this post");
      }
    } catch (error) {
      console.log("failed :", error);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        type="text"
        placeholder="title"
        className="bg-[#f4f4f5] p-2 border-2 rounded-lg border-black"
      />
      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        type="text"
        placeholder="description"
        className="bg-[#f4f4f5] p-2 border-2 rounded-lg border-black"
      />
      <button type="submit">add topic</button>
    </form>
  );
};
export default AddTopicPage;
