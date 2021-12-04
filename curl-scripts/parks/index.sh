# Ex: TOKEN=tokengoeshere sh curl-scripts/parks/index.sh

curl "https://library-express-api.herokuapp.com/movies" \
  --include \
  --request GET \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \

echo