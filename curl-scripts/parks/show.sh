# Ex: TOKEN=tokengoeshere ID=idgoeshere sh curl-scripts/parks/show.sh

curl "https://salty-temple-53843.herokuapp.com/parks/${ID}" \
  --include \
  --request GET \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \

echo