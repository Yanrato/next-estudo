import clsx from 'clsx';
import { Suspense } from 'react';
import { SpinLoader } from '@/components/SpinLoader/page';
import { PostsList } from '@/components/PostsList/page';
import { Container } from '@/components/Container/page';
import Header from '@/components/Header/page';
import PostFeatured from '@/components/PostFeatured/page';


export default async function HomePage() {
  

  return (
   
      <Suspense fallback={<SpinLoader className='min-h-20 mb-16'/>}>

      <PostFeatured />

      <PostsList />

      </Suspense>

      
     
    
  )
}

