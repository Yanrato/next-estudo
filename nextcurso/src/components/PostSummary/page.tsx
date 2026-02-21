import PostDate from "../PostDate/page";
import { PostHeading } from "../PostHeading/page";


type PostSummaryProps = {
  postHeading: 'h1' | 'h2';
  postLink: string;
  excerpt: string;
  createdAt: string;
  title: string;
}

export default function PostSummary( { postHeading, postLink, createdAt, title, excerpt }: PostSummaryProps) {
  return (
    <div className='flex flex-col gap-4 sm:justify-center'>  

                        <PostDate dateTime={createdAt} />

                        <PostHeading as={postHeading} url={postLink}>
                          {title}
                        </PostHeading>              
                        <p>{excerpt}</p>            
                        </div> 
  );
}
