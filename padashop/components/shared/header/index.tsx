import Link from 'next/link';
import { APP_NAME } from '@/lib/constants';
import Menu from './menu';


const Header = () => {
    return (
        <header className='w-full border-b'>
            <div className="wrapper flex-between">
                <div className="flex-start">
                    <Link href="/" className='flex-start'>
                        <span className="font-bold text-2xl ml-3 text-teal-800">{APP_NAME}</span>
                    </Link>
                </div>
                <div className='space-x-2'>
                 <Menu />
                </div>
            </div>
        </header>
    );
}

export default Header;