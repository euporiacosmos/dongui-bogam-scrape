const axios = require('axios');
const fs = require('fs');

var exception = "";
var 내경편_권03 = {"오장육부": {}, "간장(肝臟)": {}, "심장(心臟)": {}, "비장(脾臟)": {}, "폐장(肺臟)": {}, "신장(腎臟)": {}, "담부(膽腑)": {}, "위부(胃腑)": {}, "소장부(小腸腑)": {}, "대장부(大腸腑)": {}, "방광부(膀胱腑)": {}, "삼초부(三焦腑)": {}, "포(胞)": {}, "충(蟲)": {}};
// 책 내용을 대략적으로 살펴보면서 스크래핑 하기 위해 하드 코딩
const 내경편_권03_목차 = ["오장육부", "간장(肝臟)", "심장(心臟)", "비장(脾臟)", "폐장(肺臟)", "신장(腎臟)", "담부(膽腑)", "위부(胃腑)", "소장부(小腸腑)", "대장부(大腸腑)", "방광부(膀胱腑)", "삼초부(三焦腑)", "포(胞)", "충(蟲)"];
const file_path = "./dongui-bogam.json";
const exception_file_path = "./dongui-bogam-exception.txt";

function remove_span_tag(str) {
    return str.replace(/<span[^>]*>/g, "(").replace(/<\/span>/g, ")");
}
// 내경편 권03(https://mediclassics.kr/books/8/volume/3) 웹 스크래핑
async function inside_view_03() {
    try {
        var i = 0; // 내경편_권03_목차 인덱스
        var i_middle = 0;
        var i_small = 0;
        var middle = []; // content_level: C Level
        var c_count = 0;
        var c_count_store = 0; // C 레벨 컨텐츠 목차의 개수를 저장
        var small = []; // content_level: D Level
        var d_count = 0;
        var d_count_store = 0; // D 레벨 컨텐츠 목차의 개수를 저장
        for (i1 = 2; i1 <= 1774; i1++) {
            const response = await axios.get("https://mediclassics.kr/books/8/volume/3/content?up_content_seq=" + i1);
            if (response.data.length != 0) {
                for (var i2 = 0; i2 < response.data.length; i2++) {
                    switch(response.data[i2].content_level) {
                        // 하위 목차인지 본문인지에 따라 다른 처리
                        case 'C': // C 레벨 컨텐츠: 하위 목차
                            내경편_권03[내경편_권03_목차[i]][remove_span_tag(response.data[i2].ko).replace(/\n/g, "")] = {};
                            middle[c_count] = remove_span_tag(response.data[i2].ko).replace(/\n/g, "");
                            c_count++;
                            console.log(내경편_권03_목차[i] + "의 하위 목차 생성: " + remove_span_tag(response.data[i2].ko).replace(/\n/g, ""));
                            if (i2 == response.data.length - 1) {
                                c_count_store = c_count;
                            }
                            break;
                        case 'D': // D 레벨 컨텐츠: 하위 목차의 하위 목차
                            내경편_권03[내경편_권03_목차[i]][middle[i_middle]][remove_span_tag(response.data[i2].ko).replace(/\n/g, "")] = {};
                            small[d_count] = remove_span_tag(response.data[i2].ko).replace(/\n/g, "");
                            d_count++;
                            console.log(middle[i_middle].replace(/\n/g, "") + "의 하위 목차 생성: " + remove_span_tag(response.data[i2].ko).replace(/\n/g, ""));
                            if (i2 == response.data.length - 1) {
                                d_count_store = d_count;
                            }
                            break;
                        case 'P':
                            console.log("이미지: " + response.data[i2].ko);
                            break;
                        case 'X': // D 레벨 컨텐츠들 최상단에 있는 설명 본문
                            if (i2 == 0) 내경편_권03[내경편_권03_목차[i]][middle[i_middle]]["설명"] = remove_span_tag(response.data[i2].ko);
                            else 내경편_권03[내경편_권03_목차[i]][middle[i_middle]]["설명"] += remove_span_tag(response.data[i2].ko);
                            if (i2 == response.data.length - 1) i_small++;
                            break;
                        case 'S': // D 레벨 컨텐츠 하위 본문
                            if (i2 == 0) 내경편_권03[내경편_권03_목차[i]][middle[i_middle]][small[i_small]] = remove_span_tag(response.data[i2].ko);
                            else 내경편_권03[내경편_권03_목차[i]][middle[i_middle]][small[i_small]] += remove_span_tag(response.data[i2].ko);
                            if (i2 == response.data.length - 1) {
                                i_small++;
                                if (i_small == d_count_store) i_middle++;
                            }
                            break;
                        case 'Z': // 본문
                            if (i2 == 0) 내경편_권03[내경편_권03_목차[i]][middle[i_middle]] = remove_span_tag(response.data[i2].ko);
                            else 내경편_권03[내경편_권03_목차[i]][middle[i_middle]] += remove_span_tag(response.data[i2].ko);
                            if (i2 == response.data.length - 1) i_middle++;
                            break;
                        default:
                            exception += 내경편_권03_목차[i] + ": " + response.data[i2].ko + "\n";
                            break;
                    }
                    if (i2 == response.data.length - 1 && i_middle == c_count_store) c_count = 0;
                    if (i2 == response.data.length - 1 && i_small == d_count_store) d_count = 0;
                }
                if (i_small == d_count_store) i_small = 0;
                if (i_middle == c_count_store) {
                    i_middle = 0;
                    i++;
                }
            }
        }
        console.log("https://mediclassics.kr/books/8/volume/3 scrape complete");
        fs.writeFileSync(exception_file_path, exception, 'utf8');
        var file = fs.readFileSync(file_path, 'utf8');
        file = file.slice(0, -2); // 맨 끝에 있는 }} 를 제거
        file += JSON.stringify(내경편_권03).replace("{", ","/* 맨 앞에 있는 {를 ,로 대체 */);
        fs.writeFileSync(file_path, file + '}', 'utf8');
    } catch (error) {
        console.error(error);
    }
}

inside_view_03();