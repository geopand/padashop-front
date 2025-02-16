import {
    Breadcrumb,
    BreadcrumbEllipsis,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { BreadCrumb } from "@/lib/definitions";


const BreadCrump = ({ breadcrumb }: { breadcrumb: BreadCrumb }) => {
    return (<>
        <Breadcrumb className="mb-10">
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">Αρχική</BreadcrumbLink>
                </BreadcrumbItem>
                {breadcrumb.items.map((item, index) => (
                    <>
                        <BreadcrumbSeparator />
                        {item.isCurrent ? (
                            <BreadcrumbItem className="text-gray-900" key={index}>
                                <BreadcrumbLink>{item.title}</BreadcrumbLink>
                            </BreadcrumbItem >) : (
                            <BreadcrumbItem className="text-teal-900 hover:text-teal-600 font-semibold" key={index}>
                                <BreadcrumbLink href={`${item.url}`}>{item.title}</BreadcrumbLink>
                            </BreadcrumbItem >

                        )}
                    </>
                ))}
            </BreadcrumbList>
        </Breadcrumb>
    </>);
}

export default BreadCrump;