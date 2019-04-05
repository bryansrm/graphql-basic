import mongoose from 'mongoose';

export async function connect(){
    try{
        await mongoose.connect('mongodb://localhost/mongodbgraphql', {
            useNewUrlParser: true
        })
        console.log('>>> DB está conectada');
    }
    catch(e){
        console.error('Algo ocurrio mal');
        console.error(e);
    }
    
}
