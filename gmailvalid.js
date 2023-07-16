function emailvalid(mail) {
    console.log('the mail is ',mail);
    return mail.endsWith('@gmail.com') ?'the mail is valid':'the mail is not valid'
}
console.log(emailvalid('soju.ett@gmail.com'));


// const email=(mail)=>mail.endswith=='@gmail.com'?'the mail is valid':'the mail is not valid'
// console.log(email('soju.ett@gmail.com'));