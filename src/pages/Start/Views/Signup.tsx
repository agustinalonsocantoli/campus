/* eslint-disable @typescript-eslint/no-explicit-any */
// Chakra UI
import { Box, Flex, Heading, FormLabel, Input, Button, Text, Link } from '@chakra-ui/react'
// Img
// import logoOB from '../../../assets/img/logo.png'
// React
import { Link as LinkRouter } from 'react-router-dom'
// Middlewate
import { registerUsers } from "../../../shared/middlewares/users.middleware";
// Toast
import { useToast } from '@chakra-ui/react'
import { notify } from '../../../shared/utils/functions/notify'
import { status } from '../../../shared/utils/functions/notify'
// Interfaces
import { RegisterInt } from '../../../interfaces/RegisterInt';
// Formik & Yup
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface Props {
    setActivePanel: (action: boolean) => void;
}

export const Signup = (props: Props) => {
    const { setActivePanel } = props;
    const toast = useToast();
    const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    const handleSubmit = (value: any) => {

        const newUser: RegisterInt = {
            username: value.username,
            email: value.email,
            password: value.password
        }

        registerUsers(newUser).then((response: any) => {

            if(typeof response.token !== "undefined") {
                notify(toast, status.success, "Registro exitoso, inicie sesión!");
                setActivePanel(false);
            } else {
                notify(toast, status.error, "Email o Password incorrecto!");
            }

        })
        .catch((error) => {
            console.log(error)
        });
    };


    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            username: Yup.string()
            .max(15, 'Solo se aceptan hasta 15 caracteres')
            .required('Este campo es obligatorio.'),
            email: Yup.string()
            .email('Email invalido')
            .required('Este campo es obligatorio.'),
            password: Yup.string()
            .matches(passwordRules, { message: "La contraseña debe tener mas de 8 caracteres, y contener mayusculas, minusculas y numeros" })
            .required('Este campo es obligatorio.')
        }),
        onSubmit:(values: any) => handleSubmit(values)
      });

    return(
        <Flex flex="1" flexDirection="column" pt="2%" pb="2%" backgroundColor="#FFFFFF">
        {/* <Image
        src={logoOB}
        alt='img/logo'
        objectFit="contain"
        w="220px"
        p="0 3%"
        /> */}

        <Box w="60%" m="auto" mt="80px">
            <Heading fontSize="28px">Formulario de registro</Heading>

            <Box mt="10">
                <form onSubmit={formik.handleSubmit}>
                    <Box>
                        <FormLabel fontSize="13px" fontWeight="bold">Usuario</FormLabel>
                        <Input
                        type='text'
                        id="username"
                        name="username"
                        variant='filled' 
                        placeholder='Usuario' 
                        size='md' 
                        focusBorderColor='#32D4A4'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.username}
                        />
                        {
                            formik.touched.username && formik.errors.username 
                            ? (<Box color='red' fontSize="12px" mt="5px">{formik.errors.username}</Box>) 
                            : null
                        }
                    </Box>

                    <Box mt="4">
                        <FormLabel fontSize="13px" fontWeight="bold">Email</FormLabel>
                        <Input
                        type='email'
                        id="email"
                        name="email"
                        variant='filled' 
                        placeholder='Email' 
                        size='md' 
                        focusBorderColor='#32D4A4'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        />
                        {
                            formik.touched.email && formik.errors.email 
                            ? (<Box color='red' fontSize="12px" mt="5px">{formik.errors.email}</Box>) 
                            : null
                        }
                    </Box>

                    <Box mt="4">
                        <FormLabel fontSize="13px" fontWeight="bold">Contraseña</FormLabel>
                        <Input
                        type='password' 
                        id="password"
                        name="password"
                        variant='filled' 
                        placeholder='Contraseña' 
                        size='md' 
                        focusBorderColor='#32D4A4' 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                        />
                        {
                            formik.touched.password && formik.errors.password 
                            ? (<Box color='red' fontSize="12px" mt="5px">{formik.errors.password}</Box>) 
                            : null
                        }
                    </Box>

                    <Button type='submit' background='#121625' color="#FFFFFF" mt="5" w="100%">Registrar</Button>
                </form>
            </Box>
        </Box>

        <Flex p="0 3%" mt={3}>
            <Text w="55%" fontSize="12px" fontWeight="bold">
                Copyright © 2023 OpenBootcamp S.L. Todos los derechos reservados.
            </Text>

            <Link as={LinkRouter} to={""} flex="1" textAlign="right" fontSize={12} fontWeight="bold" textDecoration="underline">
                Política de Privacidad
            </Link>
        </Flex>
    </Flex>
    );
};