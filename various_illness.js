import * as common from "./common.js";
import axios from "axios";
import fs from "fs";

const file_path = "./VariousIllness.txt";
// 책 내용을 대략적으로 살펴보면서 스크래핑 하기 위해 하드 코딩
var str;
var book_number_;

async function various_illness(i_, book_number) {
    try {
        for (var j = book_number; j <= 19; j++) {
            if (j == 9) {
                // 잡병편 권01(https://mediclassics.kr/books/8/volume/9) 웹 스크래핑
                book_number_ = 9;
                common.init(["천지운기(天地運氣)", "심병(審病)", "변증(辨證)", "진맥(診脉)", "용약(用藥)", "토(吐)", "한(汗)", "하(下)"], "잡병편\n");
                for (var i = i_; i <= 1106; i++) {
                    let response;
                    if (i == 116) common.set_skip_z();
                    if (common.get_scrape_flag() == 0) {
                        response = await axios.get("https://mediclassics.kr/books/8/volume/9/content?up_content_seq=" + i)
                        console.log("https://mediclassics.kr/books/8/volume/9/content?up_content_seq=" + i + " scrape complete\nCurrent Progress: " + i + "/1106");
                        common.parse_statement(i, response);
                    } else {
                        response = JSON.parse('{"data":[]}');
                        common.decrease_scrape_flag();
                    }
                }
                str = common.get_str();
                console.log("https://mediclassics.kr/books/8/volume/9 scrape complete");
                i_ = 2;
            } else if (j == 10) {
                // 잡병편 권02(https://mediclassics.kr/books/8/volume/10) 웹 스크래핑
                book_number_ = 10;
                common.init(["풍(風)", "한(寒)-上"], str);
                for (var i = i_; i <= 1442; i++) {
                    let response;
                    if (common.get_scrape_flag() == 0) {
                        response = await axios.get("https://mediclassics.kr/books/8/volume/10/content?up_content_seq=" + i)
                        console.log("https://mediclassics.kr/books/8/volume/10/content?up_content_seq=" + i + " scrape complete\nCurrent Progress: " + i + "/1442");
                        common.parse_statement(i, response);
                    } else {
                        response = JSON.parse('{"data":[]}');
                        common.decrease_scrape_flag();
                    }
                }
                str = common.get_str();
                console.log("https://mediclassics.kr/books/8/volume/10 scrape complete");
                i_ = 2;
            } else if (j == 11) {
                // 잡병편 권03(https://mediclassics.kr/books/8/volume/11) 웹 스크래핑
                book_number_ = 11;
                common.init(["한(寒)-下", "서(暑)", "습(濕)", "조(燥)", "화(火)"], str);
                for (var i = i_; i <= 1537; i++) {
                    let response;
                    if (common.get_scrape_flag() == 0) {
                        response = await axios.get("https://mediclassics.kr/books/8/volume/11/content?up_content_seq=" + i)
                        console.log("https://mediclassics.kr/books/8/volume/11/content?up_content_seq=" + i + " scrape complete\nCurrent Progress: " + i + "/1537");
                        common.parse_statement(i, response);
                    } else {
                        response = JSON.parse('{"data":[]}');
                        common.decrease_scrape_flag();
                    }
                }
                str = common.get_str();
                console.log("https://mediclassics.kr/books/8/volume/11 scrape complete");
                i_ = 2;
            } else if (j == 12) {
                // 잡병편 권04(https://mediclassics.kr/books/8/volume/12) 웹 스크래핑
                book_number_ = 12;
                common.init(["내상(內傷)", "허로(虛勞)"], str);
                for (var i = i_; i <= 1145; i++) {
                    let response;
                    if (i == 466) common.set_skip_z();
                    if (common.get_scrape_flag() == 0) {
                        response = await axios.get("https://mediclassics.kr/books/8/volume/12/content?up_content_seq=" + i)
                        console.log("https://mediclassics.kr/books/8/volume/12/content?up_content_seq=" + i + " scrape complete\nCurrent Progress: " + i + "/1145");
                        common.parse_statement(i, response);
                    } else {
                        response = JSON.parse('{"data":[]}');
                        common.decrease_scrape_flag();
                    }
                }
                str = common.get_str();
                console.log("https://mediclassics.kr/books/8/volume/12 scrape complete");
                i_ = 2;
            } else if (j == 13) {
                // 잡병편 권05(https://mediclassics.kr/books/8/volume/13) 웹 스크래핑
                book_number_ = 13;
                common.init(["곽란(霍亂)", "구토(嘔吐)", "해수(咳嗽)"], str);
                for (var i = i_; i <= 1271; i++) {
                    let response;
                    if (i == 1226)  {
                        common.force_set_z_level_is_s();
                        common.force_unset_c_level_skip();
                    }
                    if (common.get_scrape_flag() == 0) {
                        response = await axios.get("https://mediclassics.kr/books/8/volume/13/content?up_content_seq=" + i)
                        console.log("https://mediclassics.kr/books/8/volume/13/content?up_content_seq=" + i + " scrape complete\nCurrent Progress: " + i + "/1271");
                        common.parse_statement(i, response);
                    } else {
                        response = JSON.parse('{"data":[]}');
                        common.decrease_scrape_flag();
                    }
                }
                str = common.get_str();
                console.log("https://mediclassics.kr/books/8/volume/13 scrape complete");
                i_ = 2;
            } else if (j == 14) {
                // 잡병편 권06(https://mediclassics.kr/books/8/volume/14) 웹 스크래핑
                book_number_ = 14;
                common.init(["적취(積聚)", "부종(浮腫)", "창만(脹滿)", "소갈(消渴)", "황달(黃疸)"], str);
                for (var i = i_; i <= 1463; i++) {
                    let response;
                    if (common.get_scrape_flag() == 0) {
                        response = await axios.get("https://mediclassics.kr/books/8/volume/14/content?up_content_seq=" + i)
                        console.log("https://mediclassics.kr/books/8/volume/14/content?up_content_seq=" + i + " scrape complete\nCurrent Progress: " + i + "/1463");
                        common.parse_statement(i, response);
                    } else {
                        response = JSON.parse('{"data":[]}');
                        common.decrease_scrape_flag();
                    }
                }
                str = common.get_str();
                console.log("https://mediclassics.kr/books/8/volume/14 scrape complete");
                i_ = 2;
            } else if (j == 15) {
                // 잡병편 권07(https://mediclassics.kr/books/8/volume/15) 웹 스크래핑
                book_number_ = 15;
                common.init(["해학(痎瘧)", "온역(瘟疫)", "사수(邪祟)", "옹저(癰疽) 상"], str);
                for (var i = i_; i <= 1217; i++) {
                    let response;
                    if (common.get_scrape_flag() == 0) {
                        response = await axios.get("https://mediclassics.kr/books/8/volume/15/content?up_content_seq=" + i)
                        console.log("https://mediclassics.kr/books/8/volume/15/content?up_content_seq=" + i + " scrape complete\nCurrent Progress: " + i + "/1217");
                        common.parse_statement(i, response);
                    } else {
                        response = JSON.parse('{"data":[]}');
                        common.decrease_scrape_flag();
                    }
                }
                str = common.get_str();
                console.log("https://mediclassics.kr/books/8/volume/15 scrape complete");
                i_ = 2;
            } else if (j == 16) {
                // 잡병편 권08(https://mediclassics.kr/books/8/volume/16) 웹 스크래핑
                book_number_ = 16;
                common.init(["옹저(癰疽) 하", "제창(諸瘡)"], str);
                for (var i = i_; i <= 1221; i++) {
                    let response;
                    if (i == 683) {
                        common.force_set_s_level_is_smaller();
                        common.force_unset_d_level_skip();
                    }
                    if (common.get_scrape_flag() == 0) {
                        i_ = i;
                        response = await axios.get("https://mediclassics.kr/books/8/volume/16/content?up_content_seq=" + i)
                        console.log("https://mediclassics.kr/books/8/volume/16/content?up_content_seq=" + i + " scrape complete\nCurrent Progress: " + i + "/1221");
                        common.parse_statement(i, response);
                    } else {
                        response = JSON.parse('{"data":[]}');
                        common.decrease_scrape_flag();
                    }
                }
                str = common.get_str();
                console.log("https://mediclassics.kr/books/8/volume/16 scrape complete");
                i_ = 2;
            } else if (j == 17) {   
                // 잡병편 권09(https://mediclassics.kr/books/8/volume/17) 웹 스크래핑
                book_number_ = 17;
                common.init(["제상(諸傷)", "해독(解毒)", "구급(救急)", "괴질(怪疾)", "잡방(雜方)"], str);
                for (var i = i_; i <= 1243; i++) {
                    let response;
                    if (i == 312 || i == 387 || i == 941 || i == 1040) common.force_set_z_level_is_s();
                    if ((i >= 319 && i <= 358) // 제상(諸傷)-여러 가지 짐승에 상한 것
                        || (i >= 375 && i <= 383) // 제상(諸傷)-단방
                        || (i >= 409 && i <= 462) // 제상(諸傷)-여러 가지 벌레에 상한 것
                        || (i >= 944 && i <= 1034) // 잡방(雜方)-곡식을 끊어도 배고프지 않는 약
                        || (i >= 1044 && i <= 1243) // 잡방(雜方)-여러 가지 방법
                    ) {
                        common.force_set_z_level_is_s();
                        common.force_unset_c_level_skip();
                    }
                    if (common.get_scrape_flag() == 0) {
                        i_ = i;
                        response = await axios.get("https://mediclassics.kr/books/8/volume/17/content?up_content_seq=" + i)
                        console.log("https://mediclassics.kr/books/8/volume/17/content?up_content_seq=" + i + " scrape complete\nCurrent Progress: " + i + "/1243");
                        common.parse_statement(i, response);
                    } else {
                        response = JSON.parse('{"data":[]}');
                        common.decrease_scrape_flag();
                    }
                }
                str = common.get_str();
                console.log("https://mediclassics.kr/books/8/volume/17 scrape complete");
                i_ = 2;
            } else if (j == 18) {
                // 잡병편 권10(https://mediclassics.kr/books/8/volume/18) 웹 스크래핑
                book_number_ = 18;
                common.init(["부인(婦人)"], str);
                for (var i = i_; i <= 1183; i++) {
                    let response;
                    i_ = i;
                    if (common.get_scrape_flag() == 0) {
                        response = await axios.get("https://mediclassics.kr/books/8/volume/18/content?up_content_seq=" + i)
                        console.log("https://mediclassics.kr/books/8/volume/18/content?up_content_seq=" + i + " scrape complete\nCurrent Progress: " + i + "/1183");
                        common.parse_statement(i, response);
                    } else {
                        response = JSON.parse('{"data":[]}');
                        common.decrease_scrape_flag();
                    }
                }
                str = common.get_str();
                console.log("https://mediclassics.kr/books/8/volume/18 scrape complete");
                i_ = 2;
            } else if (j == 19) {
                // 잡병편 권11(https://mediclassics.kr/books/8/volume/19) 웹 스크래핑
                book_number_ = 19;
                common.init(["소아(小兒)"], str);
                for (var i = i_; i <= 1836; i++) {
                    let response;
                    i_ = i;
                    if (common.get_scrape_flag() == 0) {
                        response = await axios.get("https://mediclassics.kr/books/8/volume/19/content?up_content_seq=" + i)
                        console.log("https://mediclassics.kr/books/8/volume/19/content?up_content_seq=" + i + " scrape complete\nCurrent Progress: " + i + "/1836");
                        common.parse_statement(i, response);
                    } else {
                        response = JSON.parse('{"data":[]}');
                        common.decrease_scrape_flag();
                    }
                }
                console.log("https://mediclassics.kr/books/8/volume/19 scrape complete");
            }
        }
        fs.writeFileSync(file_path, common.get_str(), 'utf8');
    } catch (error) {
        console.log("서버 터짐. 10초간 스크래핑 중단...")
        const wakeUpTime = Date.now() + 10000;
        while (Date.now() < wakeUpTime) {}
        various_illness(i_, book_number_);
    }
}
various_illness(2, 9);