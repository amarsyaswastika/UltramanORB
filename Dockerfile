FROM nginx:alpine

# 1. Hapus default config
RUN rm /etc/nginx/conf.d/default.conf

# 2. Copy config custom (Pastikan di dalam file ini: "listen 3300;")
COPY nginx.conf /etc/nginx/conf.d/

# 3. Copy source website
COPY ultramanorb /usr/share/nginx/html

# 4. Buat user dan grup non-root
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# 5. PERBAIKAN KRITIS: Beri izin akses ke folder sistem Nginx agar bisa jalan tanpa root
RUN chown -R appuser:appgroup /usr/share/nginx/html && \
    chown -R appuser:appgroup /var/cache/nginx && \
    chown -R appuser:appgroup /var/log/nginx && \
    chown -R appuser:appgroup /etc/nginx/conf.d && \
    touch /var/run/nginx.pid && \
    chown -R appuser:appgroup /var/run/nginx.pid

EXPOSE 3300

# 6. Pindah ke user non-root
USER appuser

CMD ["nginx", "-g", "daemon off;"]
