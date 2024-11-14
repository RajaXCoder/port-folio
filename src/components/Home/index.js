import {Disclosure, DisclosureButton, DisclosurePanel} from '@headlessui/react'
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline'
import React from 'react'
import {
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaExternalLinkAlt,
} from 'react-icons/fa'
import {IoMailOutline} from 'react-icons/io5'
import {FaXTwitter} from 'react-icons/fa6'
import './style.css' // Move this to the top

import Skill from './style'

const navigation = [
  {name: 'Profile', href: '#Profile', current: true},
  {name: 'Projects', href: '#Project', current: false},
  {name: 'Skills', href: '#Skills', current: false},
  {name: 'Contact', href: '#Contacts', current: false},
]

const skillsList = [
  {name: 'Tailwind CSS', points: 80},
  {name: 'Bootstrap', points: 75},
  {name: 'JavaScript', points: 90},
  {name: 'React JS', points: 90},
  {name: 'Express JS', points: 90},
  {name: 'Mongo DB', points: 70},
  {name: 'Sqlite', points: 80},
  {name: 'Python', points: 80},
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const projectList = [
  {
    id: 1,
    projectUrl: 'https://rajuxecommerce.ccbp.tech/',
    name: 'E-Commerce',
    description:
      'E-Commerce Website like Amazon, Flipkart where users can log in and see the list of products with search, filters, sort by, etc...',
    aosValue: 'fade-up-right',
  },
  {
    id: 2,
    projectUrl: 'https://rajuxfoodx.ccbp.tech/',
    name: 'Food Munch',
    description: 'Food Munch website is a user-centric food tech website',
    aosValue: 'fade-up-left',
  },
  {
    id: 3,
    projectUrl: 'https://rajuxdailymood.ccbp.tech/',
    name: 'Daily Mood Tracker',
    description: 'A Daily Mood Tracker website is tracking your Daily moods',
    aosValue: 'fade-up-right',
  },
]

class Home extends React.Component {
  state = {
    tabsList: navigation,
  }

  changeTabs = item => {
    this.setState(prev => ({
      tabsList: prev.tabsList.map(each =>
        each.name === item.name
          ? {...each, current: true}
          : {...each, current: false},
      ),
    }))
  }

  render() {
    const {tabsList} = this.state
    return (
      <>
        {/* {Navbar container} */}

        <Disclosure as='nav' className='bg-cyan-400'>
          <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
            <div className='relative flex h-16 items-center justify-between'>
              <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                {/* Mobile menu button*/}
                <DisclosureButton className='group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                  <span className='absolute -inset-0.5' />
                  <span className='sr-only'>Open main menu</span>
                  <Bars3Icon
                    aria-hidden='true'
                    className='block text-white h-6 w-6 group-data-[open]:hidden'
                  />
                  <XMarkIcon
                    aria-hidden='true'
                    className='hidden h-6 w-6 text-white group-data-[open]:block'
                  />
                </DisclosureButton>
              </div>
              <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
                <div className='hidden sm:ml-6 sm:block'>
                  <div className='flex space-x-4'>
                    {tabsList.map(item => (
                      <a
                        key={item.name}
                        href={item.href}
                        aria-current={item.current ? 'page' : undefined}
                        onClick={() => this.changeTabs(item)}
                        className={classNames(
                          item.current
                            ? 'bg-gray-700 text-white'
                            : 'text-stone-950 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium',
                        )}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <DisclosurePanel className='sm:hidden '>
            <div className='space-y-1 px-2 pb-3 pt-2 bg-cyan-400 menu-bar-menu'>
              {navigation.map(item => (
                <DisclosureButton
                  key={item.name}
                  as='a'
                  href={item.href}
                  aria-current={item.current ? 'page' : undefined}
                  className={classNames(
                    item.current
                      ? 'bg-gray-900 text-white'
                      : 'hover:bg-gray-700 hover: text-white',
                    'block rounded-md px-3 py-2 text-base font-medium',
                  )}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </Disclosure>

        {/* {Home container} */}

        <div className='home-container'>
          <h1 className='home-heading cssanimation leFadeInLeft'>Profile</h1>
          <div className='e-card playing'>
            <div className='image'></div>

            <div className='wave'></div>
            <div className='wave'></div>
            <div className='wave'></div>

            <div className='infotop'>
              <img
                src='https://i.postimg.cc/XYvhy0Zs/0b3c1610-03b4-4cda-b4f0-83ef6abea697.png'
                alt='profile'
                className='profile-image'
              />
              <div className='self-intro-container'>
                <img
                  src='https://i.postimg.cc/DycmNXPY/IMG-20241112-075823.png'
                  alt='profile'
                  className='mobile-view-profile'
                />
                <h1 className='fade-sequence'>
                  Hello! <span className=' highlight-text'>I’m Rajasekar</span>
                </h1>

                <p className='name'>
                  a passionate{' '}
                  <span className='highlight-text'>MERN stack developer</span>{' '}
                  focused on building efficient and user-friendly web
                  applications. I’m skilled in MongoDB, Express, React, and
                  Node.js, creating interactive and scalable solutions. With a
                  strong attention to detail, I’m committed to delivering clean,
                  maintainable code for every project.
                </p>
              </div>
            </div>
          </div>

          <h1 id='Project' className='home-heading'>
            Projects
          </h1>

          <ul className='project-list-container'>
            {projectList.map(each => (
              <li
                key={each.id}
                className='project-card-container'
                data-aos={each.aosValue}
              >
                <div className='project-card'>
                  <div className='front-content'>
                    <p>{each.name}</p>
                  </div>
                  <div className='content'>
                    <h1 className='heading'>{each.name}</h1>
                    <p>{each.description}</p>
                    <a
                      className='url-link'
                      href={each.projectUrl}
                      target='_black'
                    >
                      <FaExternalLinkAlt className='link-icon' /> web link
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* Skills */}

          <h1 id='Skills' className='home-heading'>
            Skills
          </h1>

          <ul className='skills-container'>
            {skillsList.map(each => (
              <li key={each.name} className='skill-box'>
                <span className='title'>{each.name}</span>

                <div className='skill-bar'>
                  <Skill width={`${each.points}%`}>
                    <span className='tooltip'>{each.points}%</span>
                  </Skill>
                </div>
              </li>
            ))}
          </ul>

          {/* {contacts} */}
          <h1 id='Contacts' className='home-heading'>
            Contacts
          </h1>
          {/*mobile- view */}
          <div className='contact-card'>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=rajasekarrdx35@gmail.com&su=Portfolio%20Inquiry&body=Hello,%20I'm%20interested%20in%20learning%20more%20about%20your%20work."
              target='_black'
              className='mail'
            >
              <IoMailOutline className='mail-icon' />
            </a>
            <div className='profile-pic'>
              <img
                src='https://i.postimg.cc/FKSLpsPN/IMG-20241026-201344.jpg'
                alt='siva'
              />
            </div>
            <div className='bottom'>
              <div className='content'>
                <span className='name'>I'm Rajasekar</span>
                <span className='about-me'>MERN Stack Developer</span>
              </div>
              <div className='bottom-bottom'>
                <div className='social-links-container'>
                  <a href='https://github.com/RajaX934467' target='_black'>
                    <FaGithub />
                  </a>
                  <a
                    href='https://www.linkedin.com/in/rajasekar-s-4b36172a4'
                    target='_black'
                  >
                    <FaLinkedin />
                  </a>
                  <a href='https://www.instagram.com/snstr_xx/' target='_black'>
                    <FaInstagram />
                  </a>
                  <a href='https://www.instagram.com/snstr_xx/' target='_black'>
                    <FaXTwitter />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/*disktop view*/}
          <div className='contact-disktop-container'>
            <div className='disktop-social-container'>
              <div className='main'>
                <div className='up'>
                  <button
                    onClick={() =>
                      window.open(
                        'https://www.instagram.com/snstr_xx/',
                        '_blank',
                      )
                    }
                    className='card1'
                  >
                    <FaInstagram size={30} className='instagram' />
                  </button>
                  <button
                    onClick={() =>
                      window.open(
                        'https://www.instagram.com/snstr_xx/',
                        '_blank',
                      )
                    }
                    className='card2'
                  >
                    <FaXTwitter size={30} className='twitter' />
                  </button>
                </div>
                <div className='down'>
                  <button
                    onClick={() =>
                      window.open('https://github.com/RajaX934467', '_blank')
                    }
                    className='card3'
                  >
                    <FaGithub size={30} className='github' />
                  </button>
                  <button
                    onClick={() =>
                      window.open(
                        'https://www.linkedin.com/in/rajasekar-s-4b36172a4',
                        '_blank',
                      )
                    }
                    className='card4'
                  >
                    <FaLinkedin size={30} className='linkedin' />
                  </button>
                </div>
              </div>
            </div>
            <div className='form-card1'>
              <div className='form-card2'>
                <form className='form'>
                  <p className='form-heading'>Get In Touch</p>

                  <div className='form-field'>
                    <input
                      required=''
                      placeholder='Name'
                      className='input-field'
                      type='text'
                    />
                  </div>

                  <div className='form-field'>
                    <input
                      required=''
                      placeholder='Email'
                      className='input-field'
                      type='email'
                    />
                  </div>

                  <div className='form-field'>
                    <input
                      required=''
                      placeholder='Subject'
                      className='input-field'
                      type='text'
                    />
                  </div>

                  <div className='form-field'>
                    <textarea
                      required=''
                      placeholder='Message'
                      cols='30'
                      rows='3'
                      className='input-field'
                    ></textarea>
                  </div>

                  <button className='sendMessage-btn'>Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Home
