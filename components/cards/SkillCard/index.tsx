import Image from 'next/image'

export interface SkillI {
    name: string;
    image: string;
}

const SkillCard = ({
    name,
    image
}: SkillI | any) => {
    return (
        <div>
            <div className="h-12 w-12 mx-auto">
                <Image
                    width={50}
                    height={50}
                    src={image}
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