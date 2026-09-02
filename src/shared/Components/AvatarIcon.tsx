import { Avatar } from '@heroui/react';

interface Props {
    name?: string | null;
    image: string;
}

export const AvatarIcon = ({ name, image }: Props) => {
    return (
        <Avatar size="lg">
            {image ? (
                <Avatar.Image alt={name || 'icon'} src={image} />
            ) : (
                <Avatar.Fallback>useNameFilter(name)</Avatar.Fallback>
            )}
        </Avatar>
    )
}
