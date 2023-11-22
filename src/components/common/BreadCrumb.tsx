import Link from 'next/link'
import React from 'react'

interface DataType {
  title?: string
  page_title?: string
}

const Breadcrumb = ({ title, page_title }: DataType) => {
  return (
    <>
      <section
        className='breadcrumb__area pt-165 pb-150 p-relative z-index-1 fix'
        style={{ backgroundColor: '#16243E' }}
      >
        <div
          className='breadcrumb__bg'
          style={{ backgroundImage: 'url(/assets/img/astra-bg.png)' }}
        ></div>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-sm-6'>
              <div className='breadcrumb__content'>
                <h3 className='breadcrumb__title'>{title}</h3>
              </div>
            </div>
            <div className='col-sm-6'>
              <div className='breadcrumb__content'>
                <div className='breadcrumb__list text-center text-sm-end'>
                  <span>
                    <Link href='/'>Home</Link>
                  </span>
                  <span className='dvdr'>
                    <i className='fa-regular fa-angle-right'></i>
                  </span>
                  <span>{page_title}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Breadcrumb
