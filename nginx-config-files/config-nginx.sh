domainName=shapes.monster
# Copy shapes.monster.conf into  /etc/nginx/conf.d
cp ${domainName}.conf /etc/nginx/conf.d

nginx -t && nginx -s reload
