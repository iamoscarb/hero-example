import { Button } from "@heroui/react";
import type { ReactNode } from "react"

interface Props {
    isIconOnly?: boolean;
    icon?: ReactNode | null | undefined;
    label: string;
    variant?: "danger" | "danger-soft" | "ghost" | "outline" | "primary" | "secondary" | "tertiary" | undefined;
}

export const CustomButton = ({ isIconOnly = false, icon = null, label = '', variant }: Props) => {
    return (
        <Button isIconOnly={isIconOnly} aria-label={label} variant={variant} size="lg">
            {icon}
            {!isIconOnly && (
                <p>{label}</p>
            )}
        </Button>
    )
}
