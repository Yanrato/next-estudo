import { findPostBySlugCached } from "@/lib/post/queries";


type SinglePostProps = {
  slug: string
}


export async function SinglePost({slug}: SinglePostProps) {
  const post = await findPostBySlugCached(slug);
  return (
    <div>
      <h1>{post.content}</h1>
    </div>
    
  )
}