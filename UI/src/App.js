import { useEffect, useState } from 'react'
import { getPosts } from './actions/posts'
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material'
import { useDispatch } from 'react-redux'
import Form from './components/form/form'
import Posts from './components/posts/posts'
import image from './media/memories.png'
import useStyles from './styles'

const App = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [posts, setPosts] = []

  useEffect(() => {
    const allPosts = dispatch(getPosts())
    // setPosts(allPosts)
  }, [dispatch])

  return (
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
  )
}

export default App