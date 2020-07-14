import sendMail from '../../assets/js/sendMail'

export default async (req, res) => {
  if (req.method === 'POST') {
    const {
      to,
      from,
      subject,
      message
    } = req.body

    try {
      await sendMail({
        to,
        from,
        subject,
        message
      })

      return res.status(200).end()
    } catch (err) {
      return res.status(err.status || 301).json({
        error: {
          code: err.message,
          message: 'Something went wrong in sending email.'
        }
      })
    }
  }
  return res.status(404).json({
    error: {
      code: 'not_found',
      message: "The requested endpoint was not found or doesn't support this method."
    }
  })
}
