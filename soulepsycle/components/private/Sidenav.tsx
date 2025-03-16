import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

const Sidenav = () => {
    const links = [1,2,3,4]
  return (
    <aside className='flex-none flex flex-col justify-between bg-gray-200 w-64 h-full'>
        <ul className='grid gap-1'>
            {links.map((link, idx) => (
                <li key={idx}>
                    <Link href={'/'}>
                        {link}
                    </Link>
                </li>
            ))}
        </ul>

        <Button variant={'destructive'}>
            Logout
        </Button>
    </aside>
  )
}

export default Sidenav