//============================================
//puerto
//============================================

process.env.PORT = process.env.PORT ? process.env.PORT : 3000;

//============================================
//Entorno
//============================================

process.env.NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV : 'dev';

//============================================
//Bases de datos
//============================================
let urlDB;

if(process.env.NODE_ENV === 'dev'){
    urlDB = 'mongodb://localhost:27017/cafe';
}else{
    urlDB = process.env.MONGO_URI;
}

//============================================
//Creacion del enviroment
//============================================
process.env.URLDB = urlDB;

















