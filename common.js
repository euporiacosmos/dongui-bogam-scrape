let b_level;

var scrape_flag; // 0일 때만 스크래핑
var str;
var q_b = 0;
var q_c = 0;
var q_d = 0;
var q_e = 0;
var c_level = [];
var d_level = [];
var e_level = [];
var c_count = 0;
var c_count_store = 0; // C 레벨 컨텐츠 목차의 개수를 저장
var d_count = 0;
var d_count_store = 0; // D 레벨 컨텐츠 목차의 개수를 저장
var e_count = 0;
var e_count_store = 0; // E 레벨 컨텐츠 목차의 개수를 저장
var z_level_is_s = false;
var s_level_is_smaller = false;
var z_level_is_s_force = false; // 강제 set 여부
var s_level_is_smaller_force = false; // 강제 set 여부

function remove_span_tag(str) {
    return str.replace(/<span[^>]*>/g, "(").replace(/<\/span>/g, ")");
}
export function init(b_level_, str_) {
    b_level = b_level_;
    str = str_;
    scrape_flag = 0;
    q_b = 0;
}
export function add_str_to_str(str_) { // 이 함수는 연결을 확인할 때만 사용하기
    str += str_;
}
export function get_str() {
    return str;
}
export function decrease_scrape_flag() {
    scrape_flag--;
}
export function get_scrape_flag() {
    return scrape_flag;
}
export function force_set_z_level_is_s() { 
    /** 외형편 권03-가슴-칠정으로 심통이 생기고, 식적ㆍ담음ㆍ어혈로 위완통이 생긴다
     *  
    */
    z_level_is_s = true;
    z_level_is_s_force = true;
}
export function force_set_s_level_is_smaller() {
    s_level_is_smaller = true;
    s_level_is_smaller_force = true;
}
export function parse_statement(j, response) {
    if (response.data.length != 0) {
        for (var j = 0; j < response.data.length; j++) {
            switch(response.data[j].content_level) {
                // 하위 목차인지 본문인지에 따라 다른 처리
                case 'C': // C 레벨 컨텐츠: 하위 목차. 신형장부도를 제외한 모든 목차가 C 레벨이 있다
                    c_level[c_count++] = "\t\t" + remove_span_tag(response.data[j].ko).replace(/\n+/g, "") + "\n";
                    if (j == response.data.length - 1) {
                        str += "\t" + b_level[q_b++] + "\n";
                        c_count_store = c_count;
                        c_count = 0;
                    }
                    break;
                case 'D': // D 레벨 컨텐츠: 하위 목차의 하위 목차
                    d_level[d_count++] = "\t\t\t" + remove_span_tag(response.data[j].ko).replace(/\n+/g, "") + "\n";
                    if (j == response.data.length - 1) {
                        d_count_store = d_count;
                        d_count = 0;
                    }
                    if (j>0 && response.data[j-1].content_level == 'Z') {
                        z_level_is_s = true;
                    }
                    break;
                case 'E': // E 레벨 컨텐츠: 하위 목차의 하위 목차의 하위 목차
                    e_level[e_count++] = "\t\t\t\t" + remove_span_tag(response.data[j].ko).replace(/\n+/g, "") + "\n";
                    if (j == response.data.length - 1) {
                        e_count_store = e_count;
                        e_count = 0;
                    }
                    if (j>0 && response.data[j-1].content_level == 'Z') {
                        s_level_is_smaller = true;
                    }
                    break;
                case 'P':
                    if (j == 0) {
                        z_level_is_s ? str += d_level[q_d++] : str += c_level[q_c++];
                    }
                    console.log("이미지: " + response.data[j].ko);
                    break;
                case 'X': // D 레벨 컨텐츠와 E 레벨 컨텐츠들 최상단에 있는 설명 본문
                    if (q_e == 0) { // D 레벨 컨텐츠 설명 본문
                        if (j == 0) {
                            str += c_level[q_c++];
                        }
                        str += "\t\t\t" + remove_span_tag(response.data[j].ko).replace(/\n+/g, "") + "\n";
                    } else { // E 레벨 컨텐츠 설명 본문
                        if (j == 0) {
                            str += d_level[q_d++];
                        }
                        str += "\t\t\t\t" + remove_span_tag(response.data[j].ko).replace(/\n+/g, "") + "\n";
                    }
                    break;
                case 'S': // 더 이상 하위 목차가 없을 때의 본문
                    if (s_level_is_smaller) { // E 레벨 컨텐츠 하위 본문
                        if (s_level_is_smaller_force) {
                            str += d_level[q_d++];
                            s_level_is_smaller_force = false;
                        }
                        if (j == 0) {
                            str += e_level[q_e++];
                        }
                        if (j == response.data.length - 1) {
                            scrape_flag = j;
                        }
                        str += "\t\t\t\t\t" + remove_span_tag(response.data[j].ko).replace(/\n+/g, "") + "\n";
                    } else { // D 레벨 컨텐츠 하위 본문
                        if (j == 0) {
                            str += d_level[q_d++];
                        }
                        if (j == response.data.length - 1) {
                            scrape_flag = j;
                        }
                        str += "\t\t\t\t" + remove_span_tag(response.data[j].ko).replace(/\n+/g, "") + "\n";
                    }
                    break;
                case 'Z': // 추가로 하위 목차가 있을 때의 본문
                    if (z_level_is_s) { // D 레벨 컨텐츠 하위 본문, E 레벨 컨텐츠들 최상단 설명 본문
                        if (z_level_is_s_force) {
                            str += c_level[q_c++];
                            z_level_is_s_force = false;
                        }
                        if (j == 0) {
                            str += d_level[q_d++];
                        }
                        if (j == response.data.length - 1) {
                            scrape_flag = j;
                        }
                        str += "\t\t\t\t" + remove_span_tag(response.data[j].ko).replace(/\n+/g, "") + "\n";
                    } else { // C 레벨 컨텐츠 하위 본문, D 레벨 컨텐츠들 최상단 설명 본문
                        if (j == 0) {
                            str += c_level[q_c++];
                        }
                        if (j == response.data.length - 1) {
                            scrape_flag = j;
                        }
                        str += "\t\t\t" + remove_span_tag(response.data[j].ko).replace(/\n+/g, "") + "\n";
                    }
                    break;
            }
        }
        if (q_c == c_count_store) q_c = 0;
        if (q_d == d_count_store) {
            q_d = 0;
            z_level_is_s = false;
        }
        if (q_e == e_count_store) {
            q_e = 0;
            s_level_is_smaller = false;
        }
    }
    setTimeout(() => {}, 300); // 서버가 계속 터져서 임의로 추가
}