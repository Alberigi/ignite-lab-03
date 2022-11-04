import { TextInput } from '../TextInput/TextInput';
import { Text } from '../Text/Text';
import { Envelope, Lock } from 'phosphor-react';
import { Checkbox } from '../Checkbox/Checkbox';
import { Buttom } from '../Buttom/Buttom';

export function Form() {
    return (
        <form className='flex flex-col items-stretch w-full max-w-sm mt-10 gap-4'>
            <label htmlFor='email' className='flex flex-col gap-2'>
                <Text className='font-semibold'>Endereço de e-mail</Text>
                <TextInput.Root>
                    <TextInput.Icon>
                        <Envelope />
                    </TextInput.Icon>

                    <TextInput.Input type="password" id='email' placeholder='digite seu e-mail'></TextInput.Input>
                </TextInput.Root>
            </label>

            <label htmlFor='password' className='flex flex-col gap-2'>
                <Text className='font-semibold'>Sua senha</Text>
                <TextInput.Root>
                    <TextInput.Icon>
                        <Lock />
                    </TextInput.Icon>

                    <TextInput.Input type="password" id='password' placeholder='********'></TextInput.Input>
                </TextInput.Root>
            </label>

            <label htmlFor='remenber' className='flex items-center gap-2'>
                <Checkbox id='remenber' />
                <Text size='sm' className='text-gray-200'>Lembra de mim por 30 dias</Text>
            </label>

            <Buttom type='submit' className='mt-4'>Entrar na plataforma</Buttom>
        </form>
    )
}