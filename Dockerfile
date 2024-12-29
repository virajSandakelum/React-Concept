FROM nginx:latest

WORKDIR /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf.template

COPY dist /usr/share/nginx/html

# COPY entrypoint.sh /entrypoint.sh

# RUN chmod +x /entrypoint.sh

EXPOSE 80

CMD envsubst '$$PROXY_HOST $$ALLOW_HOST' < /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf && nginx -g 'daemon off;'