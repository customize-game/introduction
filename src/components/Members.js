import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import './Members.css';
import CSharp from '../images/CSharp';
import Discord from '../images/Discord';
import GoogleDrive from '../images/GoogleDrive';
import GitHub from '../images/GigHub';
import ReactNative from '../images/ReactNative';
import Rust from '../images/Rust';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center'
  },
}));

export default function() {
  const classes = useStyles();
  return (
    <div>

      <Typography align="center" gutterBottom variant="h3">
      ゲーム作成メンバー募集中！
      </Typography>

      <Typography align="center" gutterBottom variant="body2">
        一緒にゲームを作りたい方、随時募集中です！
        <br />
        参加希望、質問、ご意見等ありましたら、下記メンバーのTwitter等に連絡してください。
      </Typography>

      <Typography align="center" gutterBottom variant="h5">
        タスク、スケジュールはGitHubで管理
      </Typography>
      <div className="image-wrapper">
        <GitHub />
      </div>
      <Typography align="center" gutterBottom variant="body2">
        GitHubのissueとかんばんを使ってタスク管理をします。
        <br />
        参加メンバーはプログラマのみならずGitHubアカウントの作成が必須となります。
        <br />
      </Typography>

      <Typography align="center" gutterBottom variant="h5">
        Discordでミーティング
      </Typography>
      <div className="image-wrapper">
        <Discord />
      </div>
      <Typography align="center" gutterBottom variant="body2">
        毎週日程を決めて <b>Discord</b> で大体30分程度進捗報告会をします。
        <br />
        ミーティングの内容は、主に以下です。
        <br />
        1.前回のミーティングからの進捗
        <br />
        2.次回のミーティングまでの作業割り振り
      </Typography>
      
      <Typography align="center" gutterBottom variant="h4">
        Program
      </Typography>

      <div className="image-wrapper">
        <div className="item-of-images-margin">
          <CSharp />
        </div>
        <div className="item-of-images-margin">
          <Rust />
        </div>
        <div className="item-of-images-margin">
          <ReactNative />
        </div>
      </div>

      <Typography align="center" gutterBottom variant="body2">
        ゲームの開発、サーバの開発、モバイルの開発を行います。
        <br />
        ゲームはC#、サーバはRust、モバイルはReact Nativeを使用します。
      </Typography>

      <Typography align="center" gutterBottom variant="h5">
        ソースはGitHubで管理
      </Typography>
      <div className="image-wrapper">
        <GitHub />
      </div>
      <Typography align="center" gutterBottom variant="body2">
        ソースはGitHubで管理します。
        <br />
        理想は知名度が上がってからprivate化します。
        <br />
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Paper className={classes.paper}>
            <img src="https://avatars3.githubusercontent.com/u/24400215?s=96&v=4" />
            <Typography gutterBottom variant="h5">
              Shass
            </Typography>
            <a class="twitter-timeline" data-height="600" data-theme="dark" href="https://twitter.com/shassbeleth?ref_src=twsrc%5Etfw">Tweets by shassbeleth</a>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Paper className={classes.paper}>
            <img src="https://avatars1.githubusercontent.com/u/43394582?s=96&v=4" />
            <Typography gutterBottom variant="h5">
              1saver
            </Typography>
            <a class="twitter-timeline" data-height="600" data-theme="dark" href="https://twitter.com/music_brain88?ref_src=twsrc%5Etfw">Tweets by music_brain88</a>
          </Paper>
        </Grid>
  
        <Grid item xs={12} sm={6} md={3}>
          <Paper className={classes.paper}>
            <Typography gutterBottom variant="h5">
              メンバー募集中！
            </Typography>
          </Paper>
        </Grid>
  
        <Grid item xs={12} sm={6} md={3}>
          <Paper className={classes.paper}>
            <Typography gutterBottom variant="h5">
              メンバー募集中！
            </Typography>
          </Paper>
        </Grid>
  
      </Grid>

      <Grid container spacing={2}>
  
        <Grid item xs={12} md={6}>
  
          <Typography align="center" gutterBottom variant="h4">
              3D Graphic
          </Typography>
          <Typography align="center" gutterBottom variant="body2">
            ゲーム上でプレイヤーが操作するキャラクター、装備、フィールド等を作成します。
            <br />
            プログラマと連携することもありますが、内部処理についてはプログラマが調査して作成内容を依頼します。
          </Typography>
  
          <Typography align="center" gutterBottom variant="h5">
            Googleドライブで管理
          </Typography>
          <div className="image-wrapper">
            <GoogleDrive />
          </div>
          <Typography align="center" gutterBottom variant="body2">
            3Dモデルの管理はGoogleドライブで行います。
          </Typography>
            <Paper className={classes.paper}>
                <Typography gutterBottom variant="h5">
                メンバー募集中！
                </Typography>
            </Paper>
          </Grid>
  
        <Grid item xs={12} md={6}>
          <Typography align="center" gutterBottom variant="h4">
              2D Graphic
          </Typography>
          <Typography align="center" gutterBottom variant="body2">
            テキストウィンドウ等のUI他、背景等の2Dイラストを作成します。
            <br />
            プログラマと連携することもありますが、内部処理についてはプログラマが調査して作成内容を依頼します。
            <br />
            <br />
            基本的にpngファイル(ゲームに使用)とイラストツールに適用できる保存形式のファイル(後のレイヤー等変更)との提出となります。
            <br />
            ゲーム作成の最中にイラストの変更をご依頼することがあります。
            <br />
            変更が容易なように、イラストツールでレイヤー操作等が行える形式のファイルの提出もお願いします。
            <br />            
          </Typography>
          <Typography align="center" gutterBottom variant="h5">
            Googleドライブで管理
          </Typography>
          <div className="image-wrapper">
            <GoogleDrive />
          </div>
          <Typography align="center" gutterBottom variant="body2">
            2Dイラスト管理はGoogleドライブで行います。
          </Typography>
          <Paper className={classes.paper}>
              <Typography gutterBottom variant="h5">
              メンバー募集中！
              </Typography>
          </Paper>
        </Grid>
  
    </Grid>

    <Typography align="center" gutterBottom variant="h4">
        Sound
    </Typography>
    <Typography align="center" gutterBottom variant="body2">
      ゲーム中のBGMを作成します。
      <br />
      プログラマと連携することもありますが、内部処理についてはプログラマが調査して作成内容を依頼します。
    </Typography>
    <Typography align="center" gutterBottom variant="h5">
      Googleドライブで管理
    </Typography>
    <div className="image-wrapper">
      <GoogleDrive />
    </div>
    <Typography align="center" gutterBottom variant="body2">
      BGM管理はGoogleドライブで行います。
    </Typography>
    <Grid container spacing={3}>
  
        <Grid item xs={12} md={6}>
            <Paper className={classes.paper}>
                <Typography gutterBottom variant="h5">
                    メンバー募集中！
                </Typography>
            </Paper>
        </Grid>
  
        <Grid item xs={12} md={6}>
            <Paper className={classes.paper}>
                <Typography gutterBottom variant="h5">
                    メンバー募集中！
                </Typography>
            </Paper>
        </Grid>
  
    </Grid>
  
    </div>
  );
}
