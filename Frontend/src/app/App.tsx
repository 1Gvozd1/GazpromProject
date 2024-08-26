import { AppBar, Container} from "@mui/material";

import { AppRouter } from "./providers/router";
import { NavBar } from "../widgets/NavBar";

function App() {

  return (
    <div>   
      <AppBar position="static" sx={{mb: 3}}>
        <Container maxWidth="xl">
            <NavBar />
        </Container>
      </AppBar>
      <Container maxWidth="xl">
        <AppRouter />
      </Container>
    </div>
  );
}

export default App;
