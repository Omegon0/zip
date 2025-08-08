
# get today's date
today=$(date +%Y-%m-%d)

# go to directory
cd ~/Documents/logs
# create our file. $1 is the first argument
touch $today\ $1.txt

# this is our template... change it to whatever you want. $2 is the second argument
template="---
Date: $today
---

$2

"

# put our stuff into the file (APPENDS! NOT OVERWRITE!)
printf -- "$template" >> "$today $1.txt"
