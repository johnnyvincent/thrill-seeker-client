# VARIABLE=VALUE sh curl-scripts/auth/sign-out.sh

curl "https://salty-temple-53843.herokuapp.com/sign-out" \
  --include \
  --request DELETE \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" 

echo