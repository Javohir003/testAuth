import React from 'react'
import './Social.css'
import { FaGithub, FaGoogle } from 'react-icons/fa'

function Social() {
  return (
    <div className='social-wrapper'>
        <button>
            <FaGithub/>
        </button>
        <button>
            <FaGoogle/>
        </button>
    </div>
  )
}

export default Social