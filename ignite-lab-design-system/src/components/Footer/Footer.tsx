import { Text } from '../Text/Text';

export function Footer() {
    return (
        <footer className='flex flex-col items-center gap-4 mt-8'>
            <Text asChildren size='sm'>
                <a href='' className='text-gray-400 underline hover:text-gray-200'>Esqueceu sua senha?</a>
            </Text>

            <Text asChildren size='sm'>
                <a href='' className='text-gray-400 underline hover:text-gray-200'>Não possui conta? Crie a sua agora!</a>
            </Text>
        </footer>
    )
}