"use client";
const EditTopicPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <input
        type="text"
        placeholder="title"
        className="bg-[#f4f4f5] p-2 border-2 rounded-lg border-black"
      />
      <input
        type="text"
        placeholder="description"
        className="bg-[#f4f4f5] p-2 border-2 rounded-lg border-black"
      />
      <button>update topic</button>
    </form>
  );
};
export default EditTopicPage;
