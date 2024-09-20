fetch("https://internal-api.prolific.com/api/v1/submissions/", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "en,en-US;q=0.9,pt;q=0.8",
    "authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InljRnBPRDNkZnNIaHA1MUpSdngxUSJ9.eyJleHRlcm5hbFVzZXJJZCI6IjVmMTM2MzkwOGNiM2FlMzZiZGRjMDY5ZCIsImlzcyI6Imh0dHBzOi8vYXV0aC5wcm9saWZpYy5jb20vIiwic3ViIjoiYXV0aDB8OWM0YzYyODEtY2MxOS00ZWVlLWE5ZmYtNWI2OGRmMDlkMWYzIiwiYXVkIjpbImh0dHBzOi8vaW50ZXJuYWwtYXBpLnByb2xpZmljLmNvbSIsImh0dHBzOi8vcHJvbGlmaWMudWsuYXV0aDAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTcyNjcwNjMyMSwiZXhwIjoxNzI2NzA5OTIxLCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIG9mZmxpbmVfYWNjZXNzIiwiYXpwIjoiV1VWMVRKR2Z2YmVtdkpDUDhkMzV2MEtRbjVlWFdxMHQifQ.ds2YvZ7sYonj7SdEbvGrIKc-4Vh9UPMnEdJ9FMbur90tI-TOfYkIJla7KHEzgZHFeSTFsKH3DoioxOi6bc9SVq9RJSewQwcWGYMBcBO3gH8TehRxl5g6gSMduJSNGZkav7Ss40Q6bkTfAGul7pn8q-26Y0zRbIyPALQsMnOC4uPyUeZR83VhJjWGjjhh04rXLe4ncnbc5-vc7JU8d-8T0o7JwJEDJoYOhFAR_SPcVHMYV3c-ubTUI7wTXMtxqLk6U3ph4wi0-t85SPMlquZ-3w9lV2bLhhLEj8mlhUytIYBU0pfnSpz94OG10V-hiZqGw6_yvXt-EraTFgQ8S0B_AA",
    "cache-control": "no-cache",
    "content-type": "application/json",
    "pragma": "no-cache",
    "priority": "u=1, i",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "none",
    "sec-gpc": "1",
    "x-client-version": "a3d002e9",
    "x-legacy-auth": "false"
  },
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "{\"study_id\":\"66eb7e3a40658d09cbda9037\",\"participant_id\":\"5f1363908cb3ae36bddc069d\",\"terms_and_conditions_accepted\":false}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
}).then(r => r.json()).then(r => console.log(r));