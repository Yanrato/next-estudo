type ContainerProps = {
  children: React.ReactNode;
}

export function Container({ children } : ContainerProps) {
  return (
    <div className='text-slate-800 bg-slate-300 min-h-screen dark:bg-slate-800 dark:text-slate-300'>
      <div className='max-w-screen-lg mx-auto px-8'>
        {children}
      </div>
    </div>
  );
}
