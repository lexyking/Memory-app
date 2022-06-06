import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt'
import DeleteIcon from '@mui/icons-material/Delete'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import useStyles from './styles'

const Post = () => {
  const classes = useStyles()

  return (
    <div>
      Hello from single Post
      <ThumbUpAltIcon />
      <DeleteIcon />
      <MoreHorizIcon />
    </div>
  )
}

export default Post