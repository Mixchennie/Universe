'use server'

   import { desc } from 'drizzle-orm'

   import { products } from '@/db/schema'
import db from '@/db/drizzel'

   export async function getLatestProducts() {
     const data = await db.query.products.findMany({
       orderBy: [desc(products.createdAt)],
       limit: 4,
     })
     return data
   }