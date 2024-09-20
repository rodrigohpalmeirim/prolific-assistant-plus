fetch("https://internal-api.prolific.com/api/v1/submissions/", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "en,en-US;q=0.9,pt;q=0.8",
    "authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InljRnBPRDNkZnNIaHA1MUpSdngxUSJ9.eyJleHRlcm5hbFVzZXJJZCI6IjVmMTM2MzkwOGNiM2FlMzZiZGRjMDY5ZCIsIm1mYV9mYWN0b3JzIjpbXSwiaXNzIjoiaHR0cHM6Ly9hdXRoLnByb2xpZmljLmNvbS8iLCJzdWIiOiJhdXRoMHw5YzRjNjI4MS1jYzE5LTRlZWUtYTlmZi01YjY4ZGYwOWQxZjMiLCJhdWQiOlsiaHR0cHM6Ly9pbnRlcm5hbC1hcGkucHJvbGlmaWMuY29tIiwiaHR0cHM6Ly9wcm9saWZpYy51ay5hdXRoMC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNzI2NzA2MDczLCJleHAiOjE3MjY3MDk2NzMsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgb2ZmbGluZV9hY2Nlc3MiLCJhenAiOiJwUUpRczFFS004VDhDMEJQNUhsUGNsRmM5WW5iOTdmUCJ9.cC386OkRCTMHtANTIzrsIjnZyhGzuUClfntfJkt9ADDyZ5SbsOOTADHwxUczYUOWfM0hVmCWrWvAZZSZB2t2557j_fYHwIpJ_0InJKOPlM76g92FPm_kc7ImtmtHw5qH3UB5gcaXG8b4qripJLIH9QhBR_H_HfeZRHee9Ebwlb9S0Bg0QPUDq83NyiaW169_ocHmZSvRQJZwGGp5bDkkMl4Om0kC4jKxZ8KPtZvYV02OF47lop-KMh3HihmkkxQbJL4z2aFPfVm_1rge_w4UykQ2b6eSIfJK7zBJj9KehDUnqrIFGW94E9r4aAtXJQPM_ZkqiOtknuXHnltNeujb5g",
    "cache-control": "no-cache",
    "content-type": "application/json",
    "pragma": "no-cache",
    "priority": "u=1, i",
    "x-legacy-auth": "false"
  },
  "referrer": "https://app.prolific.com/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "{\"study_id\":\"66eb7e3a40658d09cbda9037\",\"participant_id\":\"5f1363908cb3ae36bddc069d\",\"terms_and_conditions_accepted\":false,\"time_zone\":\"Europe/Lisbon\"}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
}).then(r => r.json()).then(r => console.log(r));
