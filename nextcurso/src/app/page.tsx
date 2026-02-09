import clsx from 'clsx';
import { Suspense } from 'react';
import { SpinLoader } from '@/components/SpinLoader/page';
import { PostsList } from '@/components/PostsList/page';
import { Container } from '@/components/Container/page';
import Header from '@/components/Header/page';
import { PostCoverImage } from '@/components/PostCoverImage/page';
import { PostHeading } from '@/components/PostHeading/page';


export default async function HomePage() {
  

  return (
    <Container>
       
      <Header />

      <section className='grid grid-cols-1 gap-8 mb-16 
      sm:grid-cols-2
      group'>
        
        <PostCoverImage linkProps={{
          href: '#',
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
        <PostHeading as='h1' url='#'>Lorem ipsum dolor sit amet consectetur</PostHeading>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ipsa quisquam, earum nihil accusantium voluptate tenetur error consequatur in iusto ut incidunt asperiores eos quis inventore quibusdam dolorum sed laborum.</p>
        </div>
        </section>
      <Suspense fallback={<SpinLoader/>}>

         <PostsList />

      </Suspense>

      
     
     <footer className={clsx(
        'text-center',
         'mt-10',
         'py-8',
        'text-gray-500')}>
          Feito com Next.js
      </footer>
    </Container>
  )
}

