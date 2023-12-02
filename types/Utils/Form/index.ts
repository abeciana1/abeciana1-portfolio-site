import { Path, UseFormRegister } from "react-hook-form";
import {
    FormValuesI,
    NumberValidationI
} from '@/interfaces'

export type InputType = {
    hideLabel?: boolean;
    name: string;
    type?: string;
    value?: string;
    label: Path<FormValuesI>;
    placeholder?: string;
    fieldRequired: boolean | string;
    register: UseFormRegister<FormValuesI>;
    registerOptions?: {
        maxLength?: NumberValidationI;
        minLength?: NumberValidationI;
        max?: number;
        min?: number;
        pattern?: {
            value: RegExp,
            message: string;
        };
        validate?: Function | Object | any;
        valueAsNumber?: any;
        valueAsString?: any;
        valueAsDate?: any;
        setValueAs?: (value: any) => void;
        disabled?: boolean;
        onChange?: (e: React.SyntheticEvent) => void;
        onBlur?: (e: React.SyntheticEvent) => void;
        value?: string | number | boolean;
        shouldUnregister?: boolean;
        deps?: string | string[];
    }
}