FROM nginx:alpine

# Hapus config default
RUN rm -rf /usr/share/nginx/html/*

# Copy file web ke nginx
COPY UltramanORB-main/ /usr/share/nginx/html/

# Expose port nginx
EXPOSE 80
