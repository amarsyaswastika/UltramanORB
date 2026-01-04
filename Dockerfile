FROM nginx:alpine

# Hapus default config nginx
RUN rm /etc/nginx/conf.d/default.conf

# Copy config nginx custom
COPY nginx.conf /etc/nginx/conf.d/

# Copy source website ke nginx html folder
COPY nufianhospital /usr/share/nginx/html

EXPOSE 3300

CMD ["nginx", "-g", "daemon off;"]