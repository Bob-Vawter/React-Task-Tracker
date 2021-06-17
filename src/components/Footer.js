import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaEnvelope } from 'react-icons/fa'
import Button from './Button'

const Footer = ( {onClear,onDefault} ) => {
    return (
        <div className='footer'>
             <div className='footer-btn'>
                 <Button
                    color='red'
                    text='Clear'
                    onClick={onClear} />
                <Button
                    color='blue'
                    text='Default'
                    onClick={onDefault} />
            </div>
            <a href='https://bobvawter.netlify.app/'>Portfolio</a>
            <ul className="icons">
                <li><a href="https://www.linkedin.com/in/vawterbob/"><FaLinkedin /></a></li>
                <li><a href="https://github.com/Bob-Vawter"><FaGithub /></a></li>
                <li><a href="https://twitter.com/BobVawterDev"><FaTwitter /></a></li>
                <li><a href="mailto: bobvawter@msn.com"><FaEnvelope /></a></li>
            </ul>

        </div>
    )
}

export default Footer

