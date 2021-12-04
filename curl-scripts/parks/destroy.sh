# Ex: ID=idgoeshere TOKEN=tokengoeshere sh curl-scripts/parks/destroy.sh

curl "https://salty-temple-53843.herokuapp.com/parks/${ID}" \
  --include \
  --request DELETE \
  --header "Authorization: Bearer ${TOKEN}" \

echo