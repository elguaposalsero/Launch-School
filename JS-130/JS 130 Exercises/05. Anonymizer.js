// eslint-disable-next-line max-lines-per-function
let Account = (function() {

  function anonymize() {
    let sequence = [];

    for (let idx = 0; idx < 16; idx++) {
      sequence.push(Math.floor(Math.random() * 10));
    }

    return sequence.join('');
  }

  return {
    init(email, password, firstName, lastName) {
      this.password = password;
      this.myEmail = email;
      this.myFirstName = firstName;
      this.myLastName = lastName;
      this.displayName = anonymize();
      return this;
    },

    firstName(password) {
      if (this.password === password) {
        return this.myFirstName;
      } else {
        return ('Invalid Password');
      }
    },

    lastName(password) {
      if (this.password === password) {
        return this.myLastName;
      } else {
        return 'Invalid Password';
      }
    },

    email(password) {
      if (this.password === password) {
        return this.myEmail;
      } else {
        return 'Invalid Password';
      }
    },

    resetPassword(oldPassword, newPassword) {
      if (oldPassword === this.password) {
        this.password = newPassword;
        return true;
      } else {
        return 'Invalid Password';
      }
    },

    reanonymize(password) {
      if (this.password === password) {
        this.displayName = anonymize();
        return true;
      } else {
        return 'Invalid Password';
      }
      // This should only work if the right password is provided
    },
  };
})();

let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password'
console.log(fooBar.resetPassword('123456', 'abc')) // logs true

let displayName = fooBar.displayName;
fooBar.reanonymize('abc');                         // returns true
console.log(displayName === fooBar.displayName);   // logs false

let bazQux = Object.create(Account).init('baz@qux.com', '123456', 'baz', 'qux');
console.log(bazQux.firstName('123456'));              // logs 'Invalid Password'
console.log(bazQux.email('123456'));                  // logs 'Invalid Password's
