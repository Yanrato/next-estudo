import { PostHeading } from "../PostHeading/page";
import { PostCoverImage } from "../PostCoverImage/page";

      
      export default function PostFeatured() {
        const slug = 'qualquer';
        const postLink = `/post/${slug}`;
          

  return (
      <section className='grid grid-cols-1 gap-8 mb-16 
      sm:grid-cols-2
      group'>
        
        <PostCoverImage linkProps={{
          href: postLink,
          className: ''
        }} 
        imageProps={{
          src: '/images/bryen_3.png',
          width: 1200,
          height: 720,
          alt: 'Capa do post',
          priority: true,
        }}
        />
         
        <div>
          <time className='text-slate-600 block text-sm/tight'                
           dateTime='2024-01-01'>Janeiro de 2024</time> 
        <PostHeading as='h1' url={postLink}>Lorem ipsum dolor sit amet consectetur</PostHeading>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ipsa quisquam, earum nihil accusantium voluptate tenetur error consequatur in iusto ut incidunt asperiores eos quis inventore quibusdam dolorum sed laborum.</p>
        </div>
        </section>
        );
      }