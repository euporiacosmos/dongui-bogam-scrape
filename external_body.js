import * as common from "./common.js";
import axios from "axios";
import fs from "fs";

const file_path = "./ExternalBody.txt";
// 책 내용을 대략적으로 살펴보면서 스크래핑 하기 위해 하드 코딩
var str;
var book_number_;

async function external_body(i_, book_number) {
    try {
        for (var j = book_number; j <= 8; j++) {
            if (j == 5) {
                // 외형편 권01(https://mediclassics.kr/books/8/volume/5) 웹 스크래핑
                book_number_ = 5;
                common.init(["머리", "얼굴", "눈"], "외형편\n");
                for (var i = i_; i <= 1505; i++) {
                    let response;
                    if (common.get_scrape_flag() == 0) {
                        response = await axios.get("https://mediclassics.kr/books/8/volume/5/content?up_content_seq=" + i)
                        console.log("https://mediclassics.kr/books/8/volume/5/content?up_content_seq=" + i + " scrape complete\nCurrent Progress: " + i + "/1505");
                        common.parse_statement(i, response);
                    } else {
                        response = JSON.parse('{"data":[]}');
                        common.decrease_scrape_flag();
                    }
                }
                str = common.get_str();
                console.log("https://mediclassics.kr/books/8/volume/5 scrape complete");
                i_ = 2;
            } else if (j == 6) {
                // 외형편 권02(https://mediclassics.kr/books/8/volume/6) 웹 스크래핑
                book_number_ = 6;
                common.init(["귀", "코", "입과 혀", "치아", "인후", "경항", "등"], str);
                for (var i = i_; i <= 1537; i++) {
                    let response;
                    if (common.get_scrape_flag() == 0) {
                        response = await axios.get("https://mediclassics.kr/books/8/volume/6/content?up_content_seq=" + i)
                        console.log("https://mediclassics.kr/books/8/volume/6/content?up_content_seq=" + i + " scrape complete\nCurrent Progress: " + i + "/1537");
                        common.parse_statement(i, response);
                    } else {
                        response = JSON.parse('{"data":[]}');
                        common.decrease_scrape_flag();
                    }
                }
                str = common.get_str();
                console.log("https://mediclassics.kr/books/8/volume/6 scrape complete");
                i_ = 2;
            } else if (j == 7) {
                // 외형편 권03(https://mediclassics.kr/books/8/volume/7) 웹 스크래핑
                book_number_ = 7;
                common.init(["가슴", "젖가슴", "배", "배꼽", "허리", "옆구리", "피부", "육", "맥", "근", "뼈"], str);
                for (var i = i_; i <= 1924; i++) {
                    let response;
                    if (i == 169) common.force_set_z_level_is_s();
                    if (common.get_scrape_flag() == 0) {
                        response = await axios.get("https://mediclassics.kr/books/8/volume/7/content?up_content_seq=" + i)
                        console.log("https://mediclassics.kr/books/8/volume/7/content?up_content_seq=" + i + " scrape complete\nCurrent Progress: " + i + "/1924");
                        common.parse_statement(i, response);
                    } else {
                        response = JSON.parse('{"data":[]}');
                        common.decrease_scrape_flag();
                    }
                }
                str = common.get_str();
                console.log("https://mediclassics.kr/books/8/volume/7 scrape complete");
                i_ = 2;
            } else if (j == 8) {
                // 외형편 권04(https://mediclassics.kr/books/8/volume/8) 웹 스크래핑
                book_number_ = 8;
                common.init(["팔", "다리", "모발", "전음", "후음"], str);
                for (var i = i_; i <= 1431; i++) {
                    let response;
                    if (common.get_scrape_flag() == 0) {
                        response = await axios.get("https://mediclassics.kr/books/8/volume/8/content?up_content_seq=" + i)
                        console.log("https://mediclassics.kr/books/8/volume/8/content?up_content_seq=" + i + " scrape complete\nCurrent Progress: " + i + "/1431");
                        common.parse_statement(i, response);
                    } else {
                        response = JSON.parse('{"data":[]}');
                        common.decrease_scrape_flag();
                    }
                }
                console.log("https://mediclassics.kr/books/8/volume/8 scrape complete");
            }
        }
        fs.writeFileSync(file_path, common.get_str(), 'utf8');
    } catch (error) {
        console.log("서버 터짐. 10초간 스크래핑 중단...")
        const wakeUpTime = Date.now() + 10000;
        while (Date.now() < wakeUpTime) {};
        external_body(i_, book_number_);
    }
}
external_body(2, 5);