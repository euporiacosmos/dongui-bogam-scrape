import * as common from "./common.js";
import axios from "axios";
import fs from "fs";

const file_path = "./ExternalBody.txt";
// 책 내용을 대략적으로 살펴보면서 스크래핑 하기 위해 하드 코딩
var str;

async function external_body() {
    try {
        // 외형편 권01(https://mediclassics.kr/books/8/volume/5) 웹 스크래핑
        common.init(["머리", "얼굴", "눈"], "외형편\n");
        for (var i = 2; i <= 1505; i++) {
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
        // 외형편 권02(https://mediclassics.kr/books/8/volume/6) 웹 스크래핑
        common.init(["귀", "코", "입과 혀", "치아", "인후", "경항", "등"], str);
        for (var i = 2; i <= 1537; i++) {
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
        // 외형편 권03(https://mediclassics.kr/books/8/volume/7) 웹 스크래핑
        common.init(["가슴", "젖가슴", "배", "배꼽", "허리", "옆구리", "피부", "육", "맥", "근", "뼈"], str);
        for (var i = 2; i <= 1924; i++) {
            let response;
            if (i == 169) common.force_set_z_level_is_s();
            /** i=170일때
                scrape_flag: 2
                q_c: 9
                q_d: 1
                q_e: 0
                c_level:                흉격의 뜻
                ,               흉격의 치수
                ,               흉격의 부위
                ,               장부의 경맥은 모두 격막을 관통한다
                ,               맥법
                ,               심통과 위완통의 병인은 다르다
                ,               9가지의 심통
                ,               또 다른 6가지의 심통
                ,               가슴과 배가 함께 아픈 것
                ,               칠정으로 심통이 생기고, 식적ㆍ담음ㆍ어혈로 위완통이 생긴다
                ,               심위통은 허실을 구분해야 한다
                ,               심위통의 치료법
                ,               모든 통증에는 기를 보하는 약을 쓰면 안 된다
                ,               심위통을 바로 멎게 하는 약
                ,               심위통은 토하게 해야 한다
                ,               심위통은 설사시켜야 한다
                ,               음식의 금기
                ,               구흉
                ,               흉비
                ,               한비ㆍ열비
                ,               허비ㆍ실비
                ,               비는 토하거나 설사시켜야 한다
                ,               비증의 치료법
                ,               비기에 약을 덮는 법
                ,               비에 찜질하는 법
                ,               결흉
                ,               결흉에 약을 덮는 법
                ,               결흉에 찜질하는 법
                ,               결흉의 불치증
                ,               단방
                ,               침구법
                ,               눈을 씻는 약
                ,               눈병을 두루 치료하는 약
                ,               단방
                ,               침구법

                d_level:                        칠정심통
                ,                       식적위완통
                ,                       담음위완통
                ,                       어혈위완통
                ,                       궐심통
                ,                       진심통
                ,                       풍심통
                ,                       계심통
                ,                       식심통
                ,                       음심통
                ,                       냉심통
                ,                       열심통
                ,                       거래통
                ,                       제조(굼벵이)
                ,                       사퇴(뱀 껍질)
                ,                       구인(지렁이)
                ,                       백강잠(누에가 죽어 굳은 것)
                ,                       누고(땅강아지)
                ,                       석해(가재)
                ,                       웅작분(참새 수컷의 똥)
                ,                       계자(달걀)
                ,                       호화상비아(박 꽃 위를 날던 나방)
                ,                       이즙(배 즙)
                ,                       나복즙(무 즙)
                ,                       이당(검은 엿)
                ,                       미초(쌀식초)
                ,                       대맥면(보리 가루)
                ,                       지마(검은 참깨)
                ,                       난발회(저절로 떨어진 머리털을 태운 재)
                ,                       양유(양의 젖)
                ,                       비마자(피마자의 열매 씨)
                ,                       자소엽(차조기 잎)
                ,                       강랑(말똥구리)
                ,                       이즙(배즙)
                ,                       대맥즙(보리 즙)
                ,                       만청자(순무 씨)
                ,                       제채자(냉이 씨)
                ,                       수생남자유(첫 사내아이를 낳은 부인의 젖)
                ,                       인뇨(사람 소변)
                ,                       선각(매미 허물)
                ,                       사퇴(뱀 허물)
                ,                       오웅계담즙(검은 수탉의 담즙)
                ,                       웅작시(수컷 참새의 똥)
                ,                       웅담(곰의 쓸개)
                ,                       우간(소 간)
                ,                       청양간(푸른 양의 간)
                ,                       견담(개 쓸개)
                ,                       저간(돼지 간)
                ,                       달담(수달의 쓸개)
                ,                       토간(토끼의 간)
                ,                       발운산
                ,                       국방밀몽화산
                ,                       선화산
                ,                       세간명목탕
                ,                       산열음자
                ,                       시호탕
                ,                       사물용담탕
                ,                       영양각산
                ,                       영양각산
                ,                       지황산
                ,                       이황산
                ,                       정심원
                ,                       속효산
                ,                       노감석산
                ,                       성초산
                ,                       청량산
                ,                       차전산
                ,                       소독음
                ,                       백미원
                ,                       황기산
                ,                       용담산
                ,                       청폐산
                ,                       선화무비산
                ,                       괴자환
                ,                       오퇴산
                ,                       신효명목탕
                ,                       명목세신탕
                ,                       천문동음자
                ,                       서각산
                ,                       지황고
                ,                       생지황산
                ,                       경효산
                ,                       통혈환
                ,                       구맥산
                ,                       구고탕
                ,                       오황고
                ,                       관음몽수환
                ,                       백강잠산
                ,                       귀규탕
                ,                       목적산
                ,                       창출산
                ,                       구풍일자산
                ,                       서각음
                ,                       우황환

                e_level:                                행기향소산
                ,                               청열해울탕
                ,                               청울산
                ,                               치강음
                ,                               각통산
                ,                               초두구환
                ,                               온위탕
                ,                               추도산
                ,                               이강환

                c_count: 0
                c_count_store: 31
                d_count: 0
                d_count_store: 4
                e_count: 0
                e_count_store: 1
                z_level_is_s: true
                s_level_is_smaller: false
             */
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
        // 외형편 권04(https://mediclassics.kr/books/8/volume/8) 웹 스크래핑
        common.init(["팔", "다리", "모발", "전음", "후음"], str);
        for (var i = 2; i <= 1431; i++) {
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
        str = common.get_str();
        console.log("https://mediclassics.kr/books/8/volume/8 scrape complete");
        fs.writeFileSync(file_path, str, 'utf8');
    } catch (error) {
        console.error("데이터를 가져오는 중 오류가 발생했습니다:", error);
    }
}

external_body();