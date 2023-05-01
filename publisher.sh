#!/bin/sh

# get env vars
source .env

echo "(.,.) Cooking.."

# build and copy to website project
npm run build


if [ -d "${WEBSITE_PROJECT_PATH}/feeds" ] 
then
    echo "(-o-) Found older data" 
    rm -r $WEBSITE_PROJECT_PATH/feeds
fi

echo "(-o-) Moving.." 
cp -r dist $WEBSITE_PROJECT_PATH/feeds

echo "(.v.) Fooblishing.." 

# publish
(cd $WEBSITE_PROJECT_PATH && git add feeds/ && git commit -m 'new feed' && git push)

