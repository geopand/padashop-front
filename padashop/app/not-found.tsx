'use client';
import Link from 'next/link';
import { House } from 'lucide-react';

const NotFoundPage = () => {
    return (  
        <section 
        className='flex h-screen flex-col items-center  mt-28'>
        <p className="text-black-900 text-5xl mb-4">Χμ....</p>
        <p className="text-black-900 text-3xl mb-4">Η σελίδα δεν βρέθηκε</p>

        <p className='text-black-900 text-9xl'>404</p>
        <div className="mt-10"></div>
          <Link
            href='/'
            className='text-teal-900 text-3xl hover:text-teal-700'>
              <House className='inline' /> Mεταβείτε στην κύρια σελίδα
          </Link>   
      </section>
     );
}
 
export default NotFoundPage;