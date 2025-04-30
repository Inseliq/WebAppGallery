import '../css/style/auth.css';

export default function Auth() {
  return (
    <section className="auth" id='auth'>
      <h1>Вход</h1>
      <form id="login-form">
      <input type="email" name="email" placeholder="Эл. Почта" data-in="email" required />
      <input type="password" name="password" placeholder="Пароль" data-in="password" required />
      <button type="submit" data-get="form-submit-btn" className='btn-submit'></button>
      </form>
    </section>
  );
}