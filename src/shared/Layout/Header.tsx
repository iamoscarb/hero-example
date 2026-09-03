import { AvatarIcon } from '../Components/AvatarIcon';
import { CustomInput } from '../Components/CustomInput';
import { Magnifier } from '@gravity-ui/icons';
import { CustomButton } from '../Components/CustomButton';
import { BellDot } from '@gravity-ui/icons';

export const Header = () => {
    return (
        <div className="flex flex-row justify-end h-fit w-full">
            <div className='flex flex-row w-3/5'>
                <CustomInput placeholder='Search' icon={<Magnifier />} />
                <div className="px-4">
                    <CustomButton label='prueba' isIconOnly={true} icon={<BellDot />} variant='ghost' />
                </div>
                <AvatarIcon image={'https://m.media-amazon.com/images/M/MV5BN2ZhYjU5ZDQtOGQ3MS00YTM0LWI2MGMtODM4NjUxYzNkNDY4XkEyXkFqcGc@._V1_.jpg'} name='John Doe' />
            </div>
        </div>
    )
}
