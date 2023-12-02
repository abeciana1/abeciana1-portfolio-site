
export interface FormContainerI {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    children: React.ReactElement | React.ReactElement[];
}

export interface FormValuesI {
    [key: string]: string | number | boolean;
}

export interface NumberValidationI {
    value: number;
    message: string;
}