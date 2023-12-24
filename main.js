const { MongoClient } = require('mongodb');

const uri = "";
const client = new MongoClient(uri);
const {Builder, By} = require('selenium-webdriver');

(async function inside_view_01() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        const db = client.db('dongui-bogam');
        const inside_view_01 = db.collection('inside_view_01');
        await driver.get('https://mediclassics.kr/books/8/volume/1');
        await driver.sleep(5000);
        await driver.findElement(By.xpath("//*[@id=\"content_66\"]/div[1]/h3[2]")).click();
        await driver.sleep(10000);
        var document = {};
        var field = "";
        for (let i = 67; i < 132; i++) {
            let message = await driver.findElement(By.xpath("//*[@id=\"content_" + i +"\"]/dl/dd[2]")).getText();
            field += message + "\n";
        }
        console.log(field);
        document.역대의방 = field;
        await driver.findElement(By.xpath("//*[@id=\"content_132\"]/div[1]/h3[2]")).click();
        await driver.sleep(10000);
        var field = "";
        for (let i = 133; i < 136; i++) {
            let message = await driver.findElement(By.xpath("//*[@id=\"content_" + i +"\"]/dl/dd[2]")).getText();
            field += message + "\n";
        }
        console.log(field);
        document.신형장부도 = field;
        await driver.findElement(By.xpath("//*[@id=\"content_136\"]/div[1]/h3[2]")).click();
        await driver.sleep(10000);
        var super_field = {};
        await driver.findElement(By.xpath("//*[@id=\"content_137\"]/div[1]/h4[2]")).click();
        await driver.sleep(1000);
        var field = "";
        for (let i = 138; i < 140; i++) {
            let message = await driver.findElement(By.xpath("//*[@id=\"content_" + i +"\"]/dl/dd[2]")).getText();
            field += message + "\n";
        }
        console.log(field);
        super_field.형기의_시작 = field;
        await driver.findElement(By.xpath("//*[@id=\"content_140\"]/div[1]/h4[2]")).click();
        await driver.sleep(1000);
        var field = "";
        for (let i = 141; i < 143; i++) {
            let message = await driver.findElement(By.xpath("//*[@id=\"content_" + i +"\"]/dl/dd[2]")).getText();
            field += message + "\n";
        }
        console.log(field);
        super_field.잉태의_시작 = field;
        await driver.findElement(By.xpath("//*[@id=\"content_146\"]/div[1]/h4[2]")).click();
        await driver.sleep(1000);
        var field = "";
        for (let i = 147; i < 149; i++) {
            let message = await driver.findElement(By.xpath("//*[@id=\"content_" + i +"\"]/dl/dd[2]")).getText();
            field += message + "\n";
        }
        console.log(field);
        super_field.사대가_형을_이룬다 = field;
        await driver.findElement(By.xpath("//*[@id=\"content_149\"]/div[1]/h4[2]")).click();
        await driver.sleep(1000);
        var field = "";
        for (let i = 150; i < 151; i++) {
            let message = await driver.findElement(By.xpath("//*[@id=\"content_" + i +"\"]/dl/dd[2]")).getText();
            field += message + "\n";
        }
        console.log(field);
        super_field.기의_성쇠 = field;
        await driver.findElement(By.xpath("//*[@id=\"content_154\"]/div[1]/h4[2]")).click();
        await driver.sleep(1000);
        var field = "";
        for (let i = 155; i < 158; i++) {
            let message = await driver.findElement(By.xpath("//*[@id=\"content_" + i +"\"]/dl/dd[2]")).getText();
            field += message + "\n";
        }
        console.log(field);
        super_field.늙으면_자식을_가질_수_없는_이유 = field;
        await driver.sleep(1000);
        document.신형 = super_field;
        const result = await inside_view_01.insertOne(document);
        
        // Print the ID of the inserted document
        console.log(`문서 삽입 완료: _id: ${result.insertedId}`);
    } finally {
        await driver.quit();
        await client.close();
    }
})();