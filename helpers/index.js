function getValues(models =[]){
    if(!models || !models.length ){
        return [];
    }
return models.map(rec => rec.toJSON());
}

module.exports=  {
    getValues
} ;
