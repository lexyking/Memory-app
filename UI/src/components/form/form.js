import { useState } from 'react'
import { Paper, TextField, Button, Typography } from '@mui/material'
import FileBAse from 'react-file-base64'
import useStyles from './styles'

const Form = () => {
  const [postData, setPostData] = useState({
    creator: '',
    title: '',
    message: '',
    tags: '',
    selectedFile: ''
  })
  const classes = useStyles()
  const handleSubmit = () => {
    console.log('submited')
  }
  const clear = () => {
    console.log('clear')
  }

  return (
    <Paper className={classes.paper}>
      <form autoComplete='off'
        noValidate
        onSubmit={handleSubmit}
        className={`${classes.root} ${classes.form}`}  
      >
        <Typography variant='h6'>
          Creating Memory
        </Typography>
        <TextField 
          name='creator'
          variant='outlined'
          label='Creator'
          fullWidth
          value={postData.creator}
          onChange={(e) => {
            setPostData({ ...postData, creator: e.target.value})
          }}
          ></TextField>
           <TextField 
          name='title'
          variant='outlined'
          label='title'
          fullWidth
          value={postData.title}
          onChange={(e) => {
            setPostData({ ...postData, title: e.target.value})
          }}
          ></TextField>
           <TextField 
          name='message'
          variant='outlined'
          label='message'
          fullWidth
          value={postData.message}
          onChange={(e) => {
            setPostData({ ...postData, message: e.target.value})
          }}
          ></TextField>
           <TextField 
          name='tags'
          variant='outlined'
          label='tags'
          fullWidth
          value={postData.tags}
          onChange={(e) => {
            setPostData({ ...postData, tags: e.target.value})
          }}
          ></TextField>
          <div>
            <FileBAse
              type='file'
              multiple={false}
              onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
            />
          </div>
          <Button className={classes.buttonSubmit} variant='contained' color='primary' size='large' type='submit' fullWidth>submit</Button>
          <Button variant='contained' color='secondary' size='small' onClick={clear} fullWidth>Clear</Button>

      </form>

    </Paper>
  )
}

export default Form