import { useSelector } from 'react-redux'
import Post from './post/post'

const Posts = () => {
  const posts = useSelector((state) => state.posts)

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