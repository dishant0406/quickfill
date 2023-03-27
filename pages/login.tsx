import { LayoutContainer } from '@/Components'
import {FcGoogle} from 'react-icons/fc'
import {FaGithub} from 'react-icons/fa'
import Image from 'next/image'
type Props = {}

const Login = (props: Props) => {
  return (
    <LayoutContainer className='flex items-center justify-center gap-[10px] flex-col' parentClass='bg-primaryLight'>
      <Image width={150} height={150} className='ml-[-10px]'  src='/Images/PNG/Logo.png' alt='Logo' />
      <div className='w-[15rem] h-[3rem] flex items-center justify-center gap-[10px] rounded-md cursor-pointer hover:scale-95 transition-all duration-300 mt-[1rem] bg-primaryDark'>
        <FcGoogle className='text-2xl' />
        <div className='text-secondaryLighter font-[600] '>Sign in with Google</div>
      </div>
      <div className='w-[15rem] h-[3rem] flex items-center justify-center gap-[10px] rounded-md cursor-pointer hover:scale-95 transition-all duration-300 bg-mainDark'>
        <FaGithub className='text-2xl' />
        <div className='text-secondaryLighter font-[600] '>Sign in with Github</div>
      </div>
    </LayoutContainer>
  )
}

export default Login