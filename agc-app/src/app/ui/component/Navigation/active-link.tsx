import clsx from "clsx";
import Link from "next/link";
import { ReactNode } from "react";
import { useRouter } from "next/router";
import { useMemo } from "react";

interface ActiveLinkProps{
    href: string;
    children: ReactNode
}
export const ActiveLink = ({href,children}:ActiveLinkProps)=>{

    const router = useRouter();
    const isActive = useMemo(()=>{
        return router.pathname=== href
    },[router.pathname,href])

    return(
        <Link href={href} className={clsx(isActive && "text-primary font-medium")}>
            {children}
        </Link>
    )
}