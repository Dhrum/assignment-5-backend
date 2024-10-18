// services/DatabaseService.js
class DatabaseService {
    static async create(Model, data) {
        return await Model.create(data);
    }

    static async find(Model, query) {
        try {
            return await Model.find(query); // Should return an array of matching documents
        } catch (error) {
            console.error(`[FIND ERROR] ${error.message}`);
            throw error;
        }
    }

    static async findOne(Model, query) {
        try {
            console.log(Model, query);
            return await Model.findOne(query);
        } catch (error) {
            console.error(`[FIND ONE ERROR] ${error.message}`);
            throw error;
        }
    }

    static async update(Model, id, data) {
        try {
            return await Model.findByIdAndUpdate(id, data, { new: true });
        } catch (error) {
            console.error(`[UPDATE ERROR] ${error.message}`);
            throw error;
        }
    }

    static async delete(Model, id) {
        try {
            return await Model.findByIdAndDelete(id);
        } catch (error) {
            console.error(`[DELETE ERROR] ${error.message}`);
            throw error;
        }
    }
}

module.exports = DatabaseService;
