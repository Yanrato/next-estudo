import clsx from 'clsx';
import { Suspense } from 'react';
import { SpinLoader } from '@/components/SpinLoader/page';
import PostsList from '@/components/PostsList/page';
import { Container } from '@/components/Container/page';
import Header from '@/components/Header/page';

export default async function HomePage() {
  

  return (
    <Container>
       
      <Header />

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

