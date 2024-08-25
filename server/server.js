const http =require('http')
const port = 4000;
const url =require('url')
const link=require('fs')


const server = http.createServer((req,res)=>{
    const req_url = req.url;
    console.log("req_url :",req_url);

    let parsed_url = url.parse(req_url);
    console.log("parsed_url :",parsed_url);

   
  if (parsed_url.pathname === '/'){
    res.writeHead(200,{'Content-Type' : 'text/html'})
    res.end(link.readFileSync('../client/index.html'))
  }
  else if(parsed_url.pathname === '/style.css'){
    res.writeHead(200,{'Content-Type' : 'text/css'})
    res.end(link.readFileSync('../client/style.css'))
  }
  else if(parsed_url.pathname === '/script.js'){
    res.writeHead(200,{'Content-Type' : 'text/javascript'})
    res.end(link.readFileSync('../client/script.js'))
  }
  else if (parsed_url.pathname === '/json'){
    res.writeHead(200,{'Content-Type' : 'text/json'})
    res.end(link.readFileSync('./datas.json'))
  }

})

server.listen(port,()=>{
    console.log(`server running at http://localhost:${port}`);
})