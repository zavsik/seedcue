import { useForm, SubmitHandler, Controller } from "react-hook-form";


import Box from '@mui/material/Box'
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { matchIsValidTel } from "mui-tel-input";

import image_intro from '../../../assets/Images/image_intro.png'


import {
    MuiTelInput,
    MuiTelInputCountry,
    MuiTelInputInfo,
    MuiTelInputContinent
  } from 'mui-tel-input'
  

const styleFrame = {
    display: 'flex',
    alignItems: 'center',
    background: '#FFFFFF',
    boxShadow: '0px 255px 102px rgba(57, 46, 14, 0.01), 0px 143px 86px rgba(57, 46, 14, 0.03), 0px 64px 64px rgba(57, 46, 14, 0.04), 0px 16px 35px rgba(57, 46, 14, 0.05), 0px 0px 0px rgba(57, 46, 14, 0.05)',
    borderRadius: '15px',
}

interface FormInput {
    phone: string
}


const Auth: React.FunctionComponent = () => {
    const { control, handleSubmit } = useForm({
        defaultValues: {
          phone: '',
          password: ''
        }
      })

    const onSubmit: SubmitHandler<FormInput> = data => alert(JSON.stringify(data))

    return (
        <Container component='section' maxWidth='md' sx={styleFrame}>
            <Box
                sx={ {
                    display: 'flex',
                    // flexDirection: 'column',
                    justifyContent: "space-between",
                    alignItems: 'center',
                } }>
                <Grid container
                    sx={ {
                        mt: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        margin: 1,
                        padding: 5
                } }>
                    <Typography component='h1' variant='h4' fontWeight='bold'>
                        SEEDCUE
                    </Typography>
                    <Typography component='h1' variant='h6' textAlign='center'>
                        Социальный комфорт для каждого человека!
                    </Typography>
                    <img
                    src={image_intro}
                    alt={'Intro image'}
                    loading="lazy"
                />
                </Grid>
                <Grid container
                    sx={ {
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        margin: 1,
                        padding: 5
                } }>
                    <Typography component='h1' variant='h4' fontWeight='bold'>
                        Авторизация
                    </Typography>
                    <Box component='form' onSubmit={handleSubmit(onSubmit)} noValidate  sx={ { mt: 1 } }>
                        <Controller
                            name="phone"
                            control={control}
                            rules={{ validate: matchIsValidTel }}
                            render={({ field, fieldState }) => (
                            <MuiTelInput
                                {...field}
                                fullWidth
                                onlyCountries={["RU", "BY"]}
                                helperText={fieldState.invalid ? "Введите корректный номер телефона" : ""}
                                error={fieldState.invalid}
                            />
                            )}
                        />
                        <Controller
                            name="password"
                            control={control}
                            render={({ field, fieldState }) => (
                            <TextField
                                {...field}
                                margin='normal'
                                fullWidth
                                label='Пароль'
                                type='password'
                                id='password'
                                autoComplete='current-password'
                            />
                            )}
                        />
                        
                        <Button type='submit' key='Enter' fullWidth variant='contained' color="primary" sx={ { mt: 3, mb: 2 } }>
                            ВОЙТИ
                        </Button>
                        <Grid container>
                            <Grid item >
                                <Link href='#' variant='body2'>
                                    Забыли пароль?
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Box>
        </Container>
    );
};

export default Auth;