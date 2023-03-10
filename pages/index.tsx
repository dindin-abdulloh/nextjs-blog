import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import {PostCard, Categories, PostWidget} from '../components/index'

const posts = [
  {title : 'React testing', excerpt : 'Learn React JS'},
  {title : 'React', excerpt : 'React JS'}
]

const Home: NextPage = () => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Adin's Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 '>
        <div className='lg:col-span-8 col-span-1'>
          {
            posts.map((post, index) => (
              <PostCard post={post} key={post.title}/>
            ))
          }
        </div>

        <div className='lg:col-span-4 col-span-1'>
            <div className='lg:sticky relative top-8'>
              <PostWidget/>
              <Categories/>
            </div>

        </div>
      </div>
    </div>
  )
}

export default Home
