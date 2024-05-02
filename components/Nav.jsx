import Image from "next/image"
import Logo from "@/public/images/PolyGlot.png"

const Nav = () => {
  return (
    <nav className="flex justify-between items-center p-6">
      <Image src={Logo} alt="PolyGlot" width={200}/>
      -
    </nav>
  )
}

export default Nav