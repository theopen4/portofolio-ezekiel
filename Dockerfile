# ── Build stage ───────────────────────────────────────────────────
FROM node:20-alpine AS build

WORKDIR /app

# No package.json — pure static site, nothing to compile
# Copy all source files
COPY index.html styles.css main.js photo.jpg ./

# ── Production stage ───────────────────────────────────────────────
FROM nginx:1.27-alpine AS production

# Remove default nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/

# Copy static files from build stage
COPY --from=build /app /usr/share/nginx/html/

# Non-root user for security
RUN chown -R nginx:nginx /usr/share/nginx/html \
    && chmod -R 755 /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
    CMD wget -qO- http://localhost/health || exit 1

CMD ["nginx", "-g", "daemon off;"]
