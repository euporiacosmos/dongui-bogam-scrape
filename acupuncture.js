import * as common from "./common.js";
import axios from "axios";
import fs from "fs";

const file_path = "./acupuncture.txt";
async function acupuncture(i_) {
    try {
        // 침구편 권01(https://mediclassics.kr/books/8/volume/23) 웹 스크래핑
        common.init(["침구(鍼灸)"], "침구편\n");
        for (var i = i_; i <= 1755; i++) {
            if (i < 1432 || i > 1462) { // [오장육부와 오수혈] 제외
                let response;
                if (i == 205 || i == 240 || i == 310 || i == 467 || i == 536 || i == 564 || i == 632 || i == 809 || i == 904 || i == 944 || i == 1016 || i == 1144) common.set_print_c_level();
                if (i == 1464) common.set_skip_z();
                if (common.get_scrape_flag() == 0) {
                    response = await axios.get("https://mediclassics.kr/books/8/volume/23/content?up_content_seq=" + i)
                    console.log("https://mediclassics.kr/books/8/volume/23/content?up_content_seq=" + i + " scrape complete\nCurrent Progress: " + i + "/1755");
                    common.parse_statement(i, response);
                } else {
                    response = JSON.parse('{"data":[]}');
                    common.decrease_scrape_flag();
                }
            }
        }
        fs.writeFileSync(file_path, common.get_str(), 'utf8');
    } catch (error) {
        acupuncture(i_);
    }
}
acupuncture(2);