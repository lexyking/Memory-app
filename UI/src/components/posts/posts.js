import Post from './post/post'
import useStyles from './styles'

const Posts = () => {
  const classes = useStyles()
  return (
    <div>
      <div>
        <h3>from post</h3>
        <Post />
      </div>
    </div>
  )
}

export default Posts