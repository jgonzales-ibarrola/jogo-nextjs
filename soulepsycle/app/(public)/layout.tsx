import Header from '@/components/public/Header'
import React, { ReactNode } from 'react'

const PublicLayout = ({children} : {
    children: ReactNode
}) => {
  return (
    <>
        <Header />
        <main>
            {children}
        </main>
    </>
  )
}

export default PublicLayout