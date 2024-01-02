const axios = require('axios');
const fs = require('fs');

var file_path = "./dongui-bogam.json"
var exception_file_path = "./dongui-bogam-exception.json"
var 내경편 = {"신형장부도": "", "신형": {}, "부록: 노인 봉양": {}, "정": {}, "기": {}, "신": {}};
var exception = {};

const 내경편_목차 = ["신형장부도", "신형", "부록: 노인 봉양", "정", "기", "신"];

function remove_span_tag(str) {
    return str.replace(/<span[^>]*>/g, "(").replace(/<\/span>/g, ")");
}

async function inside_view() {
    try {
        var i = 0; // 내경편_목차 인덱스
        var i_middle = 0;
        var i_small = 0;
        var middle = []; // content_level: C Level
        var c_count_store = 0; // C 레벨 컨텐츠 개수를 다음 for 루프에서 읽어오기 위해 저장
        var small = []; // content_level: D Level
        var d_count_store = 0; // D 레벨 컨텐츠 개수를 다음 for 루프에서 읽어오기 위해 저장
        // 0: 신형장부도, 1: 신형, 2: 부록:노인 봉양, 3: 정, 4: 기, 5: 신
        for (var i1 = 132; i1 <= 1244; i1++) {
            const response = await axios.get("https://mediclassics.kr/books/8/volume/1/content?up_content_seq=" + i1);
            var c_count = 0;
            var d_count = 0;
            for (var i2 = 0; i2 < response.data.length; i2++) {
                switch(response.data[i2].content_level) {
                    case 'C':
                        middle[c_count] = response.data[i2].ko;
                        c_count++;
                        break;
                    case 'D':
                        small[d_count] = response.data[i2].ko;
                        d_count++;
                        break;
                    case 'X': // D 레벨 컨텐츠 설명 본문
                        break;
                    case 'S': // D 레벨 컨텐츠 하위 본문
                        내경편[내경편_목차[i]][middle[i_middle]][small[i_small]] = remove_span_tag(response.data[i2].ko);
                        break;
                    case 'Z': // 본문
                        break;
                    default:
                        exception[response.data[i2].content_level] = response.data[i2].ko;
                }
                if (i2 == response.data.length - 1) {
                    c_count_store = c_count;
                    d_count_store = d_count;
                }
            }
            if (i_middle == c_count_store || i1 == 136/* 신형장부도는 C 레벨 컨텐츠가 없다 */) {
                i_middle = 0;
                i++;
            }
            if (i_small == d_count_store) {
                i_small = 0;
            }
        }
        fs.writeFileSync(file_path, JSON.stringify(내경편));
        fs.writeFileSync(exception_file_path, JSON.stringify(exception));
        console.log(내경편);
        console.log(exception);
    } catch (error) {
        console.error("데이터를 가져오는 중 오류가 발생했습니다:", error);
    }
}

inside_view();