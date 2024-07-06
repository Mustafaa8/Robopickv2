FROM oven/bun:latest

WORKDIR /app
# Copy the lock and package file
COPY . /app
# Install dependencies
RUN bun install --frozen-lockfile

# Copy your source code
# If only files in the src folder changed, this is the only step that gets executed!
COPY . ./src 
EXPOSE 8080
CMD bun --hot index.ts