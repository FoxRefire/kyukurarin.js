let windows=[]
// ステップ実行用の関数を定義 //
function o(id,asNum,x,y) { //Open:ウィンドウを開く
    windows[asNum]=window.open(`show.html?id=${id}`, "", `left=${x}, top=${y}, width=500, height=720`); //TODO:相対的な表示サイズ、座標を自動的に決定するようにする
}

function c(asNums) { //Close:ウィンドウを閉じる
    //引数に数値型が与えられた場合、配列に変換する
    if (typeof asNums === "number") {
        asNums=[asNums];
    }
    //ウィンドウを閉じる
    asNums.forEach((asNum)=>{
        windows[asNum].close();
    })
}

function m(asNum) { //Move:ウィンドウを左方向に移動
    windows[asNum].moveBy(-75, 0); //TODO:相対的な移動距離を自動的に決定するようにする
}

function t(asNum) { //Top:ウィンドウを最前面にする
    windows[asNum].focus();
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
