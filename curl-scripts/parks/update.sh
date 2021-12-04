# Ex: TOKEN=tokengoeshere ID=idgoeshere NAME=namegoeshere ADDRESS=joeshmoe THEME=themegoeshere sh curl-scripts/parks/update.sh

curl "https://library-express-api.herokuapp.com/movies/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "movie": {
      "name": "'"${NAME}"'",
      "address": "'"${ADDRESS}"'",
      "theme": "'"${THEME}"'"
    }
  }'

  echo