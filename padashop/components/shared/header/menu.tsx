import { Button } from "@/components/ui/button";
import { Sheet, SheetContent,SheetHeader, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { EllipsisVertical, ShoppingCart, UserIcon } from 'lucide-react';
import Link from "next/link";

const Menu = () => {
    return (
        <div className="flex justify-end gap-3">
            <nav className="hidden md:flex w-full max-w-xs gap-1">
                    <Button asChild variant='ghost'>
                        <Link href='/cart'>
                            <ShoppingCart /> Καλάθι</Link>
                    </Button>
                    <Button asChild className='bg-teal-800 hover:bg-teal-600'>
                        <Link href='/login'>
                            <UserIcon /> Σύνδεση / Εγγραφή
                        </Link>
                    </Button>
            </nav>
            <nav className="md:hidden">
                <Sheet>
                    <SheetTrigger className="align-middle">
                        <EllipsisVertical />
                    </SheetTrigger>
                    <SheetContent className="flex flex-col items-start">
                        <SheetHeader>
                            <SheetTitle>Μενού</SheetTitle>
                            <SheetDescription></SheetDescription>
                        </SheetHeader>
                        <Button asChild variant='ghost'>
                                <Link href='/cart'>
                                    <ShoppingCart /> Καλάθι
                                </Link>
                            </Button>
                            <Button asChild className='bg-teal-800 hover:bg-teal-600'>
                                <Link href='/login'>
                                    <UserIcon /> Σύνδεση / Εγγραφή
                                </Link>
                            </Button>
                    </SheetContent>
                </Sheet>
            </nav>
        </div>
    );
}

export default Menu;