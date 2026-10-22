"use client";

import { useEffect } from "react";

import { useState } from "react";
import type { Post } from "lib/api";

function blogshow() {
  const [blog, setBlog] = useState<Post[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/posts");
        const data = await response.json();
        setBlog(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return <div>
{blog.map((blog) =>   <p>{blog.title}</p>)}
  
  </div>;
}

export default blogshow;
