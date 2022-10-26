const mongoose= require('mongoose');

const connectDB= async ()=>{
    try{
        await mongoose.connect('mongodb://try-n-buy-user:trynbuy29@ac-rr3hcf4-shard-00-00.nt6byjq.mongodb.net:27017,ac-rr3hcf4-shard-00-01.nt6byjq.mongodb.net:27017,ac-rr3hcf4-shard-00-02.nt6byjq.mongodb.net:27017/?ssl=true&replicaSet=atlas-12ulqu-shard-0&authSource=admin&retryWrites=true&w=majority',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
        );
        console.log('database connected');
    }catch (err){
        console.log(err);
    }
};

module.exports = connectDB;