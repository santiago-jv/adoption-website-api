import Pet from "../models/Pet";

const PetController = {};

PetController.createPet = async (request, response,next) => {
    const {name,photo,gender,breed,age,personality} = request.body;
    const {id} = request.headers.user
    
    try {
        const pet = await Pet.create({name, photo, gender, breed, age, personality, owner:id})
        return response.status(201).json(pet);
    } catch (error) {
        error.message = 'There was an error creating the pet';
        error.type = 'CreateObjectError';
        next(error);
    }
}

PetController.getPets = async (request, response) => {
    const {id} = request.headers.user
    
    const data = await Pet.find({owner:id})
    return response.status(200).json(data)

}

PetController.deletePet = async (request, response) => {
    const {id} = request.params

    try {
        await Pet.findOneAndDelete(id);
    } catch (error) {
        error.type = 'DeleteObjectError'
        error.message = "There was an error deleting the pet"
    }
}

export default PetController;