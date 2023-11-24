import Image from 'next/image'
import { ISkillCard } from '@/interfaces'

const SkillCard = ({
    name,
    image
}: ISkillCard) => {
    return (
        <div>
            <div className="h-12 w-12 mx-auto">
                <Image
                    width={50}
                    height={50}
                    src={image.url}
                    alt={`Alex Beciana | Skill - ${name}`}
                    className="mx-auto"
                />
            </div>
            <div
                className="mt-4 text-center"
            >
                {name}
            </div>
        </div>
    )
}

export default SkillCard