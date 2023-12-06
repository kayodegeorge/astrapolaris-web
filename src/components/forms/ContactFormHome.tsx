import { FaLocationDot } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'
import { FaPhoneAlt } from 'react-icons/fa'

const ContactFormHome = () => {
  return (
    <>
      <form
        // onSubmit={(e) => e.preventDefault()}
        id='contactForm'
        className='tp-contact-form'
      >
        <div className='row'>
          <div className='col-md-12'>
            <div className='form-input'>
              <div>
                <FaLocationDot size={30} />
                <span>
                  Astra Polaris Building, Onikolobo, Abeokuta, Ogun State.
                </span>
              </div>
            </div>
          </div>
          <div className='col-md-12'>
            <div className='form-input'>
              <div>
                <MdEmail size={30} />
                <span>info@astrapolaris.com</span>
              </div>
            </div>
          </div>

          <div className='col-md-12'>
            <div className='form-input'>
              <div>
                <FaPhoneAlt size={30} />
                <span>+234 902 0353 234</span>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}

export default ContactFormHome
