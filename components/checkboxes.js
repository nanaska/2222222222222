import {Box, Flex, Stack, Text, useCheckbox, useCheckboxGroup} from "@chakra-ui/react";
import {useEffect} from "react";

export default function Checkboxes() {
    function CustomCheckbox(props) {
        const { state, getCheckboxProps, getInputProps, getLabelProps, htmlProps } =
            useCheckbox(props)

        return (
            <label
                display='flex'
                flexDirection='row'
                alignItems='center'
                gridColumnGap={2}
                maxW='40'
                bg='green.50'
                border='1px solid'
                borderColor='green.500'
                rounded='lg'
                px={3}
                py={1}
                cursor='pointer'
                {...htmlProps}
            >
                <input {...getInputProps()} hidden />
                <Flex
                    alignItems='center'
                    justifyContent='center'
                    border='2px solid'
                    borderColor='green.500'
                    w={4}
                    h={4}
                    {...getCheckboxProps()}
                >
                    {state.isChecked && <Box w={2} h={2} bg='green.500' />}
                </Flex>
                <Text {...getLabelProps()}>Click me for {props.value}</Text>
            </label>
        )
    }
    useEffect(()=>{console.log()},[{props}])
    const { value, getCheckboxProps } = useCheckboxGroup({
        defaultValue: ['2'],
    })

    return (
        <Stack>
            <Text>The selected checkboxes are: {value.sort().join(' and ')}</Text>
            <CustomCheckbox  {...getCheckboxProps({ value: '1' })} />
            <CustomCheckbox  {...getCheckboxProps({ value: '2' })} />
            <CustomCheckbox  {...getCheckboxProps({ value: '3' })} />
        </Stack>
    )
}