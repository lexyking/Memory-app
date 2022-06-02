import { useSelector } from 'react-redux'
import Post from './post/post'
import useStyles from './styles'

const Posts = () => {
  const posts = useSelector((state) => state.posts)
  const classes = useStyles()

  console.log({posts})
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