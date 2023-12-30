const axios = require('axios');
const fs = require('fs');

var file_path = "./dongui-bogam.json"
var 내경편 = {};

async function inside_view() {
    try {
        const response01_1 = await axios.get("https://mediclassics.kr/books/8/volume/1/content?up_content_seq=132");
        내경편["신형장부도"] = response01_1.data[1].ko + response01_1.data[2].ko;
        내경편["신형"] = {}
        const response01_2 = await axios.get("https://mediclassics.kr/books/8/volume/1/content?up_content_seq=137");
        내경편["신형"]["형기의 시작"] = response01_2.data[0].ko + response01_2.data[1].ko;
        const response01_3 = await axios.get("https://mediclassics.kr/books/8/volume/1/content?up_content_seq=140");
        내경편["신형"]["잉태의 시작"] = response01_3.data[0].ko + response01_3.data[1].ko;
        const response01_4 = await axios.get("https://mediclassics.kr/books/8/volume/1/content?up_content_seq=143");
        내경편["신형"]["사대가 형을 이룬다"] = response01_4.data[0].ko + response01_4.data[1].ko;
        const response01_5 = await axios.get("https://mediclassics.kr/books/8/volume/1/content?up_content_seq=146");
        내경편["신형"]["기의 성쇠"] = response01_5.data[0].ko + response01_5.data[1].ko;
        const response01_6 = await axios.get("https://mediclassics.kr/books/8/volume/1/content?up_content_seq=149");
        내경편["신형"]["늙으면 자식을 가질 수 없는 이유"] = response01_6.data[0].ko;
        const response01_7 = await axios.get("https://mediclassics.kr/books/8/volume/1/content?up_content_seq=151");
        내경편["신형"]["수명의 차이"] = response01_7.data[0].ko + response01_7.data[1].ko;
        const response01_8 = await axios.get("https://mediclassics.kr/books/8/volume/1/content?up_content_seq=154");
        내경편["신형"]["형과 기가 수명을 정한다"] = response01_8.data[0].ko + response01_8.data[1].ko + response01_8.data[2].ko;
        const response01_9 = await axios.get("https://mediclassics.kr/books/8/volume/1/content?up_content_seq=158");
        내경편["신형"]["한 사람의 몸은 한 국가와 같다"] = response01_9.data[0].ko + response01_9.data[1].ko;
        const response01_10 = await axios.get("https://mediclassics.kr/books/8/volume/1/content?up_content_seq=161");
        내경편["신형"]["3가지 단전"] = response01_10.data[0].ko + response01_10.data[1].ko + response01_10.data[2].ko;
        const response01_11 = await axios.get("https://mediclassics.kr/books/8/volume/1/content?up_content_seq=165");
        내경편["신형"]["몸 뒷면의 삼관"] = response01_11.data[0].ko + response01_11.data[1].ko + response01_11.data[2].ko;
        const response01_12 = await axios.get("https://mediclassics.kr/books/8/volume/1/content?up_content_seq=169");
        내경편["신형"]["정기신의 보양"] = response01_12.data[0].ko;
        const response01_13 = await axios.get("https://mediclassics.kr/books/8/volume/1/content?up_content_seq=171");
        내경편["신형"]["옛날에는 진인ㆍ지인ㆍ성인ㆍ현인이 있었다"] = response01_13.data[0].ko;
        const response01_14 = await axios.get("https://mediclassics.kr/books/8/volume/1/content?up_content_seq=173");
        내경편["신형"]["상고천진을 논한다"] = response01_14.data[0].ko;
        const response01_15 = await axios.get("https://mediclassics.kr/books/8/volume/1/content?up_content_seq=175");
        내경편["신형"]["사기조신"] = response01_15.data[0].ko;
        const response01_16 = await axios.get("https://mediclassics.kr/books/8/volume/1/content?up_content_seq=177");
        내경편["신형"]["도로써 병을 치료한다"] = response01_16.data[0].ko + response01_16.data[1].ko;
        const response01_17 = await axios.get("https://mediclassics.kr/books/8/volume/1/content?up_content_seq=180");
        내경편["신형"]["마음을 비워 도와 하나가 된다"] = response01_17.data[0].ko;
        const response01_18 = await axios.get("https://mediclassics.kr/books/8/volume/1/content?up_content_seq=182");
        내경편["신형"]["도를 배우는 데는 때가 없다"] = response01_18.data[0].ko + response01_18.data[1].ko;
        const response01_19 = await axios.get("https://mediclassics.kr/books/8/volume/1/content?up_content_seq=185");
        내경편["신형"]["사람의 마음이 천기와 하나가 되는 것"] = response01_19.data[0].ko + response01_19.data[1].ko + response01_19.data[2].ko + response01_19.data[3].ko + response01_19.data[4].ko;
        const response01_20 = await axios.get("https://mediclassics.kr/books/8/volume/1/content?up_content_seq=191");
        내경편["신형"]["반운ㆍ복식"] = response01_20.data[0].ko + response01_20.data[1].ko + response01_20.data[2].ko + response01_20.data[3].ko;
        내경편["신형"]["안마도인"] = "구선이 노래하기를, \"눈을 감은 채 마음을 고요히 하여 앉고서가부좌를 틀고 앉는다 악고(握固)하여 가만히 신(神)을 가다듬는다. 악고는 엄지손가락을 안으로, 네 손가락을 밖으로 하여 주먹을 쥐는 것이다 치아를 36번 맞부딪치고 이렇게 하여 심신(心神)을 모은다 두 손으로 곤륜(崑崙)을 감싼다. 곤륜은 머리이다. 목 뒤로 손을 깍지끼고 9번 숨을 쉬는데, 숨소리가 귀에 들리지 않게 한다 좌우에서 천고(天鼓)를 울려 24번 들리게 한다. 두 손바닥으로 두 귀를 가리고 먼저 둘째손가락으로 중지를 눌러서 머리 뒤를 튕긴다 천주(天柱)를 조금씩 흔들고고개를 24번 좌우로 돌려 어깨가 따라 움직이게 한다 적룡(赤龍)으로 침을 휘저어 뒤섞는다. 적룡은 혀다. 혀로 입안을 휘저어 침이 나오게 한 뒤 그것을 삼킨다 침으로 36번 양치하니 신수(神水)가 입안에 가득하다. 신수는 입안의 침이다 입 속의 침을 세 번 나누어 삼키면양치한 침을 세 모금으로 나누어 꼴깍 소리를 내며 삼킨다 용이 움직여 호랑이가 스스로 달려가는 격이 된다. 용은 침이고 호랑이는 숨이다 숨을 참고 손으로 문질러 열을 내고코로 맑은 기를 들이키고 잠시 숨을 참는다. 손으로 코를 문질러 매우 뜨겁게 한 뒤 천천히 콧속의 숨을 내보낸다 몸 뒷쪽의 정문(精門)을 문지른다. 정문은 허리 뒤의 외신(外腎)이다. 손바닥을 모아 문지른 뒤에는 손을 거두어 악고한다 한 모금의 기를 다한 후에다시 숨을 참는 것이다 불이 배꼽에서 타오른다고 상상한다. 심화(心火)가 아래로 내려와 단전을 태운다고 상상하고 아주 뜨거워지면 뒤의 방법을 쓴다 좌우로 녹로(轆轤)를 돌리고머리를 숙이고 양어깨를 36번 흔든다. 불이 단전으로부터 쌍관(雙關)을 뚫고 뇌호(腦戶)에 들어간다고 상상하며 코로 맑은 기를 들이쉬고는 잠시 숨을 참는다 두 다리를 쭉 편다. 두 다리를 곧게 편다 손을 깍지낀 채 허공에 뻗고손을 깍지끼고 3번 혹은 9번 위로 펴준다 고개를 숙이고 발을 자주 잡아당긴다. 두 손을 앞으로 향하게 하여 두 발바닥을 13번 당기고 나서 발을 거두고 단정히 앉는다 이렇게 하여 물이 거슬러 올라오기를 기다리니입안에서 침이 나오기를 기다린다. 나오지 않으면 앞의 방법과 같이 하여 혀를 재빨리 휘저어 침이 나오게 한다 다시 침으로 양치하고 또다시 삼킨다. 이 같이 3차례 반복하면 신수(神水)를 9번 삼킨 것이 된다. 한 모금을 3번에 나누어 삼키고 이것을 3번 반복하니 9번이 된다 꼴깍 삼키는 소리에 백맥(百脉)이 절로 고르게 되고 하거(河車)가 운반을 마치니어깨와 몸을 흔드는 것 24회와 다시 녹로를 돌리는 것 24회이다 불이 피어올라 몸을 두루 태운다. 단전의 불이 아래에서 올라와 두루 태운다고 상상한다. 이 때 입과 코를 막고 숨을 잠시 멈춘다 사마(邪魔)가 감히 다가오지 못하고 잠을 잘 때도 정신을 잃지 않는다. 추위와 더위도 들어올 수 없고 병과 재앙도 머물 수 없다. 자시(子時) 후 오시(午時) 전에 수행하니 건곤이 하나로 된다. 순환하여 차례대로 돌아가니 팔괘가 꼬리를 물고 돌아간다\"고 하였다.";
        
        fs.writeFileSync(file_path, JSON.stringify(내경편));
        console.log(내경편);
    } catch (error) {
        console.error("데이터를 가져오는 중 오류가 발생했습니다:", error);
    }
}

inside_view();