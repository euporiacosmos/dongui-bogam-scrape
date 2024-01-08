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
        for (i1 = 2; i1 <= 1410; i1++) {
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
                    switch(response.data[i2].content_level) {
                        // 하위 목차인지 본문인지에 따라 다른 처리
                        case 'C': // C 레벨 컨텐츠: 하위 목차
                            내경편_권02[내경편_권02_목차[i]][remove_span_tag(response.data[i2].ko).replace(/\n/g, "")] = {};
                            middle[c_count] = remove_span_tag(response.data[i2].ko).replace(/\n/g, "");
                            c_count++;
                            console.log(내경편_권02_목차[i] + "의 하위 목차 생성: " + remove_span_tag(response.data[i2].ko).replace(/\n/g, ""));
                            if (i2 == response.data.length - 1) {
                                c_count_store = c_count;
                            }
                            break;
                        case 'D': // D 레벨 컨텐츠: 하위 목차의 하위 목차
                            내경편_권02[내경편_권02_목차[i]][middle[i_middle]][remove_span_tag(response.data[i2].ko).replace(/\n/g, "")] = {};
                            small[d_count] = remove_span_tag(response.data[i2].ko).replace(/\n/g, "");
                            d_count++;
                            console.log(middle[i_middle].replace(/\n/g, "") + "의 하위 목차 생성: " + remove_span_tag(response.data[i2].ko).replace(/\n/g, ""));
                            if (i2 == response.data.length - 1) {
                                d_count_store = d_count;
                            }
                            break;
                        case 'E': // E 레벨 컨텐츠: 하위 목차의 하위 목차의 하위 목차
                            내경편_권02[내경편_권02_목차[i]][middle[i_middle]][small[i_small]][remove_span_tag(response.data[i2].ko).replace(/\n/g, "")] = {};
                            tiny[e_count] = remove_span_tag(response.data[i2].ko).replace(/\n/g, "");
                            e_count++;
                            console.log(small[i_small].replace(/\n/g, "") + "의 하위 목차 생성: " + remove_span_tag(response.data[i2].ko).replace(/\n/g, ""));
                            if (i2 == response.data.length - 1) {
                                e_count_store = e_count;
                            }
                            break;
                        case 'P':
                            console.log("이미지: " + response.data[i2].ko);
                            break;
                        case 'X': // D 레벨 컨텐츠들 최상단에 있는 설명 본문
                            if (i2 == 0) 내경편_권02[내경편_권02_목차[i]][middle[i_middle]]["설명"] = remove_span_tag(response.data[i2].ko);
                            else 내경편_권02[내경편_권02_목차[i]][middle[i_middle]]["설명"] += remove_span_tag(response.data[i2].ko);
                            if (i2 == response.data.length - 1) {
                                i_small++;
                                scrape_flag = i2;   
                            }
                            break;
                        case 'S': // D 레벨 컨텐츠 하위 본문, E 레벨 컨텐츠 하위 본문
                            if (tiny.length == 0) { // D 레벨 컨텐츠 하위 본문
                                console.log(d_count_store);
                                if (i2 == 0) 내경편_권02[내경편_권02_목차[i]][middle[i_middle]][small[i_small]] = remove_span_tag(response.data[i2].ko);
                                else 내경편_권02[내경편_권02_목차[i]][middle[i_middle]][small[i_small]] += remove_span_tag(response.data[i2].ko);
                                if (i2 == response.data.length - 1) {
                                    i_small++;
                                    scrape_flag = i2;
                                    if (i_small == d_count_store) i_middle++;
                                }
                            } else { // E 레벨 컨텐츠 하위 본문
                                if (i2 == 0) 내경편_권02[내경편_권02_목차[i]][middle[i_middle]][small[i_small]][tiny[i_tiny]] = remove_span_tag(response.data[i2].ko);
                                else 내경편_권02[내경편_권02_목차[i]][middle[i_middle]][small[i_small]][tiny[i_tiny]] += remove_span_tag(response.data[i2].ko);
                                if (i2 == response.data.length - 1) {
                                    i_tiny++;
                                    scrape_flag = i2;
                                    if (i_tiny == e_count_store) {
                                        i_small++;
                                        i_tiny = 0;
                                    }
                                    if (i_small == d_count_store) i_middle++;
                                }
                            }
                            break;
                        case 'Z': // 본문, E 레벨 컨텐츠들 최상단에 있는 설명 본문, D 레벨 컨텐츠 상단 본문
                            if (i2 == 0) 내경편_권02[내경편_권02_목차[i]][middle[i_middle]] = remove_span_tag(response.data[i2].ko);
                            else 내경편_권02[내경편_권02_목차[i]][middle[i_middle]] += remove_span_tag(response.data[i2].ko);
                            if (i2 == response.data.length - 1) {
                                i_middle++;
                                scrape_flag = i2;
                            }
                            break;
                        default:
                            exception += 내경편_권02_목차[i] + ": " + response.data[i2].ko + "\n";
                            break;
                    }
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