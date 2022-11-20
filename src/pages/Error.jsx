import { useRouteError } from 'react-router-dom';
import { Alert, AlertTitle, Container } from '@mui/material';

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <Container fixed>
      <Alert severity="error">
        <AlertTitle>Oops!</AlertTitle>
        An unexpected error occured - {error.statusText || error.message}
      </Alert>
    </Container>
  );
}
