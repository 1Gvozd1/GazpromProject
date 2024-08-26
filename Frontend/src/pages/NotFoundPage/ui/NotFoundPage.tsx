import { Box, Typography, Button } from "@mui/material";
import { AppLink } from "../../../shared/ui/AppLink/AppLink";
import { RoutePath } from "../../../shared/config/routeConfig/routeConfig";


export function NotFoundPage() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: "80dvh",
        textAlign: 'center',
        animation: 'fadeIn 1.5s ease-in-out'
      }}
    >
      <Typography variant="h1" sx={{ fontSize: '6rem', fontWeight: 'bold', color: '#1e88e5', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
        404
      </Typography>
      <Typography variant="h6" sx={{ color: '#757575', mb: 2 }}>
        Данной страницы не существует
      </Typography>
      <AppLink to={RoutePath.main}>
        <Button
          variant="contained"
          sx={{
            mt: 2,
            backgroundColor: '#1e88e5',
            '&:hover': {
              backgroundColor: '#1565c0',
            },
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
            borderRadius: '8px',
            padding: '10px 20px',
            transition: 'transform 0.3s ease',
            '&:active': {
              transform: 'scale(0.95)',
            }
          }}
        >
          Назад
        </Button>
      </AppLink>
    </Box>
  );
}
