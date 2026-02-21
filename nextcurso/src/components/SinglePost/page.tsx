import { findPostBySlugCached } from "@/lib/post/queries";
import Image from "next/image";
import { PostHeading } from "../PostHeading/page";
import PostDate from "../PostDate/page";
import { SafeMarkdown } from "../SafeMarkdown/page";


type SinglePostProps = {
  slug: string
}


export async function SinglePost({slug}: SinglePostProps) {
  const post = await findPostBySlugCached(slug);
  return (
    <article className="mb-16">
      <header className="group flex flex-col gap-4 mb-4">
      <Image 
      className="rounded-xl"
      src={post.coverImageUrl} 
      alt={post.title} 
      width={1200} 
      height={720}
      />

      <PostHeading url={`/posts/${post.slug}`}>{post.title}</PostHeading>

      <div className="flex flex-grid">
      <p>{post.author}   <PostDate dateTime={post.createdAt} /></p>
     </div> 
     </header>

     <p className="text-xl mb-4">{post.excerpt}</p>
     
     <SafeMarkdown markdown={post.content}/>

    </article>
    
  )
}