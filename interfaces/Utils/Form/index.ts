
export interface FormContainerI {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    children: React.ReactElement | React.ReactElement[];
}