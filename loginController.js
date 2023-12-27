const loginModels=require('../model/loginModel')

const usercontroller = {
    addNewUser: async (req, res, next) => {
      try {
          const user = await userModels.create(req.body);
          res.json(user);
      } catch (err) {
        console.log(err)
        return res.status(500).send(err.message);
      }
    },
    getuser:async (req, res, next) => {
        try {
            const user = await userModels.find();
            res.json(user);
        } catch (err) {
          console.log(err)
          return res.status(500).send(err.message);
        }
    }
};

module.exports = usercontroller;