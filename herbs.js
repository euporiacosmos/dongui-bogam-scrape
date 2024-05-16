import * as common from "./common.js";
import axios from "axios";
import fs from "fs";

const file_path = "./herbs.txt";
var str;
var book_number_;

async function herbs(i_, book_number) {
    try {
        for (var j = book_number; j <= 22; j++) {
            if (j == 20) {
                // 탕액편 권01(https://mediclassics.kr/books/8/volume/20) 웹 스크래핑
                book_number_ = 20;
                common.init(["탕액범례(湯液序例)", "수부(水部)", "토부(土部)", "곡부(穀部)", "인부(人部)", "금부(禽部)", "수부(獸部)"], "탕액편\n");
                for (var i = i_; i <= 2025; i++) {
                    let response;
                    if (i == 407 || i == 529 || i == 588 || i == 961 || i == 1049 || i == 1338) common.force_set_z_level_is_x();
                    if ((i >= 414 && i <= 525)
                    ||  (i >= 532 && i <= 584)
                    ||  (i >= 591 && i <= 956)
                    ||  (i >= 963 && i <= 1046)
                    ||  (i >= 1051 && i <= 1335)
                    ||  (i >= 1340 && i <= 2025)) common.force_set_s_level_is_z();
                    if (common.get_scrape_flag() == 0) {
                        response = await axios.get("https://mediclassics.kr/books/8/volume/20/content?up_content_seq=" + i)
                        console.log("https://mediclassics.kr/books/8/volume/20/content?up_content_seq=" + i + " scrape complete\nCurrent Progress: " + i + "/2025");
                        common.parse_statement(i, response);
                    } else {
                        response = JSON.parse('{"data":[]}');
                        common.decrease_scrape_flag();
                    }
                }
                str = common.get_str();
                console.log("https://mediclassics.kr/books/8/volume/20 scrape complete");
                i_ = 2;
            } else if (j == 21) {
                // 탕액편 권02(https://mediclassics.kr/books/8/volume/21) 웹 스크래핑
                book_number_ = 21;
                common.init(["어부(魚部)", "충부(蟲部)", "과부(果部)", "채부(菜部)", "초부(草部) 상"], str);
                for (var i = i_; i <= 1533; i++) {
                    let response;
                    if (i == 2 || i == 152 || i == 514 || i == 815 || i == 1207) common.force_set_z_level_is_x();
                    if ((i >= 4 && i <= 148)
                    ||  (i >= 154 && i <= 511)
                    ||  (i >= 516 && i <= 812)
                    ||  (i >= 817 && i <= 1205)
                    ||  (i >= 1209 && i <= 1533)) common.force_set_s_level_is_z();
                    if (common.get_scrape_flag() == 0) {
                        response = await axios.get("https://mediclassics.kr/books/8/volume/21/content?up_content_seq=" + i)
                        console.log("https://mediclassics.kr/books/8/volume/21/content?up_content_seq=" + i + " scrape complete\nCurrent Progress: " + i + "/1533");
                        common.parse_statement(i, response);
                    } else {
                        response = JSON.parse('{"data":[]}');
                        common.decrease_scrape_flag();
                    }
                }
                str = common.get_str();
                console.log("https://mediclassics.kr/books/8/volume/21 scrape complete");
                i_ = 2;
            } else if (j == 22) {
                // 탕액편 권03(https://mediclassics.kr/books/8/volume/22) 웹 스크래핑
                book_number_ = 22;
                common.init(["초부(草部) 하", "목부(木部)", "옥부(玉部)", "석부(石部)", "금부(金部)"], str);
                for (var i = i_; i <= 1587; i++) {
                    let response;
                    if (i == 2 || i == 688 || i == 1255 || i == 1272 || i == 1469) common.force_set_z_level_is_x();
                    if ((i >= 4 && i <= 685)
                    ||  (i >= 690 && i <= 1251)
                    ||  (i >= 1257 && i <= 1268)
                    ||  (i >= 1274 && i <= 1467)
                    ||  (i >= 1471 && i <= 1587)) common.force_set_s_level_is_z();
                    if (common.get_scrape_flag() == 0) {
                        response = await axios.get("https://mediclassics.kr/books/8/volume/22/content?up_content_seq=" + i)
                        console.log("https://mediclassics.kr/books/8/volume/22/content?up_content_seq=" + i + " scrape complete\nCurrent Progress: " + i + "/1587");
                        common.parse_statement(i, response);
                    } else {
                        response = JSON.parse('{"data":[]}');
                        common.decrease_scrape_flag();
                    }
                }
                console.log("https://mediclassics.kr/books/8/volume/22 scrape complete");
            }
        }
        fs.writeFileSync(file_path, common.get_str(), 'utf8');
    } catch (error) {
        herbs(i_, book_number_);
    }
}
herbs(2, 20);