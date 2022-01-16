import {User} from '../db/models';

//id???? req.params.userId

export async function createUser(req, res, next){
    try{
        const newUser = await User.create(req.body);
        if(newUser){
            return res.status(201).send(newUser);
        }
        return next(new Error());

    }catch(e){
        //console.log('Create error');
        next(e);
    }
}

export async function getUserById(req, res){
    //findByPk
    try{
        const userToFind = await User.findByPk(req.params.userId, {
            attributes: {
              exclude: ['password'],
            },
        });

        if (userToFind) {
            return res.status(201).send(userToFind);
        }
        return next(new Error());
    }catch(e){
        //console.log('Get error');
        next(e);
    }
}

export async function deleteUserById(req, res){
    //destroy
    try{
        const userToDelete = await User.destroy({
            where: {
                id: req.params.userId,
            }
        });
        if (userToDelete) {
            return res.status(201).send(userToDelete);
        }
        return next(new Error());
    } catch(e){
        //console.log('Delete error');
        next(e);
    }
}

export async function updateUserById(req, res){
    try {
        const [updRowsCount, updRows] = await User.update(req.body, {
          where: {
            id: req.params.userId,
          },
          returning: true,
        });
        if (updRowsCount) {
          const data = updRows.get();
          delete data.password;
          return res.status(201).send(data);
        }
        return next(new Error());
      } catch (e) {
        //console.log('Update error');
        next(e);
      }
}