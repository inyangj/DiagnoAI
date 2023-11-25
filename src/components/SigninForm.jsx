import React, { useState } from 'react';
import sms from '../assets/svg/sms.svg'
import key from '../assets/svg/key.svg'
import eye from '../assets/svg/eye.svg'
import eyeclose from '../assets/svg/eyeclose.svg'


const SigninForm = () => {
    const [emailFocus, setEmailFocus] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
      setPasswordVisible(!passwordVisible);
    };
  return (
    <form>
          <label className="text-[0.875rem]"  htmlFor="email">Email Address</label>
          <div
        className={`flex p-[0.75rem] border ${
          emailFocus ? ' border-secondary' : 'border-gray_4'
        } rounded-[0.27rem] items-center gap-2 mb-5`}
      >
            <img src={sms} alt="input-icon" />
            <input type="email"   onFocus={() => setEmailFocus(true)}
          onBlur={() => setEmailFocus(false)} className="w-full bg-transparent pl-1 outline-none" name="email" placeholder="ex. danny@email.com" id="email" />
          </div>

          <label className="text-[0.875rem]" htmlFor="password">Enter Password</label>
          <div
        className={`flex p-[0.75rem] border ${
          passwordFocus ? ' border-secondary' : 'border-gray_4'
        } rounded-[0.27rem] items-center gap-2 mb-8`}
      >
                <img src={key} alt="input-icon" />
                <input  type={passwordVisible ? 'password' : 'text'}  onFocus={() => setPasswordFocus(true)}
          onBlur={() => setPasswordFocus(false)} className="w-full appearance-none border-none outline-none focus:ring-0 bg-transparent pl-1" name="password" placeholder="ex. abc1234" id="password" />
                <img src={passwordVisible ? eyeclose : eye} onClick={togglePasswordVisibility} alt="input-icon" />
            </div>
            <button type="submit" className="w-full bg-secondary text-white font-Nohemi_Bold text-[0.875rem] py-2 rounded-[0.27rem] font-bold">Login</button>
        </form>
  )
}

export default SigninForm