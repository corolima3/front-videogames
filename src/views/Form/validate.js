const validate = (object) => {
    let errors = {};
    
    if (!object.name) { errors.name = "El nombre es obligatorio";
    } else if (object.name.length <= 2) {
        errors.name = "El nombre debe tener por lo menos 3 caracteres";
    } else if (!/^([^0-9]*)$/.test(object.name)) {
        errors.name = "El nombre no puede contener números";
    };
    if (!object.image) { errors.image = "La imagen es obligatoria";
    } else if (!/^(ftp|http|https):\/\/[^ "]+$/.test(object.image)) {
        errors.image = "La imagen debe ser una url";
    };
    if(object.description.length < 15) {errors.description = "Descripcion debe tener al menos 15 caracteres"};
    if(!object.rating || isNaN(object.rating)) {errors.rating = "Rating debe de ser un numero"}
    if(object.rating < 0 || object.rating > 6) {errors.rating = "Rating debe ser mayor a, 0 e inferior 6"}
    if(!object.released){errors.released = "Released es obligatoria"}
    if(!object.genre.length ) {errors.genre = "El juego debe tener almenos un genero"}
    if(!object.platforms.length) {errors.platforms = "El juego debe tener almenos una plataforma"}

    return errors;
};
export default validate;