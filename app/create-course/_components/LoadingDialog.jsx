import React from 'react'
import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogHeader
  } from "@/components/ui/alert-dialog"
import Image from 'next/image'
  
const LoadingDialog = ({loading}) => {
  return (
    <AlertDialog open={loading}>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogDescription>
        <div className="flex flex-col items-center py-8">
            <Image src={'/loader.gif'}
            width={100}
            height={100} />
            <h2 className="p-3 text-lg">Kérlek várj... a Gemini dolgozik</h2>
        </div>
      </AlertDialogDescription>
    </AlertDialogHeader>
  </AlertDialogContent>
</AlertDialog>

  )
}

export default LoadingDialog
