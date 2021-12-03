# VARIABLE=VALUE sh curl-scripts/auth/sign-in.sh

# existing details: h@h8
# password: fun

# EMAIL=h@h8 PASSWORD=fun sh curl-scripts/auth/sign-in.sh

curl "http://localhost:4741/sign-in" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'"
    }
    }'

echo