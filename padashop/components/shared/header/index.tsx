
import { ShoppingCart, UserIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { APP_NAME } from '@/lib/constants';


const Header = () => {
    return (
        <header className='w-full border-b'>    
            <div className="wrapper flex-between">
                <div className="flex-start">
                    <Link href="/" className='flex-start'>
                        <span className="hidden lg:inline-block font-bold text-2xl ml-3 text-teal-800">{APP_NAME}</span>
                    </Link>
                </div>
                <div className='space-x-2'>
                    <Button asChild variant='ghost'>
                        <Link href='/cart'>
                        <ShoppingCart /> Καλάθι</Link>
                    </Button>
                    <Button asChild className='bg-teal-800 hover:bg-teal-600'>
                        <Link href='/login'>
                        <UserIcon /> Σύνδεση / Εγγραφή
                        </Link>
                    </Button>
                </div>
            </div>
        </header>
    );
}
 
export default Header;