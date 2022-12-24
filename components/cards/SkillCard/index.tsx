
interface SkillCardI {
    name: string;
    image: string;
}

const SkillCard = ({
    name,
    image
}: SkillCardI | any) => {
    return (
        <div
            className="text-center rounded-xl"
        >
            <img
                src={image}
                className="w-auto h-12 mx-auto"
            />
            <div
                className="mt-2"
            >
                {name}
            </div>
        </div>
    )
}

export default SkillCard