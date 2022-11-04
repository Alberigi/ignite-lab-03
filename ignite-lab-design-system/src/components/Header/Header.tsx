import { Text } from '../Text/Text';
import { Logo } from '../Logo/Logo';
import { Heading } from '../Heading/Heading';

export function Header() {
    return (
        <header className='flex flex-col items-center '>
            <Logo />

            <Heading size='lg' className='mt-4'>Ignite Lab</Heading>

            <Text size='lg' className='text-gray-400 mt-1'>
                Faça seu login e comece a usar
            </Text>
        </header>
    )
}