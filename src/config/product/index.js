// const fs = require('fs')

export default {
  REST_API: 'https:/gw.shooka.com/',
  OPENVIDU_SERVER_URL: 'https://vr2.shooka.com',
  SHOOKA_SERVER_URL: 'https://cm.shooka.com/ws',
  OPENVIDU_SERVER_SECRET: 'YOUR_SECRET',
  MAX_PARTICIPANTCOUNT: 8,
  MAX_PARTICIPANTCOUNT_MOBILE_AND_TABLET: 8,
  LANCHING_URL: 'https://web.shooka.com',
  HOST: '10.1.2.50',
  // HTTPS: {
  //   ca: fs.readFileSync('/opt/ssl/ca.crt'),
  //   key: fs.readFileSync('/opt/ssl/key.key'),
  //   cert: fs.readFileSync('/opt/ssl/cert.crt')
  // },
  HTTPS: false,
  OPEN: false,
  PORT: 443,
  MAX_RETRY_JOIN: 2
}
