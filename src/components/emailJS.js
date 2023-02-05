import emailjs from 'emailjs-com'

const SERVICE_ID = 'service_bofl5sv'
const TEMPLATE_ID = 'template_nxehg5n'
const USER_ID = 'OyspmY67jZ3BODpiz'

export const sendForm = (formData) => {
  return emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, USER_ID)
}
