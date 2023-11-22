import NiceSelect from '@/ui/NiceSelect'

const ContactFormHome = () => {
  const selectHandler = (e: any) => {}
  return (
    <>
      <form
        onSubmit={(e) => e.preventDefault()}
        id='contactForm'
        className='tp-contact-form'
      >
        <div className='row'>
          <div className='col-md-12'>
            <div className='form-input'>
              <input
                type='text'
                className='form-control'
                placeholder='Full name'
              />
              <span>
                <i className='fa-solid fa-user'></i>
              </span>
            </div>
          </div>
          <div className='col-md-12'>
            <div className='form-input'>
              <input
                type='email'
                className='form-control'
                placeholder='Your mail'
              />
              <span>
                <i className='fa-solid fa-envelope'></i>
              </span>
            </div>
          </div>
          <div className='col-md-12'>
            <NiceSelect
              className='wide'
              options={[
                { value: '01', text: 'I want to post' },
                { value: '02', text: 'Software Farms' },
                { value: '03', text: 'SEO Analysis' },
                { value: '04', text: 'Data Protection' },
              ]}
              defaultCurrent={0}
              onChange={selectHandler}
              name=''
              placeholder=''
            />
          </div>
          <div className='col-md-12'>
            <div className='form-input'>
              <textarea placeholder='Write your message'></textarea>
            </div>
          </div>
          <div
            className='col-md-12'
            style={{
              backgroundColor: '#1D04D5',
            }}
          >
            <div className='form-input'>
              <div className='tp-hero-btn mr-30'>
                Submit Form
                <span>
                  <i className='fa-regular fa-arrow-right'></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}

export default ContactFormHome
