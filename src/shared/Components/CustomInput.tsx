import { InputGroup, Label, TextField } from "@heroui/react";

interface Props {
    label?: string;
    placeholder?: string;
    icon?: any;
}

export const CustomInput = ({ label, placeholder, icon }: Props) => {
    return (
        <TextField fullWidth name={placeholder}>
            {label && (
                <Label>{label}</Label>
            )}
            <InputGroup>
                {icon && (
                    <InputGroup.Prefix>
                        {icon}
                    </InputGroup.Prefix>
                )}
                <InputGroup.Input className="w-full max-w-70" placeholder={placeholder} />
            </InputGroup>

        </TextField>
    )
}
