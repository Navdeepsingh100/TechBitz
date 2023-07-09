import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Container, TextField, Typography, Box } from '@mui/material';

const RequestQuote = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        // handle form data
        console.log(data);
    }

    return (
        <Container>
            <Typography variant="h4" component="h1" gutterBottom>
                Request a Quote
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    {...register("name", { required: true })}
                    type="text"
                    label="Name"
                    fullWidth
                    margin="normal"
                    error={errors.name ? true : false}
                    helperText={errors.name && "Name is required."}
                />

                <TextField
                    {...register("email", { required: true })}
                    type="email"
                    label="Email"
                    fullWidth
                    margin="normal"
                    error={errors.email ? true : false}
                    helperText={errors.email && "Email is required."}
                />

                <TextField
                    {...register("description", { required: true })}
                    multiline
                    rows={4}
                    label="Project Description"
                    fullWidth
                    margin="normal"
                    error={errors.description ? true : false}
                    helperText={errors.description && "Project Description is required."}
                />

                <Box mt={2}>
                    <Button variant="contained" color="primary" type="submit">
                        Submit
                    </Button>
                </Box>
            </form>
        </Container>
    );
}

export default RequestQuote;
