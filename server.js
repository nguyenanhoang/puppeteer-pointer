var express = require('express');
var app = express();

const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.goto('https://daotien.herokuapp.com');
  // await page.screenshot({path: 'example.png'});
  setInterval(async () => {
    await page.goto('https://'+process.env.APP_NAME+'.herokuapp.com');
    await page.goto('https://daotien.herokuapp.com');
    console.log("dao tien timeout ");
  }, 20*60*1000);
})();



app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname));

app.post('/api/:file',function(req,res,next){
   //some code
   console.log('postreq');
   console.log(req.url);
   res.redirect(req.url);
});
console.log("app.get('host')");
console.log(process.env.APP_NAME);

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});