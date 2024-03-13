import * as common from "./common.js";
import axios from "axios";
import fs from "fs";

const file_path = "./ExternalBody.txt";
// 책 내용을 대략적으로 살펴보면서 스크래핑 하기 위해 하드 코딩
common.init(["머리", "얼굴", "눈", "귀", "코", "입과 혀", "치아", "인후", "경항", "등", "가슴", "젖가슴", "배", "배꼽", "허리", "옆구리", "피부", "육", "맥", "근", "뼈", "팔", "다리", "모발", "전음", "후음"], file_path, "외형편\n");

async function external_body() {
    try {
        // 외형편 권01(https://mediclassics.kr/books/8/volume/5) 웹 스크래핑
        for (var i = 2; i <= 1505; i++) {
            let response;
            if (common.get_scrape_flag() == 0) {
                response = await axios.get("https://mediclassics.kr/books/8/volume/5/content?up_content_seq=" + i)
                console.log("https://mediclassics.kr/books/8/volume/5/content?up_content_seq=" + i + " scrape complete\nCurrent Progress: " + i + "/1505");
            } else {
                response = JSON.parse('{"data":[]}');
                common.decrease_scrape_flag();
            }
            common.parse_statement(i, response);
        }
        console.log("https://mediclassics.kr/books/8/volume/5 scrape complete");
        // 외형편 권02(https://mediclassics.kr/books/8/volume/6) 웹 스크래핑
        for (var i = 2; i <= 1537; i++) {
            let response;
            if (common.get_scrape_flag() == 0) {
                response = await axios.get("https://mediclassics.kr/books/8/volume/6/content?up_content_seq=" + i)
                console.log("https://mediclassics.kr/books/8/volume/6/content?up_content_seq=" + i + " scrape complete\nCurrent Progress: " + i + "/1537");
            } else {
                response = JSON.parse('{"data":[]}');
                common.decrease_scrape_flag();
            }
            common.parse_statement(i, response);
        }
        console.log("https://mediclassics.kr/books/8/volume/6 scrape complete");
        // 외형편 권03(https://mediclassics.kr/books/8/volume/7) 웹 스크래핑
        for (var i = 2; i <= 1924; i++) {
            let response;
            if (common.get_scrape_flag() == 0) {
                response = await axios.get("https://mediclassics.kr/books/8/volume/7/content?up_content_seq=" + i)
                console.log("https://mediclassics.kr/books/8/volume/7/content?up_content_seq=" + i + " scrape complete\nCurrent Progress: " + i + "/1924");
            } else {
                response = JSON.parse('{"data":[]}');
                common.decrease_scrape_flag();
            }
            common.parse_statement(i, response);
        }
        console.log("https://mediclassics.kr/books/8/volume/7 scrape complete");
        // 외형편 권04(https://mediclassics.kr/books/8/volume/8) 웹 스크래핑
        for (var i = 2; i <= 1431; i++) {
            let response;
            if (common.get_scrape_flag() == 0) {
                response = await axios.get("https://mediclassics.kr/books/8/volume/8/content?up_content_seq=" + i)
                console.log("https://mediclassics.kr/books/8/volume/8/content?up_content_seq=" + i + " scrape complete\nCurrent Progress: " + i + "/1431");
            } else {
                response = JSON.parse('{"data":[]}');
                common.decrease_scrape_flag();
            }
            common.parse_statement(i, response);
        }
        console.log("https://mediclassics.kr/books/8/volume/8 scrape complete");
        fs.writeFileSync(file_path, common.get_str(), 'utf8');
    } catch (error) {
        console.error("데이터를 가져오는 중 오류가 발생했습니다:", error);
    }
}

external_body();