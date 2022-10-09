const API_URL = 'http://127.0.0.1:3333';

export function USER_LOGIN(body) {
  return {
    url: API_URL + '/login',
    options: {
      method: 'POST',
      headers: {
        "Accept": "*/*",
        "Connection": "keep-alive",
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(body)
    }
  }
}