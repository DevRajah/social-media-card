import React from 'react'
import "./body.css"
import Header from '../../components/header/Header'
import Card1 from '../../components/section1/Card1'
import { FaCaretDown, FaCaretUp, FaFacebookSquare, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import Card2 from '../../components/section2/Card2'
import Title from '../../components/section2/Title'

const Body = () => {
    const style = {
       borderTop:"3px solid linear-gradient(90deg, #E3AB7C 40%, #B15890 100%)"
    //    borderTop:"3px solid linear-gradient(90deg,rgba(227, 171, 124, 1) 40%, rgba(177, 88, 144, 1) 100%)"
    }
    
  return (
    <div className='body'>
        <Header />
        <div className="card1__container">
            <Card1 insta="facebook"  topColor={{borderTop:"3px solid #2684DC"}} color={{color:'#33C7A6'}} arrow={<FaCaretUp color='#33C7A6' />} scale="12 Today" socials={<FaFacebookSquare color='#2684DC' />} handle="@nathanf" num="1987" cat="followers" />
            <Card1 insta="facebook"  topColor={{borderTop:"3px solid #2684DC"}} color={{color:'#33C7A6'}}  arrow={<FaCaretUp color='#33C7A6' />} scale="99 Today" socials={<FaTwitter color='#2684DC' />} handle="@nathanf" num="1044" cat="followers" />
            <Card1 insta="insta"  topColor={style} color={{color:'#33C7A6'}}  arrow={<FaCaretUp color='#33C7A6' />} scale="1099 Today" socials={<FaInstagram className='insta' />} handle="@realnathanf" num="11K" cat="followers" />
            <Card1 insta="youtube"  topColor={{borderTop:"3px solid #B4052E"}} color={{color:'#B4052E'}}  arrow={<FaCaretDown color="#B4052E" />} scale="144 Today" socials={<FaYoutube color='red' />} handle="Nathan F." num="8238" cat="subscribers" />
        </div>
        <Title />
        <div className="card1__container">
            <Card2 insta="facebook"  color={{color:'#33C7A6'}} arrow={<FaCaretUp color='#33C7A6' />} scale="12" socials={<FaFacebookSquare color='#2684DC' />} handle="@nathanf" num="1987" cat="followers" />
            <Card2 insta="facebook"  color={{color:'#33C7A6'}}  arrow={<FaCaretUp color='#33C7A6' />} scale="99" socials={<FaFacebookSquare color='#2684DC' />} handle="@nathanf" num="1044" cat="followers" />
            <Card2 insta="facebook"     arrow={<FaCaretUp color='#33C7A6' />} scale="1099" socials={<FaInstagram className='insta' />} handle="@realnathanf" num="11K" cat="followers" />
            <Card2 insta="facebook"  color={{color:'#B4052E'}}  arrow={<FaCaretDown color="#B4052E" />} scale="144" socials={<FaInstagram className='insta' />} handle="Nathan F." num="8238" cat="subscribers" />
            <Card2 insta="insta"  color={{color:'#B4052E'}}  arrow={<FaCaretDown color="#B4052E" />} scale="144" socials={<FaTwitter color='#2684DC' />} handle="Nathan F." num="8238" cat="subscribers" />
            <Card2 insta="insta"  color={{color:'#B4052E'}}  arrow={<FaCaretDown color="#B4052E" />} scale="144" socials={<FaTwitter color='#2684DC' />} handle="Nathan F." num="8238" cat="subscribers" />
            <Card2 insta="youtube"  color={{color:'#B4052E'}}  arrow={<FaCaretDown color="#B4052E" />} scale="144" socials={<FaYoutube color='red' />} handle="Nathan F." num="8238" cat="subscribers" />
            <Card2 insta="youtube"  color={{color:'#B4052E'}}  arrow={<FaCaretDown color="#B4052E" />} scale="144" socials={<FaYoutube color='red' />} handle="Nathan F." num="8238" cat="subscribers" />
        </div>
    </div>
  )
}

export default Body