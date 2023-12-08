import { TeamSocialLinks } from '@/components/common/SocialLinks'
import board_data from '@/data/BoardData'
import team_data from '@/data/ManagementTeamData'
import { Bona_Nova } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BoardAreaHome = ({ style }: any) => {
  return (
    <>
      <section
        className={`tp-team-area pb-120 ${
          style ? 'pt-120' : ''
        } tp-team-item-margin`}
      >
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='tp-team-title-wrapper text-center mb-40'>
                <span className='tp-section-title-pre'>
                  our board of directors{' '}
                </span>
                <h3 className='tp-section-title'>
                  Leading the way in business <br /> transformation
                </h3>
              </div>
            </div>
          </div>
          <div className='row'>
            {board_data.slice(0, 4).map((item, index) => (
              <>
                {item.home === 1 && (
                  <div key={index} className='col-lg-3 col-md-6'>
                    <div
                      className='tp-team-item p-relative wow fadeInUp'
                      data-wow-duration='1s'
                      data-wow-delay={item.delay}
                    >
                      <div className='tp-team-item-thumb'>
                        <Link href='/team-details'>
                          <Image
                            src={item.img}
                            style={{ width: '100%', height: 'auto' }}
                            alt='image-title-here'
                          />
                        </Link>
                      </div>
                      <div className='tp-team-social'>
                        <TeamSocialLinks />
                      </div>
                      <div className='tp-team-info text-center'>
                        <h4 className='tp-team-info-title'>
                          <Link href='/team-details'>{item.title}</Link>
                        </h4>
                        <p>{item.designatio}</p>
                      </div>
                    </div>
                  </div>
                )}
              </>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default BoardAreaHome
