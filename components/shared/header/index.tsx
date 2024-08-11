import Image from 'next/image'
import { APP_NAME } from '@/lib/constants'
import { ShoppingCart, UserIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
// import { getAllCategories } from '@/lib/actions/product.actions'
// import Search from './search'

const Header = async () => {

  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link href="/" className="flex-start">
            <Image
              src="/assets/icons/logo.svg"
              width={48}
              height={48}
              alt={`${APP_NAME} logo`}
            />
            {APP_NAME}
          </Link>
        </div>
        <div className='space-x-2'>
          <Button asChild variant="ghost">
            <Link href="/cart">
              <ShoppingCart />
            </Link>
          </Button>
          <Button asChild>
            <Link href="/signin">
              <UserIcon />
              Sign In
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header
