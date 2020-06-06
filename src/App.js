import React from 'react';

export default function() {
  return (
    <div>
      <h1>introduction</h1>
      <h1>ゲームについて</h1>
      <div className="text">
        自分だけのカスタム機を使ってバトル！<br />
        バトルロイヤル、チーム戦
      </div>
      <h2>ロボットを自分専用にカスタマイズ</h2>
      <h3>剣が装備できるのは手だけじゃない</h3>
      足に剣を装備させてキックの攻撃力UP!  <br />
      頭に剣を装備させてタックルの攻撃力UP!  <br />
      どこに装備させるかでステータスが変化。自分の戦い方に合わせたカスタマイズが可能<br />
      <h3>赤いだけの専用機じゃない・・・内部パラメータもカスタマイズ</h3>
      ベースになるロボットにはそれぞれパラメータチップを埋め込める場所が用意されている  <br />
      パラメータチップを組み合わせて見た目は一緒でも性能が全然違うロボットが完成する<br />
      <h3>ベースとなるロボット自体の性能を活かす／補う</h3>
      ベースとなるロボットによっても性能に差がある  
      <h3>類似アプリ</h3>
      <h4>カスタムロボ</h4>
      <h4>ガンダムブレイカー</h4>
      ベースのロボットに装備を組み合わせて対戦  <br />
      →装備が特定の場所にしかつけられない
      <h2>クロスセーブ対応</h2>
      ゲームのセーブデータをスマホと共有させる  <br />
      家ではPCやPS4でゲームをプレイ  <br />
      通学、通勤の最中にスマホで装備の変更等を行える  <br />
      →<b>家に帰って作った装備をさっそく試したい！</b><br />
      <h3>類似アプリ</h3>
      <h4>Switch Online  </h4>
      家に帰ってSplatoon2で遊ぶ→学校や会社ではSwitch Onlineで友達と会話のきっかけに  <br />
      →戦績を見るだけでできる操作は少ない
      <h2>プラットフォーム</h2>
      <h3>メイン</h3>
      * PC(Steamで公開)<br />
      * PS4<br />
      * Switch(できれば)
      <h3>スマホ</h3>
      * Android<br />
      * iOS
      <h1>ゲーム作成メンバー募集中！</h1>
      <h2>チーム体制</h2>
      <h3>プログラマ・・・4人</h3>
      <h4>言語</h4>
      Unity・・・C#<br />
      サーバー・・・Rust  <br />
      スマホアプリ・・・React Native
      <h3>サウンド担当・・・2人</h3>
      <h4>内訳パターン1</h4>
      SEはフリー素材を使用  <br />
      BGM担当・・・2人
      <h4>内訳パターン2</h4>
      SE担当・・・1人  <br />
      BGM担当・・・1人
      <h3>グラフィック担当・・・2人</h3>
      <h4>内訳</h4>
      3Dモデル担当・・・1人  <br />
      UI担当・・・1人
      <h2>ミーティング</h2>
      毎週日程を決めて <b>Discord</b> で進捗報告会  <br />
      大体30分前後  
      <h3>ミーティング内容</h3>
      * 前回のミーティングからの進捗  <br />
      * 次回のミーティングまでのタスク  
      <h2>タスク管理</h2>
      <h3>Github</h3>
      Githubのissueとかんばんを使ってタスク管理  
      <h2>スクリプト管理</h2>
      <h3>Github</h3>
      理想は知名度上がってからprivate化
      <h2>グラフィック&サウンド管理</h2>
      <h3>Googleドライブ</h3>
      <h1>その他ゲームの仕様について詳細</h1>
      <h1>操作</h1>
      <table border="1">
        <tr><th>PS4</th><th>PC</th><th>概要</th><th>備考</th></tr>
        <tr><td>左スティック</td><td>WASD</td><td>移動</td><td></td></tr>
        <tr><td>右スティック</td><td>マウス</td><td>カメラ操作</td><td></td></tr>
        <tr><td>十字上</td><td></td><td>メニュー操作</td><td></td></tr>
        <tr><td>十字下</td><td></td><td>メニュー操作</td><td></td></tr>
        <tr><td>十字左</td><td></td><td>メニュー操作</td><td></td></tr>
        <tr><td>十字右</td><td></td><td>メニュー操作</td><td></td></tr>
        <tr><td>〇</td><td></td><td>決定</td><td></td></tr>
        <tr><td>×</td><td>スペース</td><td>ジャンプ</td><td></td></tr>
        <tr><td>△</td><td>左クリック</td><td>攻撃1</td><td></td></tr>
        <tr><td>□</td><td>右クリック</td><td>攻撃2</td><td></td></tr>
        <tr><td>L1</td><td></td><td>特殊1</td><td>装備によって操作が変わる</td></tr>
        <tr><td>L2</td><td>左Shift</td><td>ダッシュ</td><td></td></tr>
        <tr><td>L3</td><td></td><td></td><td></td></tr>
        <tr><td>R1</td><td></td><td>特殊2</td><td>装備によって操作が変わる</td></tr>
        <tr><td>R2</td><td></td><td>特殊3</td><td>装備によって操作が変わる</td></tr>
        <tr><td>R3</td><td></td><td>カメラ位置リセット</td><td></td></tr>
        <tr><td>Option</td><td></td><td></td><td></td></tr>
      </table>
      <h1>ロボットの素体一覧</h1>
      <table border="1">
        <tr><th>素体名</th><th>性能備考</th></tr>
        <tr><td></td><td></td></tr>
        <tr><td></td><td></td></tr>
        <tr><td></td><td></td></tr>
      </table>
    </div>
  );
}
