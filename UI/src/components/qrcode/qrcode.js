import { useState } from "react"
import { Button, Container } from '@mui/material'
import qrcode from 'qrcode'

const QRCode = () => {
  const [url, setUrl] = useState('')
  const [qr, setQr] = useState('')

  const getQRCode = () => {
    qrcode.toDataURL(url, {
      width: 400,
    }, (err, url) => {
      if (err) console.error(err)
      setQr(url)
    })
  }

  return (
    <Container>
      <h2>QR code generator</h2>
      <input
        type='text'
        placeholder='http://www.google.com'
        value={url}
        onChange={e => setUrl(e.target.value)}
      />
      <Button variant="contained" onClick={getQRCode}>Generate</Button>
      {
        qr &&
        <>
          <img src={qr} alt="qr code generated"/>
          <Button href={qr} variant="contained" color="success" download="qrcode.png">Download</Button>
        </>
      }
    </Container>
  )
}

export default QRCode;