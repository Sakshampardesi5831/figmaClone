import React, { Fragment } from 'react'

const RightSideBar = () => {
  return (
    <Fragment>
        <section
         className='flex flex-col border-t border-primary-grey-300 text-primary-grey-300 bg-black min-h-[227px]: sticky
          left-0 h-full max-sm:hidden overflow-y-auto select-none pb-20'
        ><h3 className='px-5 pt-4 text-xs'>Design</h3>
       </section>
    </Fragment>
  )
}

export default RightSideBar