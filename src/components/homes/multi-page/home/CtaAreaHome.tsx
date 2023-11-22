import React from 'react'

const CtaAreaHome = () => {
  return (
    <>
      <section className='tp-cta-area p-relative'>
        <div className='tp-cta-bg'></div>
        <div className='container'>
          <div
            className='tp-cta-bg-wrapper p-relative'
            style={{ backgroundImage: `url(/assets/img/cta/bg-shape.png)` }}
          >
            <div className='row'>
              <div className='col-lg-6'>
                <h3 className='tp-cta-title'>
                  Get notified about the event! <br /> Subscribe today
                </h3>
              </div>
              <div className='col-lg-6'>
                <div className='tp-cta-email p-relative'>
                  <input type='email' placeholder='Email Address' />
                  <button>
                    {' '}
                    <span>
                      <i className='fa-solid fa-envelope'></i> Subscribe
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CtaAreaHome
