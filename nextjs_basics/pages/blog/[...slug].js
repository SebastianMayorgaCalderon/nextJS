import React from "react";
import { useRouter } from "next/router";

const BlogPostPage = () => {
  const router = useRouter();
  const { pathname, query } = router;
  console.log(pathname);
  console.log(query);
  return (
    <div>
      BlogPostPage <h1>{JSON.stringify(query)} </h1>
    </div>
  );
};

export default BlogPostPage;
