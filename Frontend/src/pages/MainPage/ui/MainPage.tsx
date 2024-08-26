import { Box, AppBar, Toolbar, Typography, Container, List,  ListItemText, Divider, ListItemIcon, Paper, ListItem } from "@mui/material";
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import WebIcon from '@mui/icons-material/Web';

export function MainPage() { 
    return (
        <Box>
      

        <Paper elevation={3} sx={{ padding: 4, backgroundColor: '#f3f4f6' }}>
          <Typography variant="h4" gutterBottom sx={{ color: '#1976d2', fontWeight: 'bold' }}>
            О проекте
          </Typography>
          <Typography variant="body1" paragraph sx={{ mb: 4 }}>
            Это веб-приложение разработано для постраничного отображения данных в таблице без перезагрузки основной страницы.
            Данные загружаются на серверной стороне и отображаются на клиенте.
          </Typography>

          <Divider sx={{ mb: 4 }} />

          <Typography variant="h5" gutterBottom sx={{ color: '#1976d2', fontWeight: 'bold' }}>
            Используемые технологии
          </Typography>
          
          <Typography variant="h6" gutterBottom sx={{ color: '#424242', mt: 3 }}>
            Backend
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <CodeIcon sx={{ color: '#1e88e5' }} />
              </ListItemIcon>
              <ListItemText primary="Express.js: Веб-фреймворк для Node.js, используемый для создания серверного API." />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <StorageIcon sx={{ color: '#1e88e5' }} />
              </ListItemIcon>
              <ListItemText primary="Prisma: ORM для взаимодействия с базой данных, в данном проекте используется с SQLite." />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <StorageIcon sx={{ color: '#1e88e5' }} />
              </ListItemIcon>
              <ListItemText primary="SQLite: Легковесная реляционная база данных, используемая для хранения данных." />
            </ListItem>
          </List>
  
          <Typography variant="h6" gutterBottom sx={{ color: '#424242', mt: 3 }}>
            Frontend
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <WebIcon sx={{ color: '#1e88e5' }} />
              </ListItemIcon>
              <ListItemText primary="React: Библиотека JavaScript для создания пользовательских интерфейсов." />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <WebIcon sx={{ color: '#1e88e5' }} />
              </ListItemIcon>
              <ListItemText primary="Redux Toolkit (RTK): Набор инструментов для эффективного управления состоянием, упрощающий работу с Redux." />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <WebIcon sx={{ color: '#1e88e5' }} />
              </ListItemIcon>
              <ListItemText primary="RTK Query: Мощный инструмент для загрузки и кэширования данных, который входит в состав Redux Toolkit." />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <WebIcon sx={{ color: '#1e88e5' }} />
              </ListItemIcon>
              <ListItemText primary="Material UI: Популярная библиотека компонентов для React, реализующая дизайн Material от Google." />
            </ListItem>
          </List>
  
          <Typography variant="h6" gutterBottom sx={{ color: '#424242', mt: 3 }}>
            Архитектура
          </Typography>
          <Typography variant="body1" paragraph>
            Проект следует подходу <strong>Feature-Sliced Design (FSD)</strong>, который структурирует код на основе функциональности, 
            делая проект более поддерживаемым и масштабируемым.
          </Typography>
        </Paper>

    </Box>
    );
}
