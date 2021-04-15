const userData = require('./usuarios')
const userList = require('./usuarios')
for (i = 0; i < 3; i++){
    userData.cadastraUsuarios()
}
userList.exportaUsuarios()