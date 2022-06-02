import { useEffect } from 'react'
import { getPosts } from './actions/posts'
import { Container, AppBar, Typography, Grow, Grid, createTheme } from '@mui/material'
import { ThemeProvider } from '@mui/styles'
import { useDispatch } from 'react-redux'
import Form from './components/form/form'
import Posts from './components/posts/posts'
import image from './media/memories.png'
import useStyles from './styles'

const App = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const theme = createTheme()

  useEffect(() => {
    dispatch(getPosts())
    // setPosts(allPosts)
  }, [dispatch])

  return (
    <ThemeProvider theme={theme}>

      <Container maxWidth='lg'>
        <AppBar className={classes.appBar} position='static' color='inherit'>
          <Typography className={classes.heading} variant='h4' align='center'>Memories</Typography>
          <img className={classes.image} height='60' src={image} alt="memories"/>
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
    </ThemeProvider>
  )
}

export default App