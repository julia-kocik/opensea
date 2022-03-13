import React from 'react'
import { useRouter } from 'next/router';

const Collection = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>{router.query.collectionId}</div>
  )
}

export default Collection