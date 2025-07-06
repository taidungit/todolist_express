# Sử dụng Node.js v22.13.0
FROM node:22.13.0

# Tạo thư mục app trong container
WORKDIR /app

# Copy package.json và package-lock.json trước (nếu có)
COPY package.json package-lock.json ./

# Cài dependencies bằng npm
RUN npm ci --omit=dev

# Copy toàn bộ mã nguồn vào container
COPY . .

# Expose port app (ví dụ 3000)
EXPOSE 3000

# Start app
CMD ["npm", "start"]
