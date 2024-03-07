let windows=[]
let automovables=[]
// ステップ実行用の関数を定義 //
function o(id, asNum, x, y, autoMoveAction) { //Open:ウィンドウを開く
    windows[asNum]=window.open(`show.html?id=${id}`, "", `left=${x}, top=${y}, width=500, height=720`); //TODO:相対的な表示サイズ、座標を自動的に決定するようにする
    switch(autoMoveAction){
        case 1:
            automovables.push(asNum);
            break;
        case 2:
            moveAutomove();
            break;
        case 3:
            moveAutomove();
            automovables.push(asNum);
            break;
    }
}

function c(asNum0, asNum1) { //Close:ウィンドウを閉じる
    //asNum1が与えられなかったとき、asNum0の内容をコピーする
    if (typeof asNum1 === "undefined") {
        asNum1=asNum0;
    }
    //ウィンドウを閉じる
    for (i=asNum0; i<=asNum1; i++) {
        windows[i].close();
    }
    //自動移動登録を解除
    automovables=[]
}

function m(asNum0, asNum1) { //Move:ウィンドウを左方向に移動
    //asNum1が与えられなかったとき、asNum0の内容をコピーする
    if (typeof asNum1 === "undefined") {
        asNum1=asNum0;
    }
    //ウィンドウを移動
    for (i=asNum0; i<=asNum1; i++) {
        windows[i].moveBy(-70, 0); //TODO:相対的な移動距離を自動的に決定するようにする
    }
}

function t(asNum) { //Top:ウィンドウを最前面にする
    windows[asNum].focus();
}

function r(asNum, id) { //Rerender:既存のウィンドウを再描画する
    windows[i].location.href=`show.html?id=${id}`
}

async function w(time) { //Wait:音源が指定時間になるまで待機
    return await new Promise(resolve => {
        const interval = setInterval(() => {
            if (audio.currentTime>=time) {
                resolve();
                clearInterval(interval);
            };
        }, 15);
    });
}

// 自動移動処理 //
function moveAutomove() {
    automovables.forEach((i) => {
        windows[i].moveBy(-75, 0);
    })
}
