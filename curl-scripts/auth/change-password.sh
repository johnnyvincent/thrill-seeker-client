# Ex: TOKEN=33ad6372f795694b333ec5f329ebeaaa OLDPW="anexamplepassword" NEWPW="newpassword" sh curl-scripts/auth/change-password.sh

curl "https://salty-temple-53843.herokuapp.com/change-password" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "passwords": {
      "old": "'"${OLDPW}"'",
      "new": "'"${NEWPW}"'"
    }
    }'

echo