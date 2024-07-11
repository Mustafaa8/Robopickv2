FROM oven/bun:latest

WORKDIR /app
# Copy the lock and package file
COPY . /app
# Install dependencies
RUN bun install --frozen-lockfile
EXPOSE 8080
CMD bun ./build/index.js