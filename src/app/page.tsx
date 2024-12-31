import dynamic from 'next/dynamic';
import React from 'react'
const Home = dynamic(() => import("./Home"), {
  ssr: false,
});
const page = () => {
  return (
    <div>
      <Home />
    </div>
  )
}

export default page
