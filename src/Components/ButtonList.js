import React from 'react'
import Button from './Button'

const ButtonList = () => {
  return (
    <div className='flex'>
      <Button name="All" className="bg-black text-white"/>
      <Button name="Cricket"/>
      <Button name="Music"/>
      <Button name="News"/>
      <Button name="Cooking"/>
      <Button name="Live"/>
      <Button name="Gaming"/>
      <Button name="Mixes"/>
      <Button name="Politics"/>
      <Button name="Study"/>
    </div>
  )
}

export default ButtonList