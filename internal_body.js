import * as common from "./common.js";
import axios from "axios";
import fs from "fs";

const file_path = "./InternalBody.txt";

// 책 내용을 대략적으로 살펴보면서 스크래핑 하기 위해 하드 코딩
common.init(["신형", "부록: 노인 봉양", "정", "기", "신", "혈", "꿈", "성음(聲音)", "말", "진액(津液)", "담음(痰飮)", "오장육부", "간장(肝臟)", "심장(心臟)", "비장(脾臟)", "폐장(肺臟)", "신장(腎臟)", "담부(膽腑)", "위부(胃腑)", "소장부(小腸腑)", "대장부(大腸腑)", "방광부(膀胱腑)", "삼초부(三焦腑)", "포(胞)", "충(蟲)", "소변", "대변"], file_path, "내경편\n\t신형장부도\n");

async function internal_body() {
    try {
        // 서문, 목차 제외
        // 역사적 위인에게 무례할 수도 있지만 [동의보감] 집필 계기도 제외, 따라서 앞 부분 전체(서문 ~ 역대의방) 제외
        // https://mediclassics.kr/books/8/volume/1/content?up_content_seq=1 에서 제외된 목차가 O Level 컨텐츠로 분류된 걸 확인할 수 있다.
        const response_test = await axios.get("https://mediclassics.kr/books/8/volume/1/content?up_content_seq=132");
        for (var i = 0; i < response_test.data.length; ++i) {
            if (i != 0) {
                common.add_str_to_str("\t\t" + response_test.data[i].ko.replace(/\n+/g, "") + "\n");
            }
        }
        console.log("연결 확인");
        // 내경편 권01(https://mediclassics.kr/books/8/volume/1) 웹 스크래핑
        for (var i = 136; i <= 1244; i++) {
            let response;
            if (common.get_scrape_flag() === 0) {
                response = await axios.get("https://mediclassics.kr/books/8/volume/1/content?up_content_seq=" + i)
                console.log("https://mediclassics.kr/books/8/volume/1/content?up_content_seq=" + i + " scrape complete\nCurrent Progress: " + i + "/1244");
            } else {
                response = JSON.parse('{"data":[]}');
                common.decrease_scrape_flag();
            }
            common.parse_statement(i, response);
        }
        console.log("https://mediclassics.kr/books/8/volume/1 scrape complete");
        // 내경편 권02(https://mediclassics.kr/books/8/volume/2) 웹 스크래핑
        for (var i = 2; i <= 1410; i++) {
            let response;
            if (common.get_scrape_flag() === 0) {
                response = await axios.get("https://mediclassics.kr/books/8/volume/2/content?up_content_seq=" + i)
                console.log("https://mediclassics.kr/books/8/volume/2/content?up_content_seq=" + i + " scrape complete\nCurrent Progress: " + i + "/1410");
            } else {
                response = JSON.parse('{"data":[]}');
                common.decrease_scrape_flag();
            }
            common.parse_statement(i, response);
        }
        console.log("https://mediclassics.kr/books/8/volume/2 scrape complete");
        // 내경편 권03(https://mediclassics.kr/books/8/volume/3) 웹 스크래핑
        for (var i = 2; i <= 1774; i++) {
            let response;
            if (common.get_scrape_flag() === 0) {
                response = await axios.get("https://mediclassics.kr/books/8/volume/3/content?up_content_seq=" + i)
                console.log("https://mediclassics.kr/books/8/volume/3/content?up_content_seq=" + i + " scrape complete\nCurrent Progress: " + i + "/1774");
            } else {
                response = JSON.parse('{"data":[]}');
                common.decrease_scrape_flag();
            }
            common.parse_statement(i, response);
        }
        console.log("https://mediclassics.kr/books/8/volume/3 scrape complete");
        // 내경편 권04(https://mediclassics.kr/books/8/volume/4) 웹 스크래핑
        for (var i = 2; i <= 1486; i++) {
            let response;
            if (common.get_scrape_flag() === 0) {
                response = await axios.get("https://mediclassics.kr/books/8/volume/4/content?up_content_seq=" + i)
                console.log("https://mediclassics.kr/books/8/volume/4/content?up_content_seq=" + i + " scrape complete\nCurrent Progress: " + i + "/1486");
            } else {
                response = JSON.parse('{"data":[]}');
                common.decrease_scrape_flag();
            }
            common.parse_statement(i, response);
        }
        console.log("https://mediclassics.kr/books/8/volume/4 scrape complete");
        fs.writeFileSync(file_path, common.get_str(), 'utf8');
    } catch (error) {
        console.error("데이터를 가져오는 중 오류가 발생했습니다:", error);
    }
}

internal_body();