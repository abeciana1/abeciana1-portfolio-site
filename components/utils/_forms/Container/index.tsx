import { FormContainerI } from '@/interfaces'

const FormContainer = ({
    children,
    onSubmit
}: FormContainerI) => {

    return (
        <form
            noValidate
            className="sm:w-96"
            onSubmit={onSubmit}
        >
            {children}
        </form>
    )
}

export default FormContainer