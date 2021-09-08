FROM denoland/deno:1.13.2
EXPOSE 8080
WORKDIR /app
USER deno
COPY server.js dependencies.* ./
RUN /bin/bash -c "deno cache dependencies.js || true"
ADD . .
RUN deno cache server.js
CMD ["run", "--unstable", "-A", "server.js"]