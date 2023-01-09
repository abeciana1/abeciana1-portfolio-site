import Image from 'next/image'

interface SkillCardI {
    name: string;
    image: string;
}

export const SkillCard = ({
    name,
    image
}: SkillCardI | any) => {
    return (
        <div
            className="text-center rounded-xl"
        >
            <Image
                width={50}
                height={50}
                src={image}
                alt={`Alex Beciana | Skill - ${name}`}
                className="mx-auto"
            />
            <div
                className="mt-2"
            >
                {name}
            </div>
        </div>
    )
}

// export default SkillCard