import Image from 'next/image'
import { APP_NAME } from '@/lib/constants'

import Link from 'next/link'
import Menu from '@/components/shared/header/menu'
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
       <Menu />
      </div>
    </header>
  )
}

export default Header
