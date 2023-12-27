const userModels=require('../model/userModel')

const usercontroller = {
    addNewUser: async (req, res, next) => {
      try {
        // let body = req.body;
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
    },
    patchUser: async (req, res, next) => {
      try {
          const user = await userModels.findByIdAndUpdate({ _id: req.params.userId}, req.body)
          res.json(user);
      } catch (err) {
        console.log(err)
        return res.status(500).send(err.message);
      }
    },
    deletUser: async (req, res, next) => {
      try {
          const user = await userModels.deleteOne({ _id: req.params.userId})
          res.json(user);
      } catch (err) { 
        console.log(err)
        return res.status(500).send(err.message);
      }
    },
};

module.exports = usercontroller;