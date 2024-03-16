export default function SignInPage() {
  return (
    <div>
      <h1>Sign In</h1>
      <form>
        <label>
          Username
          <input type='text' />
        </label>

        <label>
          Password
          <input type='password' />
        </label>

        <button type='submit'>Sign In</button>
      </form>
    </div>
  )
}
