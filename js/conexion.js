let mysql = require("mysql");


let conexion = mysql.createConnection({
    host: "localhost",
    database: "bd_smells",
    user: "root",
    password: ""
});

conexion.connect(function(error){
    if (error){
        throw error;

    }else {
        console.log("conexion exitosa");
    }
});

const nuevorgistro = "INSERT INTO menu (id_Menu, Nombre, Precio, id_Categoria) VALUES (NULL, 'pizza19', '1000', '2')";
conexion.query(nuevorgistro,function(error,rows){
    if(error){
        throw error;
    }else{
        console.log("datos insertados correctamente");
    }
});

/*const modificar = "UPDATE menu SET Nombre='HAMBURGUEZA70' WHERE id_Menu = 5"
conexion.query(modificar,function(error,lista){
    if(error){
        throw error;

    }else{
        console.log("Datos modificados");
        
    }  
});*/

/*const borrar = "DELETE FROM menu WHERE id_Menu = 13"
conexion.query(borrar,function(error,lista){
    if(error){
        throw error;

    }else{
        console.log("Dato Eliminado");
        
    }  
});*/

const menu = "SELECT * FROM menu";
conexion.query(menu,function(error,lista){
    if(error){
        throw error;

    }else{
        console.log(lista);
        conexion.end();
    }  
})