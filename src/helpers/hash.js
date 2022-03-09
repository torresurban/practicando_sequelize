const { scryptSync, randomBytes, timingSafeEqual } = require('crypto');

function hash(password){
    const  salt = randomBytes(16).toString('hex');
    const hashedPassword = scryptSync(password, salt, 64).toString('hex');
    return `${salt}:${hashedPassword}`
}

function verify(password, hashedPassword){
    const [salt, storePassword] = hashedPassword.split(':');

    const hashedBuffer = scryptSync(password, salt, 64);
    const storeBuffer = Buffer.from(storePassword, 'hex');

    return timingSafeEqual(hashedBuffer, storeBuffer);

}

module.exports = {
    hash,
    verify
}