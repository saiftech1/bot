import Users from '../../../help/treatment';

class InicializeDeleteUser {
  async deleteUserRouter(req: any, res: any) {
    const $_GET = req.params;
    const checkADM = await Users.CheckAdminLogin(req);
    if (checkADM.erro === false) {
      if (!!$_GET.id && $_GET.id.length) {
        const deleteUser = await Users.dbUser.deleteUserId($_GET.id);
        if (typeof deleteUser === 'boolean' && deleteUser === true) {
          res.send({
            erro: false,
            text: 'User successfully deleted',
          });
        } else {
          res.send({
            erro: false,
            text: deleteUser,
          });
        }
      } else {
        res.send({
          erro: false,
          text: 'Object incorrect',
        });
      }
    } else {
      res.send(checkADM);
    }
  }
}

export = new InicializeDeleteUser();
