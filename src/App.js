import './App.css';

function App() {
  return (
    <div className='main'>
      <div className='position'>
        <h2>システムにログイン</h2>
        <input type='text' placeholder="IDを入力" className='UserID' id = "txtUserID"></input>
        <input type='password' placeholder="パスワードを入力" className='Password' id = "txtPassword"></input>
        <button className='submitbutton'>送信</button><br></br>
        <a href="#" className='link'>アカウントを忘れた場合</a><br></br><br></br>
        <a className='info'>——————————または——————————</a><br></br>
        <button className='createbutton'>新しいアカウント作成</button>
      </div>
    </div>
  );
}
export default App;
