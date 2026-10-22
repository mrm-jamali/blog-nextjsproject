"use client"
import { useState } from "react";


function page() {
  const [blog,setBlog]=useState("");
  const [details,setDeatails]=useState<string>("")
  return (
  <div className="mx-auto flex w-full max-w-md flex-col gap-4 rounded-xl border border-gray-200 bg-white p-6 shadow-md">
  <input
    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-right outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
    type="text"
    onChange={(e) => setBlog(e.target.value)}
    value={blog}
    placeholder="عنوان بلاگ"
  />

  <textarea
    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-right outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
    
    onChange={(e) => setDeatails(e.target.value)}
    value={details}
    placeholder="توضیحات"
  />

  <button className="rounded-lg bg-purple-600 px-4 py-3 font-medium text-white transition hover:bg-purple-700 active:scale-[0.98]">
    اضافه کردن بلاگ
  </button>
</div>
  )
}

export default page