FROM nginx:alpine

# Hapus default config nginx
RUN rm /etc/nginx/conf.d/default.conf

# Copy config nginx custom
COPY nginx.conf /etc/nginx/conf.d/

# Copy source website ke nginx html folder
COPY nufianhospital /usr/share/nginx/html

# Create non-root user and group
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Give ownership of required directories to non-root user
RUN chown -R appuser:appgroup /usr/share/nginx/html /etc/nginx

EXPOSE 3300

# Run as non-root user for security
USER appuser

CMD ["nginx", "-g", "daemon off;"]
