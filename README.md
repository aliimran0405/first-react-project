# Sneaker Showcase

## English
### Requirements 
- NodeJS v20.15.0 (earlier or later versions will likely work)

### How to run server
1. Change directory to 'sneakerShowcase'
2. Run the command 'npm install prop-types react-router-dom'
3. Run the command 'npm run dev'
4. Access the server with 'http://127.0.0.1:5173/' or 'localhost:5173'
5. Terminate the server with 'ctrl + C' or 'cmd + C' for Mac

### FAQ

**Something is not working, what should I do?**
If you are running the command 'npm run dev' but the client won't start, you may be experiencing a 'Rollup' issue. If that happens, run the command 'rm -rf node_modules package-lock.json' and then run the command 'npm install prop-types react-router-dom' to re-install the modules.