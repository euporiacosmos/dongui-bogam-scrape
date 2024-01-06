const axios = require('axios');
const fs = require('fs');

var file_path = "./dongui-bogam.json";
var 내경편 = {"신형장부도": "", "신형": {}, "부록: 노인 봉양": {}, "정": {}, "기": {}, "신": {}};

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
        var c_count = 0;
        var c_count_store = 0; // C 레벨 컨텐츠 목차의 개수를 저장
        var small = []; // content_level: D Level
        var d_count = 0;
        var d_count_store = 0; // D 레벨 컨텐츠 목차의 개수를 저장
        // 0: 신형장부도, 1: 신형, 2: 부록:노인 봉양, 3: 정, 4: 기, 5: 신
        /** 2중 For문 알고리즘 문제
         * 요청 링크의 GET 인자 정수의 값에 대응하는 책의 순서대로 매핑해놓은 문단 번호에 문단의 내용을 json text로 돌려주는 웹 사이트가 있다.
         * 이 웹 사이트는 [동의보감]이라는 책을 웹 상에 text로 옮겨놓았는데, json API 제공을 위해 문단을 책 목차와는 별개로 json text마다 문단 번호를 매핑해놓았다.
         * 각 json text는 목차의 제목일수도, 본문일수도 있으며, 레벨이라는 키-값 인자가 있는데, C 레벨은 책의 목차 안의 목차, D 레벨은 책의 목차 안의 목차 안의 목차, S 레벨은 D 레벨 안의 [동의보감] 본문, X 레벨은 C 레벨 안에 있는 [동의보감] 본문이자 C 레벨 내부의 D 레벨에 대한 설명이고, Z 레벨은 본문이고 C 레벨 내부에 있는 본문이다.(물론 최상위 목차 안에 직접 있을 수도 있지만, 그러한 경우는 따로 if 문으로 처리한다.)
         * GET 인자는 [동의보감]의 [신형장부도]라는 목차부터 요청하기 위해 0부터가 아닌 132부터 시작하며, 2중 for문으로 웹 사이트에서 scrape할 것이다. for 문의 파라미터는 목차의 제목을 먼저 띄우고 그 다음에 목차 내부의 본문, D 레벨이 있을 경우 목차를 그 다음에 띄운다.
         * 이 웹 사이트에서 책 내용을 [신형장부도]부터 책의 끝까지 가져오는 소스코드를 상단에 주어진 변수를 활용하여 작성하시오.
         */
        for (var i1 = 132; i1 <= 1244; i1++) {
            const response = await axios.get("https://mediclassics.kr/books/8/volume/1/content?up_content_seq=" + i1);
            if (response.data.length != 0) {
                for (var i2 = 0; i2 < response.data.length; i2++) {
                    switch(response.data[i2].content_level) {
                        // 하위 목차인지 본문인지에 따라 다른 처리
                        case 'C': // C 레벨 컨텐츠: 하위 목차
                            내경편[내경편_목차[i]][remove_span_tag(response.data[i2].ko)] = {};
                            middle[c_count] = remove_span_tag(response.data[i2].ko);
                            c_count++;
                            console.log(내경편_목차[i] + "의 하위 목차 생성: " + remove_span_tag(response.data[i2].ko));
                            if (i2 == response.data.length - 1) {
                                c_count_store = c_count;
                            }
                            break;
                        case 'D': // D 레벨 컨텐츠: 하위 목차의 하위 목차
                            내경편[내경편_목차[i]][middle[i_middle]][remove_span_tag(response.data[i2].ko)] = {};
                            small[d_count] = remove_span_tag(response.data[i2].ko);
                            d_count++;
                            console.log(middle[i_middle].replace(/\n/g, "") + "의 하위 목차 생성: " + remove_span_tag(response.data[i2].ko));
                            if (i2 == response.data.length - 1) {
                                d_count_store = d_count;
                            }
                            break;
                        case 'P':
                            console.log("이미지: " + response.data[i2].ko);
                            break;
                        case 'X': // D 레벨 컨텐츠들 최상단에 있는 설명 본문
                            if (i2 == 0) 내경편[내경편_목차[i]][middle[i_middle]]["설명"] = remove_span_tag(response.data[i2].ko);
                            else 내경편[내경편_목차[i]][middle[i_middle]]["설명"] += remove_span_tag(response.data[i2].ko);
                            if (i2 == response.data.length - 1) i_small++;
                            break;
                        case 'S': // D 레벨 컨텐츠 하위 본문
                            if (i2 == 0) 내경편[내경편_목차[i]][middle[i_middle]][small[i_small]] = remove_span_tag(response.data[i2].ko);
                            else 내경편[내경편_목차[i]][middle[i_middle]][small[i_small]] += remove_span_tag(response.data[i2].ko);
                            if (i2 == response.data.length - 1) {
                                i_small++;
                                if (i_small == d_count_store) i_middle++;
                            }
                            break;
                        case 'Z': // 본문
                            if (i1 == 132) {
                                내경편[내경편_목차[i]] += remove_span_tag(response.data[i2].ko);
                            } else {
                                if (i2 == 0) 내경편[내경편_목차[i]][middle[i_middle]] = remove_span_tag(response.data[i2].ko);
                                else 내경편[내경편_목차[i]][middle[i_middle]] += remove_span_tag(response.data[i2].ko);
                                if (i2 == response.data.length - 1) i_middle++;
                            }
                            break;
                    }
                    if (i2 == response.data.length - 1 && i_middle == c_count_store) c_count = 0;
                    if (i2 == response.data.length - 1 && i_small == d_count_store) d_count = 0;
                }
                if (i_small == d_count_store) i_small = 0;
                if (i1 == 132 || i_middle == c_count_store) {
                    i_middle = 0;
                    i++;
                }
            }
        }
        fs.writeFileSync(file_path, JSON.stringify(내경편));
    } catch (error) {
        console.error("데이터를 가져오는 중 오류가 발생했습니다:", error);
    }
}

inside_view();