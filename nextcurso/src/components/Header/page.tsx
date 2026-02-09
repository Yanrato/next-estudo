
import clsx from 'clsx'

const Header = () => {
    console.log('HEADER')
  return (
    <h1 className={clsx('text-4xl/normal font-extrabold py-8',
     'sm:text-5xl/normal sm:py-10',
     'md:text-6xl/normal md:py-11',
     'lg:text-7xl/normal lg:py-12')}>
       <a href='#'>THE BLOG </a>
     </h1> 
    )
    
}
export default Header