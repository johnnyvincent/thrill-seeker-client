# Ex: TOKEN=tokengoeshere NAME=titlegoeshere ADDRESS=joeshmoe THEME=themegoeshere sh curl-scripts/parks/create.sh

curl "https://library-express-api.herokuapp.com/movies" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "park": {
      "name": "'"${NAME}"'",
      "address": "'"${ADDRESS}"'", 
      "theme": "'"${THEME}"'"
    }
  }'

echo