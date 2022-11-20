import { Container, Alert, AlertTitle } from '@mui/material';
import { Link } from 'react-router-dom';

export default function NoMatchPage() {
  return (
    <Container fixed>
      <Alert severity="error">
        <AlertTitle>No resources found</AlertTitle>
        The resources you're looking for doesn't exist! Go{' '}
        <Link to={-1}>back</Link>
      </Alert>
    </Container>
  );
}
