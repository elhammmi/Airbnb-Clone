'use client'
import { useEffect, useState } from "react";

interface ContainerProps {
    children: React.ReactNode;
}

const ClientOnly:React.FC<ContainerProps> = ({children}) => {
    const [hasMounted, setHasMounted] = useState(false);
    useEffect(()=>{
        setHasMounted(true);
    },[]);
    if(!hasMounted) return null;
  return (
    <>
        {children}
    </>
  )
}

export default ClientOnly