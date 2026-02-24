import { PostCoverImage } from "../PostCoverImage/page";
import PostSummary from "../PostSummary/page";
import { findAllPublicPostsCached } from "@/lib/post/queries";
 
      export default async function PostFeatured() {
        const posts = await findAllPublicPostsCached();
        const post = posts[0];

        
        const postLink = `/posts/${post.slug}`;
          

  return (
      <section className='grid grid-cols-1 gap-8 mb-16 
      sm:grid-cols-2
      group'>
        
        <PostCoverImage linkProps={{
          href: postLink,
          className: ''
        }} 
        imageProps={{
          src: post.coverImageUrl,
          width: 1200,
          height: 720,
          alt: post.title,
          priority: true,
        }}
        />
         
         <PostSummary
          title= {post.title}
          excerpt= {post.excerpt}  
          createdAt= {post.createdAt} 
          postHeading='h1' 
          postLink={postLink} 
           />   
        </section>
        );
      }