'use client'

import { useEffect } from "react"
import { toast } from "react-toastify"

export default function Toast({ message }: {message: string}) {
    
    useEffect(() => {   
        toast.success(message, { toastId:"1"})
        history.replaceState(history.state, '', "/")
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]) 

    return null
}