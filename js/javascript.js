const testButton = document.querySelector("#test_button");

    let message = null

    function login() {
      let userName = prompt("Enter Username:");

      if (userName == 'FR33FA11') {
        let password = prompt('Enter Password:');
        if (password === 'admin') {
          message = `Welcome home, ${userName}`;
        } else if (password === '' || password === null) {
          message = 'Cancelled';
        } else {
          message = 'Wrong Password';
        }

      } else if (userName === '' || userName === null) {
        message = 'Cancelled';
      } else {
        message = `I don\'t know you, ${userName}. Please signup for an account`;
      }

      const sign_in_message = document.querySelector("#sign_in_message");
      results_div.textContent = message;
    }

    test_button.addEventListener("click", login);