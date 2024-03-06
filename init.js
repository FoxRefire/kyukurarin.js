window.addEventListener('load', ()=>{
    // Sleep関数を定義 //
    const _sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    // ポップアップブロックを検知 //
    const testPopup=window.open("about:blank","");
    if (!testPopup || testPopup.closed || typeof testPopup.closed == "undefined") {
        console.log("Popup: Blocked");
        document.getElementById('popupNotice').style.display=null
    } else {
        console.log("Popup: OK");
        testPopup.close();
        document.getElementById('initNotice').style.display=null
    }

    // アセットのキャッシュをプリロードして保持 //
    // これにより非ローカル実行時の表示遅延を削減する //
    console.log("WIP")

    // 画面サイズの取得、オーディオのアンロック //
    // ページ内の要素をクリックさせることにより自動再生、フルスクリーン開始のロックを解除する //
    // 一時的にフルスクリーン要求を行い、実際のスクリーンサイズを取得する //
    document.getElementById('btn_init').addEventListener('click', async ()=> {
        document.getElementById('initNotice').style.display="none"
        document.body.requestFullscreen();
        await _sleep(1200)
        let scrWidth=screen.width;
        let scrHeight=screen.height;
        document.exitFullscreen();
        console.log(`Screen size: ${scrWidth} ${scrHeight}`);
        audio.play();
        animRun();
    })
})
