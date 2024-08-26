import { Toolbar, Button } from "@mui/material";
import { RoutePath } from "../../../shared/config/routeConfig/routeConfig";
import { AppLink } from "../../../shared/ui/AppLink/AppLink";

 
 export function NavBar() {
    return (
        <Toolbar disableGutters>
            <AppLink to={RoutePath.main}>
              <Button sx={{  color: 'white' }}>
                  {'Главная'}
              </Button>
            </AppLink>
            <AppLink to={RoutePath.table}>
              <Button sx={{  color: 'white' }}>
                  {'Таблица'}
              </Button>
            </AppLink>
    </Toolbar>
    )
 }
 
