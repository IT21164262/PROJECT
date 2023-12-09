const router = require("express").Router();

let Inventory = require("../model/inventory");

router.route("/add").post((req,res)=>{

    const item = req.body.item;
    const quantity = req.body.quantity;
    const ex_date = Number(req.body.ex_date);
    const mf_date = Number(req.body.mf_date);
    const status = req.body.status;


    const newInventory = new Inventory({
        item,
        quantity,
        ex_date,
        mf_date,
        status


    })

newInventory.save().then(()=>{

    res.json("inventory added")

}).catch((err)=>{
    console.log(err);

})


})

router.route("/").get((req,res)=>{

    Inventory.find().then((inventory)=>{
        res.json(inventory)

    }).catch((err)=>{
        console.log(err)
    })

    
})

router.route("/update/:id").post(async(req,res)=>{
    let userID = req.params.id;
    const {item,quantity,ex_date,mf_date,status}=req.body;

    const updateInventory = {
        item,
        quantity,
        ex_date,
        mf_date,
        status
    }
    const update = await Inventory.findByIdAndUpdate(userID,updateInventory)
    .then(()=>{
        res.status(200).send({status: "user updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with updating data"});
    })    
})

router.route("/delete/:id").delete(async(req,res)=>{
    let userID = req.params.id;

    await Inventory.findByIdAndDelete(userID).then(()=>{
        res.status(200).send({status: "user deleted"});
    }).catch((err)=>{
        res.status(500).send({status: "Error with delete user",console:err.message});
    })

})

router.route("/get/:id").get(async (req,res)=>{
    let userID = req.params.id;
    const user = await Inventory.findById(userID).then((Inventory)=>{
        res.status(200).send({status: "User fetched",Inventory})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with get user",error:err.message});
    })
})


module.exports = router;
