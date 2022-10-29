const React = require('react')
const Default = require('../layouts/Default')


class Login extends React.Component {
  render () {
    return (
      <Default title="Login to Pokemon Blog Account">
        <form action='/user/login' method='POST'>
          <fieldset>
            <legend>New User</legend>
            <label>USERNAME: <input type='text' name='username' required placeholder='enter username' /> </label>
            <label>PASSWORD: <input type='password' name='password' required placeholder='enter password' />
            </label>
            <input type='submit' value='Login Account' />
          </fieldset>
        </form>
      </Default>
    )
  }
}

module.exports = Login