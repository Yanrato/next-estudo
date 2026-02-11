import { PostHeading } from "../PostHeading/page";
import { formatDateTime, formatDistanceToNow } from "@/utils/format-datetime";

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

                        <time className='text-slate-600 block text-sm/tight'                
                        dateTime={createdAt}
                        title={formatDistanceToNow(createdAt)}>
                          
                        {formatDateTime(createdAt)}

                        </time>

                        <PostHeading as={postHeading} url={postLink}>
                          {title}
                        </PostHeading>              
                        <p>{excerpt}</p>            
                        </div> 
  );
}
