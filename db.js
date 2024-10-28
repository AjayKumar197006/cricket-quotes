const mysql=require("mysql2")
require("dotenv").config()

const con=mysql.createPool(
    {
        host:process.env.host,
        port:process.env.port,
        user:process.env.user,
        password:process.env.password,
        database:process.env.database,

    }
)

function getQuote()
{
    return new Promise(function(success,reject)
{
    con.query(`SELECT * FROM Cricket_Quotes ORDER BY RAND() LIMIT 1`,function(err,res)
{
    if(err)
    {
        reject(err)
    }
    else
    {
        success(res)
    }
})
})

}
function addQuote(nu,qo,na)
{
    return new Promise(function(success,reject)
{
    con.query(`INSERT INTO Cricket_Quotes(number,quote,name) VALUES(?,?,?)` ,[nu,qo,na], function(err,res)
{
    if(err)
    {
        reject(err)
    }
    else
    {
        success(res)
    }
})
})
    
}
function updateQuote(nu,qo,na,nui)
{
    return new Promise(function(success,reject)
{
    con.query(`UPDATE Cricket_Quotes SET number=?,quote=?,name=? WHERE NUMBER=?`,[nu,qo,na,nui],function(err,res)
{
    if(err)
    {
        reject(err)
    }
    else
    {
        success(res)
    }
})
})
}
function deleteQuote(nui)
{
    return new Promise(function(success,reject)
{
    con.query(`DELETE FROM Cricket_Quotes WHERE NUMBER=?`,[nui],function(err,res)
{
    if(err)
    {
        reject(err)
    }
    else
    {
        success(res)
    }
})
})

    
}

module.exports={getQuote,addQuote,updateQuote,deleteQuote}