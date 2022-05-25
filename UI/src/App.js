import { Container, AppBar, Typography, Grow, Grid } from '@mui/material'
import Form from './components/form/form'
import Posts from './components/posts/posts'
import image from './media/memories.png'

const App = () => {
  return (
    <Container maxWidth='lg'>
      <AppBar position='static' color='inherit'>
        <Typography variant='h2' align='center'>Memories</Typography>
        <img height='60' src={image} alt="memories"/>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justifyContent="space-between" alignItems="stretch">
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>

          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}

export default App