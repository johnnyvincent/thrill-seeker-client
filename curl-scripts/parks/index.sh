# Ex: TOKEN=tokengoeshere sh curl-scripts/parks/index.sh

curl "https://salty-temple-53843.herokuapp.com/parks" \
  --include \
  --request GET \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \

echo