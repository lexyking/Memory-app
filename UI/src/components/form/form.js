import { Paper, TextField, Button, Typography } from '@mui/material'
// import useStyles from './styles'

const Form = () => {
  // const classes = useStyles()
  const handleSubmit = () => {
    console.log('submited')
  }

  return (
    <Paper>
      <form autoComplete='off' noValidate onSubmit={handleSubmit}>
        <Typography variant='h6'>
          Creating Memory
        </Typography>
        <TextField 
          name='creator'
          variant='outlined'
          label='Creator'
          fullWidth
          value={}
          onChange={handleChange}
          ></TextField>
      </form>

    </Paper>
  )
}

export default Form