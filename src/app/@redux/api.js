import { config } from '../App.config'

export const sendMessage = data => fetch(config.ApiBaseUrl + '/chatboot/talk', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  },
  body: JSON.stringify(data)
}).then(response => response.json())
