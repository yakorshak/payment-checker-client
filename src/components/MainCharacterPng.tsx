import Image from 'next/image'
import mypic from '../../public/images/character.png'

const MainCharacterPng = (props: any) => {
  return (
    <Image src={mypic} alt="Picture of the checkrer" height={600} width={420} />
  )
}

export default MainCharacterPng
