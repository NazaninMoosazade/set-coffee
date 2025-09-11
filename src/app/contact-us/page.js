import React from 'react'
import Footer from '@/Components/modules/Footer/Footer'
import Navbar from '@/Components/modules/Navbar/Navbar'
import { authUser } from '@/utils/Server/auth'



function page() {

const user = authUser()

  return (
  <>
  <Navbar isLogin={user}/>
    <div className="max-w-[1222px] w-full mx-auto mb-16 px-4 text-right text-black">
        <div className="flex gap-9 mt-12">
          <div className="w-1/2">
            {/* <Form /> */}
          </div>
          <div className="w-1/2">
            {/* <Information /> */}
          </div>
        </div>
      </div>
  <Footer/>
  </>
  )
}

export default page