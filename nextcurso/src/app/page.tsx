import { Suspense } from 'react';
import { SpinLoader } from '@/components/SpinLoader/page';
import { PostsList } from '@/components/PostsList/page';
import PostFeatured from '@/components/PostFeatured/page';
import { ServerComponent } from '@/components/ServerComponent/page';
import { ClientComponent } from '@/components/ClientComponent/page';


export default async function HomePage() {
  

  return (
    <>
    <ClientComponent>
      <ServerComponent/>
    </ClientComponent>
      <Suspense fallback={<SpinLoader className='min-h-20 mb-16'/>}>

      <PostFeatured />

      <PostsList />

      </Suspense>

    </>
     
    
  )
}

