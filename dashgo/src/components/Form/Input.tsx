import { Input as ChakraInput, FormLabel, FormControl, InputProps as ChakreInputProps } from '@chakra-ui/react'

interface InputProps extends ChakreInputProps {
  name: string,
  label?: string,
}

export function Input({ name, label, ...rest }: InputProps) {
  return (
    <FormControl>
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
        size="lg"
        {...rest}
      />
    </FormControl>
  )
}