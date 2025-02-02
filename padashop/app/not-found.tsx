'use client';
import Link from 'next/link';

const NotFoundPage = () => {
    return (  
        <section
        style={{
          display: "grid",
          placeItems: "center",
          textAlign: "center",
          gap: "var(--space-sm)",
          margin: "100px 0px 500px 0px",
        }}
      >
        <p className="text-black-900 text-5xl mb-4">Χμ.... </p>
        <p className="text-black-900 text-3xl mb-4"> Η σελίδα δεν βρέθηκε</p>

        <p className='text-black-900 text-9xl'>404</p>
        <div className="mt-10"></div>

        <Link href='/' className='text-teal-900 text-3xl hover:text-teal-700'>Mεταβείτε στην κύρια σελίδα</Link>
           
      </section>
     );
}
 
export default NotFoundPage;