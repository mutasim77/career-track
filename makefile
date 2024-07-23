VUE_PORT = 3000
JSON_SERVER_PORT = 3001

dev: 
	pnpm dev

server:
	pnpm run server

# Start both servers
start:
	@echo "Starting Vue app and json-server..."
	@make -j2 dev server
	@echo "Both servers are running. Vue app on port $(VUE_PORT) and json-server on port $(JSON_SERVER_PORT)"
