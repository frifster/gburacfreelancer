import sgMail from '@sendgrid/mail'

const sendMail = ({
  to,
  from,
  subject,
  message
}) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  const msg = {
    to,
    from,
    subject,
    html: message
  }
  console.log('sending email')
  return sgMail.send(msg)
}

export default sendMail
