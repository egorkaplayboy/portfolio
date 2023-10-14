import Image, { StaticImageData } from "next/image"
import Link from "next/link"

interface IProps {
  img: StaticImageData,
  title: string,
  deployUrl: string,
}

export default function ProjectCard({ img, title, deployUrl }: IProps) {
  return (
    <div className="max-w-md mx-auto  rounded-xl shadow-md overflow-hidden">
      <Link href={deployUrl}>
        <Image className="max-w-auto" src={img} alt="" />
        <div className="p-4 hover:bg-[#33353F] transition duration-200 ease-in-out">
          <h2 className="font-3xl font-bold mb-2">{title}</h2>
        </div>
      </Link>
    </div>
  )
}