const axios = require('axios');
const fs = require('fs');

var exception = "";
var 내경편_권02 = {"혈": {}, "꿈": {}, "성음(聲音)": {}, "말": {}, "진액(津液)": {}, "담음(痰飮)": {}};
// 책 내용을 대략적으로 살펴보면서 스크래핑 하기 위해 하드 코딩
const 내경편_권02_목차 = ["혈", "꿈", "성음(聲音)", "말", "진액(津液)", "담음(痰飮)"];
const file_path = "./내경편-권02.json";
const exception_file_path = "./dongui-bogam-exception.txt";

function remove_span_tag(str) {
    return str.replace(/<span[^>]*>/g, "(").replace(/<\/span>/g, ")");
}
// 내경편 권02(https://mediclassics.kr/books/8/volume/2) 웹 스크래핑
async function inside_view_02() {
    try {
        var i = 0; // 내경편_권02_목차 인덱스
        var i_middle = 0;
        var i_small = 0;
        var i_tiny = 0;
        var middle = []; // content_level: C Level
        var c_count = 0;
        var c_count_store = 0; // C 레벨 컨텐츠 목차의 개수를 저장
        var small = []; // content_level: D Level
        var d_count = 0;
        var d_count_store = 0; // D 레벨 컨텐츠 목차의 개수를 저장
        var tiny = []; // content_level: E Level
        var e_count = 0;
        var e_count_store = 0; // E 레벨 컨텐츠 목차의 개수를 저장
        var scrape_flag = 0; // 0일 때만 스크래핑
        for (i1 = 158; i1 <= 191; i1++) {
            let response;
            if (scrape_flag == 0) {
                response = await axios.get("https://mediclassics.kr/books/8/volume/2/content?up_content_seq=" + i1);
            } else {
                response = JSON.parse('{"data":[]}');
                scrape_flag--;
            }
            if (response.data.length != 0) {
                console.log("https://mediclassics.kr/books/8/volume/2/content?up_content_seq=" + i1 + " scrape complete\nCurrent Progress: " + i1 + "/1410");
                for (var i2 = 0; i2 < response.data.length; i2++) {
                    console.log(response.data[i2].ko);
                    if (i2 == response.data.length - 1 && i_middle == c_count_store) c_count = 0;
                    if (i2 == response.data.length - 1 && i_small == d_count_store) d_count = 0;
                    if (i2 == response.data.length - 1 && i_tiny == e_count_store) e_count = 0;
                }
                if (i_small == d_count_store) i_small = 0;
                if (i_middle == c_count_store) {
                    i_middle = 0;
                    i++;
                }
            }
        }
        console.log("https://mediclassics.kr/books/8/volume/2 scrape complete");
        fs.writeFileSync(file_path, JSON.stringify(내경편_권02), 'utf8');
        fs.writeFileSync(exception_file_path, exception, 'utf8');
    } catch (error) {
        console.error("데이터를 가져오는 중 오류가 발생했습니다:", error);
    }
}

inside_view_02();