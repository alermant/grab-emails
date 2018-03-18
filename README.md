# Grab emails

Extract emails from multiline string

### Installing

```
npm install --save grab-emails
```

### Usage

```javascript
const grabEmails = require("grab-emails");

const emailList = grabEmails(`

first email: first.email@example.com
2nd email: second+email@example.com

`);

console.log(emailList);
```

Output

```
[ 'first.email@example.com', 'second+email@example.com' ]
```

## Running the tests

```
npm run test
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
