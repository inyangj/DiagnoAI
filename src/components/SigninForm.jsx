import React from 'react'
import sms from '../assets/svg/sms.svg'
import key from '../assets/svg/key.svg'
import eye from '../assets/svg/eye.svg'


const SigninForm = () => {
  return (
    <form>
          <label className="text-[0.875rem]"  htmlFor="email">Email Address</label>
          <div className="flex p-[0.75rem] active:border-secondary border border-gray_4 rounded-[0.27rem] items-center gap-2 mb-5">
            <img src={sms} alt="input-icon" />
            <input type="email" className="w-full bg-transparent pl-1 outline-none" name="email" placeholder="ex. danny@email.com" id="email" />
          </div>

          <label className="text-[0.875rem]" htmlFor="password">Enter Password</label>
            <div className="flex p-[0.75rem] border border-gray_4 rounded-[0.27rem] items-center gap-2 mb-8">
                <img src={key} alt="input-icon" />
                <input type="password" className="w-full bg-transparent pl-1" name="password" placeholder="ex. abc1234" id="password" />
                <img src={eye} alt="input-icon" />
            </div>
            <button type="submit" className="w-full bg-secondary text-white font-Nohemi_Bold text-[0.875rem] py-2 rounded-[0.27rem] font-bold">Login</button>
        </form>
  )
}

export default SigninForm