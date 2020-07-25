// library
import React from 'react'

export default function() {
  return (
    <div>
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
    </div>
  )
}
