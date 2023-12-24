const {Builder, By, Key, until} = require('selenium-webdriver');

(async function inside_view_01() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('https://mediclassics.kr/books/8/volume/1');
        await driver.sleep(5000);
        await driver.findElement(By.xpath("//*[@id=\"content_66\"]/div[1]/h3[2]")).click();
        await driver.sleep(10000);
        var document = "";
        for (let i = 67; i < 132; i++) {
            let message = await driver.findElement(By.xpath("//*[@id=\"content_" + i +"\"]/dl/dd[2]")).getText();
            document += message + "\n";
        }
        console.log(document);
        await driver.findElement(By.xpath("//*[@id=\"content_132\"]/div[1]/h3[2]")).click();
        await driver.sleep(10000);
        var document = "";
        for (let i = 133; i < 136; i++) {
            let message = await driver.findElement(By.xpath("//*[@id=\"content_" + i +"\"]/dl/dd[2]")).getText();
            document += message + "\n";
        }
        console.log(document);
        await driver.findElement(By.xpath("//*[@id=\"content_136\"]/div[1]/h3[2]")).click();
        await driver.sleep(10000);
        await driver.findElement(By.xpath("//*[@id=\"content_137\"]/div[1]/h3[2]")).click();
        await driver.sleep(1000);
        var document = "";
        for (let i = 138; i < 140; i++) {
            let message = await driver.findElement(By.xpath("//*[@id=\"content_" + i +"\"]/dl/dd[2]")).getText();
            document += message + "\n";
        }
        console.log(document);
        await driver.findElement(By.xpath("//*[@id=\"content_140\"]/div[1]/h3[2]")).click();
        await driver.sleep(1000);
        var document = "";
        for (let i = 141; i < 143; i++) {
            let message = await driver.findElement(By.xpath("//*[@id=\"content_" + i +"\"]/dl/dd[2]")).getText();
            document += message + "\n";
        }
        console.log(document);
        await driver.findElement(By.xpath("//*[@id=\"content_146\"]/div[1]/h3[2]")).click();
        await driver.sleep(1000);
        var document = "";
        for (let i = 147; i < 149; i++) {
            let message = await driver.findElement(By.xpath("//*[@id=\"content_" + i +"\"]/dl/dd[2]")).getText();
            document += message + "\n";
        }
        console.log(document);
        await driver.findElement(By.xpath("//*[@id=\"content_149\"]/div[1]/h3[2]")).click();
        await driver.sleep(1000);
        var document = "";
        for (let i = 150; i < 151; i++) {
            let message = await driver.findElement(By.xpath("//*[@id=\"content_" + i +"\"]/dl/dd[2]")).getText();
            document += message + "\n";
        }
        console.log(document);
        await driver.findElement(By.xpath("//*[@id=\"content_154\"]/div[1]/h3[2]")).click();
        await driver.sleep(1000);
        var document = "";
        for (let i = 154; i < 158; i++) {
            let message = await driver.findElement(By.xpath("//*[@id=\"content_" + i +"\"]/dl/dd[2]")).getText();
            document += message + "\n";
        }
        console.log(document);
        await driver.findElement(By.xpath("//*[@id=\"content_158\"]/div[1]/h3[2]")).click();
        await driver.findElement(By.xpath("//*[@id=\"content_159\"]/div[1]/h3[2]")).click();
        await driver.findElement(By.xpath("//*[@id=\"content_160\"]/div[1]/h3[2]")).click();
        await driver.findElement(By.xpath("//*[@id=\"content_161\"]/div[1]/h3[2]")).click();
        await driver.sleep(1000);
        var document = "";
        for (let i = 162; i < 165; i++) {
            let message = await driver.findElement(By.xpath("//*[@id=\"content_" + i +"\"]/dl/dd[2]")).getText();
            document += message + "\n";
        }
        console.log(document);
        await driver.findElement(By.xpath("//*[@id=\"content_165\"]/div[1]/h3[2]")).click();
        await driver.sleep(1000);
        var document = "";
        for (let i = 166; i < 171; i++) {
            let message = await driver.findElement(By.xpath("//*[@id=\"content_" + i +"\"]/dl/dd[2]")).getText();
            document += message + "\n";
        }
        console.log(document);
        await driver.findElement(By.xpath("//*[@id=\"content_171\"]/div[1]/h3[2]")).click();
        await driver.sleep(1000);
        var document = "";
        for (let i = 172; i < 173; i++) {
            let message = await driver.findElement(By.xpath("//*[@id=\"content_" + i +"\"]/dl/dd[2]")).getText();
            document += message + "\n";
        }
        console.log(document);
        await driver.findElement(By.xpath("//*[@id=\"content_173\"]/div[1]/h3[2]")).click();
        await driver.sleep(1000);
        var document = "";
        for (let i = 174; i < 175; i++) {
            let message = await driver.findElement(By.xpath("//*[@id=\"content_" + i +"\"]/dl/dd[2]")).getText();
            document += message + "\n";
        }
        console.log(document);
        await driver.findElement(By.xpath("//*[@id=\"content_175\"]/div[1]/h3[2]")).click();
        await driver.sleep(1000);
        var document = "";
        for (let i = 176; i < 177; i++) {
            let message = await driver.findElement(By.xpath("//*[@id=\"content_" + i +"\"]/dl/dd[2]")).getText();
            document += message + "\n";
        }
        console.log(document);
        await driver.findElement(By.xpath("//*[@id=\"content_177\"]/div[1]/h3[2]")).click();
        await driver.sleep(1000);
        var document = "";
        for (let i = 178; i < 180; i++) {
            let message = await driver.findElement(By.xpath("//*[@id=\"content_" + i +"\"]/dl/dd[2]")).getText();
            document += message + "\n";
        }
        console.log(document);
        await driver.findElement(By.xpath("//*[@id=\"content_180\"]/div[1]/h3[2]")).click();
        await driver.sleep(1000);
        var document = "";
        for (let i = 181; i < 182; i++) {
            let message = await driver.findElement(By.xpath("//*[@id=\"content_" + i +"\"]/dl/dd[2]")).getText();
            document += message + "\n";
        }
        console.log(document);
        await driver.findElement(By.xpath("//*[@id=\"content_182\"]/div[1]/h3[2]")).click();
        await driver.sleep(1000);
        var document = "";
        for (let i = 183; i < 185; i++) {
            let message = await driver.findElement(By.xpath("//*[@id=\"content_" + i +"\"]/dl/dd[2]")).getText();
            document += message + "\n";
        }
        console.log(document);
        await driver.findElement(By.xpath("//*[@id=\"content_185\"]/div[1]/h3[2]")).click();
        await driver.sleep(1000);
        var document = "";
        for (let i = 186; i < 191; i++) {
            let message = await driver.findElement(By.xpath("//*[@id=\"content_" + i +"\"]/dl/dd[2]")).getText();
            document += message + "\n";
        }
        console.log(document);
        await driver.findElement(By.xpath("//*[@id=\"content_191\"]/div[1]/h3[2]")).click();
        await driver.sleep(1000);
        var document = "";
        for (let i = 192; i < 196; i++) {
            let message = await driver.findElement(By.xpath("//*[@id=\"content_" + i +"\"]/dl/dd[2]")).getText();
            document += message + "\n";
        }
        console.log(document);
        await driver.findElement(By.xpath("//*[@id=\"content_196\"]/div[1]/h3[2]")).click();
        await driver.sleep(1000);
        var document = "";
        for (let i = 197; i < 201; i++) {
            let message = await driver.findElement(By.xpath("//*[@id=\"content_" + i +"\"]/dl/dd[2]")).getText();
            document += message + "\n";
        }
        console.log(document);
        await driver.findElement(By.xpath("//*[@id=\"content_201\"]/div[1]/h3[2]")).click();
        await driver.sleep(1000);
        var document = "";
        for (let i = 202; i < 211; i++) {
            let message = await driver.findElement(By.xpath("//*[@id=\"content_" + i +"\"]/dl/dd[2]")).getText();
            document += message + "\n";
        }
        console.log(document);
        await driver.findElement(By.xpath("//*[@id=\"content_211\"]/div[1]/h3[2]")).click();
        await driver.sleep(1000);
        var document = "";
        for (let i = 212; i < 217; i++) {
            let message = await driver.findElement(By.xpath("//*[@id=\"content_" + i +"\"]/dl/dd[2]")).getText();
            document += message + "\n";
        }
        console.log(document);
        await driver.findElement(By.xpath("//*[@id=\"content_217\"]/div[1]/h3[2]")).click();
        await driver.sleep(1000);
        var document = "";
        for (let i = 218; i < 222; i++) {
            let message = await driver.findElement(By.xpath("//*[@id=\"content_" + i +"\"]/dl/dd[2]")).getText();
            document += message + "\n";
        }
        console.log(document);
        await driver.findElement(By.xpath("//*[@id=\"content_222\"]/div[1]/h3[2]")).click();
        await driver.sleep(1000);
        var document = "";
        for (let i = 223; i < 230; i++) {
            let message = await driver.findElement(By.xpath("//*[@id=\"content_" + i +"\"]/dl/dd[2]")).getText();
            document += message + "\n";
        }
        console.log(document);
        await driver.findElement(By.xpath("//*[@id=\"content_230\"]/div[1]/h3[2]")).click();
        await driver.sleep(1000);
        var document = "";
        for (let i = 231; i < 238; i++) {
            let message = await driver.findElement(By.xpath("//*[@id=\"content_" + i +"\"]/dl/dd[2]")).getText();
            document += message + "\n";
        }
        console.log(document);
        await driver.findElement(By.xpath("//*[@id=\"content_238\"]/div[1]/h3[2]")).click();
        await driver.sleep(1000);
        var document = "";
        for (let i = 239; i < 263; i++) {
            let message = await driver.findElement(By.xpath("//*[@id=\"content_" + i +"\"]/dl/dd[2]")).getText();
            document += message + "\n";
        }
        console.log(document);
        await driver.findElement(By.xpath("//*[@id=\"content_263\"]/div[1]/h3[2]")).click();
        await driver.sleep(1000);
        var document = "";
        for (let i = 264; i < 327; i++) {
            let message = await driver.findElement(By.xpath("//*[@id=\"content_" + i +"\"]/dl/dd[2]")).getText();
            document += message + "\n";
        }
        console.log(document);
        await driver.findElement(By.xpath("//*[@id=\"content_327\"]/div[1]/h3[2]")).click();
        await driver.sleep(1000);
        var document = "";
        for (let i = 328; i < 331; i++) {
            let message = await driver.findElement(By.xpath("//*[@id=\"content_" + i +"\"]/dl/dd[2]")).getText();
            document += message + "\n";
        }
        console.log(document);
        await driver.findElement(By.xpath("//*[@id=\"content_331\"]/div[1]/h3[2]")).click();
        await driver.sleep(1000);
        var document = "";
        for (let i = 332; i < 333; i++) {
            let message = await driver.findElement(By.xpath("//*[@id=\"content_" + i +"\"]/dl/dd[2]")).getText();
            document += message + "\n";
        }
        console.log(document);
        await driver.findElement(By.xpath("//*[@id=\"content_333\"]/div[1]/h3[2]")).click();
        await driver.sleep(1000);
        var document = "";
        for (let i = 334; i < 335; i++) {
            let message = await driver.findElement(By.xpath("//*[@id=\"content_" + i +"\"]/dl/dd[2]")).getText();
            document += message + "\n";
        }
        console.log(document);
        await driver.findElement(By.xpath("//*[@id=\"content_335\"]/div[1]/h3[2]")).click();
        await driver.sleep(1000);
        var document = "";
        for (let i = 335; i < 336; i++) {
            let message = await driver.findElement(By.xpath("//*[@id=\"content_" + i +"\"]/dl/dd[2]")).getText();
            document += message + "\n";
        }
        console.log(document);
        await driver.findElement(By.xpath("//*[@id=\"content_336\"]/div[1]/h3[2]")).click();
        await driver.sleep(1000);
        var document = "";
        for (let i = 336; i < 337; i++) {
            let message = await driver.findElement(By.xpath("//*[@id=\"content_" + i +"\"]/dl/dd[2]")).getText();
            document += message + "\n";
        }
        console.log(document);
        await driver.findElement(By.xpath("//*[@id=\"content_337\"]/div[1]/h3[2]")).click();
        await driver.findElement(By.xpath("//*[@id=\"content_338\"]/div[1]/h3[2]")).click();
        await driver.sleep(10000);
        await driver.findElement(By.xpath("//*[@id=\"content_339\"]/div[1]/h3[2]")).click();
        await driver.sleep(1000);
        var document = "";
        for (let i = 340; i < 341; i++) {
            let message = await driver.findElement(By.xpath("//*[@id=\"content_" + i +"\"]/dl/dd[2]")).getText();
            document += message + "\n";
        }
        console.log(document);
        await driver.findElement(By.xpath("//*[@id=\"content_341\"]/div[1]/h3[2]")).click();
        await driver.sleep(1000);
        var document = "";
        for (let i = 342; i < 344; i++) {
            let message = await driver.findElement(By.xpath("//*[@id=\"content_" + i +"\"]/dl/dd[2]")).getText();
            document += message + "\n";
        }
        console.log(document);
        await driver.findElement(By.xpath("//*[@id=\"content_344\"]/div[1]/h3[2]")).click();
        await driver.sleep(1000);
        var document = "";
        for (let i = 345; i < 346; i++) {
            let message = await driver.findElement(By.xpath("//*[@id=\"content_" + i +"\"]/dl/dd[2]")).getText();
            document += message + "\n";
        }
        console.log(document);
        await driver.findElement(By.xpath("//*[@id=\"content_346\"]/div[1]/h3[2]")).click();
        await driver.sleep(1000);
        var document = "";
        for (let i = 347; i < 348; i++) {
            let message = await driver.findElement(By.xpath("//*[@id=\"content_" + i +"\"]/dl/dd[2]")).getText();
            document += message + "\n";
        }
        console.log(document);
        await driver.findElement(By.xpath("//*[@id=\"content_348\"]/div[1]/h3[2]")).click();
        await driver.sleep(1000);
        var document = "";
        for (let i = 349; i < 350; i++) {
            let message = await driver.findElement(By.xpath("//*[@id=\"content_" + i +"\"]/dl/dd[2]")).getText();
            document += message + "\n";
        }
        console.log(document);
        await driver.findElement(By.xpath("//*[@id=\"content_350\"]/div[1]/h3[2]")).click();
        await driver.sleep(1000);
        var document = "";
        for (let i = 351; i < 352; i++) {
            let message = await driver.findElement(By.xpath("//*[@id=\"content_" + i +"\"]/dl/dd[2]")).getText();
            document += message + "\n";
        }
        console.log(document);
        await driver.findElement(By.xpath("//*[@id=\"content_352\"]/div[1]/h3[2]")).click();
        await driver.sleep(1000);
        var document = "";
        for (let i = 352; i < 353; i++) {
            let message = await driver.findElement(By.xpath("//*[@id=\"content_" + i +"\"]/dl/dd[2]")).getText();
            document += message + "\n";
        }
        console.log(document);
        await driver.sleep(1000);
    } finally {
        await driver.quit();
    }
})();