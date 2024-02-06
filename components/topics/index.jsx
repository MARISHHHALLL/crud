import { EditIcon, TrashIcon } from "@/icons";
import Link from "next/link";

const getTopic = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("fetching failed");
    }
    return res.json();
  } catch (error) {
    console.log("loading failed: ", error);
  }
};

export default async function Topics() {
  const { topics } = await getTopic();
  return (
    <div className="flex flex-col gap-2">
      {topics.map((item) => (
        <SingleTopic items={item} key={item._id} />
      ))}
    </div>
  );
}

const SingleTopic = ({ items }) => {
  return (
    <div className="bg-[#f4f4f5] rounded-3xl py-4 px-5 text-black flex flex-row justify-between ">
      <div className="flex-[.9]">
        <h1 className="text-2xl font-medium">{items.title}</h1>
        <p className=" text-sm text-black text-opacity-60 font-medium">
          {items.description}
        </p>
      </div>
      <div className="flex flex-col gap-1">
        <Link href={`/edit-topic/${items._id}`}>
          <button className="bg-white p-2 rounded-lg text-sm font-medium flex flex-row items-center gap-1">
            <EditIcon /> Update
          </button>
        </Link>
        <button className="bg-red-700 text-white p-2 rounded-lg text-sm font-medium flex flex-row items-center gap-1">
          <TrashIcon />
          Delete
        </button>
      </div>
    </div>
  );
};
