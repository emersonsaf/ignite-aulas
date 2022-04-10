import { forwardRef, ForwardRefRenderFunction } from 'react'
import { FieldErrors } from 'react-hook-form'
import { Input as ChakraInput, FormLabel, FormControl, InputProps as ChakreInputProps, FormErrorMessage } from '@chakra-ui/react'

interface InputProps extends ChakreInputProps {
  name: string,
  label?: string,
  error?: FieldErrors
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ name, error = null, label, ...rest }, ref) => {
  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel htmlFor="password"> {label} </FormLabel>}
      <ChakraInput
        name={name}
        id={name}
        focusBorderColor="pink.500"
        bgColor="gray.40"
        variant="filled"
        _hover={{
          bgColor: "gray.900"
        }}
        ref={ref}
        size="lg"
        {...rest}
      />

      {!!error && (
        <FormErrorMessage>
          {error.message}
        </FormErrorMessage>
      )}
    </FormControl>
  )
}

export const Input = forwardRef(InputBase);