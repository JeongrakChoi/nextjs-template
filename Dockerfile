FROM node:18-alpine AS base

# BUILD_ENV 인자 설정, 기본값은 prd
ARG BUILD_ENV=prd

# Install dependencies only when needed
FROM base AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Dependency installation stage
COPY package.json package-lock.json* ./
RUN \
  if [ -f package-lock.json ]; then npm ci; \
  else echo "package-lock.json not found." && exit 1; \
  fi

# Build stage
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry during the build.
# ENV NEXT_TELEMETRY_DISABLED 1

# Set environment variables
#ENV HC_SERVER_NAME env-prd
ENV NODE_ENV production

# Build the project (BUILD_ENV 인자를 사용하여 스크립트 실행)
RUN npm run build:$BUILD_ENV

# Production stage
FROM base AS runner
WORKDIR /app

# Set environment variable for production
ENV NODE_ENV production

# Create a group and user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# Change ownership of the .next directory to the nextjs user
# .next 디렉토리에 대한 권한 변경
RUN chown -R nextjs:nodejs /app/.next

# Switch to the nextjs user
USER nextjs

# Expose necessary port and set the start command
EXPOSE 3000

ENV PORT 3000

CMD ["npm", "start"]
