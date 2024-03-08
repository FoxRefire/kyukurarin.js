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

        // アセットのキャッシュをプリロードして保持 //
        // これにより非ローカル実行時の表示遅延を削減する //
        imgs = {};
        await Promise.all(["sb_7frames_f1", "sb_7frames_f2", "sb_7frames_f3", "sb_7frames_f4", "sb_7frames_f5", "sb_7frames_f6", "sb_7frames_f7", "sb_a__000", "sb_a__001", "sb_a__002", "sb_a__003", "sb_a__004", "sb_a__005", "sb_a__006", "sb_a__007", "sb_a__008", "sb_a__009", "sb_a__00a", "sb_bed_b1", "sb_bed_b2", "sb_bed_b3", "sb_bed_b4", "sb_bed_b5", "sb_clock_c1", "sb_clock_c2", "sb_clock_c3", "sb_clock_c4", "sb_cry stack_c1", "sb_cry stack_c2", "sb_cry stack_c3", "sb_cry stack_c4", "sb_cry stack_c5", "sb_cry stack_c6", "sb_cry stack_c7", "sb_d__000", "sb_d__001", "sb_d__002", "sb_d__003", "sb_d__004", "sb_d__005", "sb_d__006", "sb_d__007", "sb_f__000", "sb_f__001", "sb_f__002", "sb_f__003", "sb_f__004", "sb_f__005", "sb_f__006", "sb_f__007", "sb_f__008", "sb_f__009", "sb_f__00a", "sb_f__00b", "sb_f__00c", "sb_f__00d", "sb_f__00e", "sb_f__00f", "sb_f__010", "sb_f__011", "sb_f__012", "sb_f__013", "sb_f__014", "sb_f__015", "sb_f__016", "sb_f__017", "sb_f__018", "sb_f__019", "sb_f__01a", "sb_f__01b", "sb_f__01c", "sb_f__01d", "sb_f__01e", "sb_f__01f", "sb_f__020", "sb_f__021", "sb_f__022", "sb_f__023", "sb_f__024", "sb_f__025", "sb_f__026", "sb_f__027", "sb_f__028", "sb_f__029", "sb_f__02a", "sb_f__02b", "sb_f__02c", "sb_f__02d", "sb_f__02e", "sb_f__02f", "sb_f__030", "sb_f__031", "sb_f__032", "sb_f__033", "sb_f__034", "sb_f__035", "sb_f__036", "sb_f__037", "sb_f__038", "sb_f__039", "sb_f__03a", "sb_f__03b", "sb_f__03c", "sb_f__03d", "sb_f__03e", "sb_f__03f", "sb_f__040", "sb_f__041", "sb_f__042", "sb_f__043", "sb_f__044", "sb_f__045", "sb_f__046", "sb_f__047", "sb_f__048", "sb_f__049", "sb_f__04a", "sb_f__04b", "sb_f__04c", "sb_f__04d", "sb_f__04e", "sb_f__04f", "sb_f__050", "sb_f__051", "sb_f__052", "sb_stack_s1", "sb_stack_s2", "sb_stack_s3", "sb_stack_s4", "sb_stack_s5", "sb_stack_s6", "sb_stack_s7", "sb_stack_s8", "sb_stack_s9", "sb_stare_s1", "sb_stare_s2", "sb_stare_s3", "sb_stare_s4", "sb_stare_s5", "sb_stare_s6", "sb_stare_s7"].map(async (i) => {
            imgs[i] = new Image()
            imgs[i].src = "res/"+i+".png";
            await imgs[i].decode();
            return imgs[i];
        }));

        //アニメーションを再生
        audio.play();
        animRun();
    })
})
