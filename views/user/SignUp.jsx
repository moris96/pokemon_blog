const React = require('react')
const Default = require('../layouts/Default')


class SignUp extends React.Component {
  render () {
    return (
      <Default title="Create Pokemon Blog Account">
        <form action='/user/signup' method='POST'>
          <fieldset>
            <legend>New User</legend>
            <label>USERNAME: <input type='text' name='username' required placeholder='enter username' /> </label>
            <label>PASSWORD: <input type='password' name='password' required placeholder='enter password' />
            </label>
            <input type='submit' value='Create Account' />
          </fieldset>
        </form>
      </Default>
    )
  }
}

module.exports = SignUp