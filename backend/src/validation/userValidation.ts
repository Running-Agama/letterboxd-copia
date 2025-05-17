class UserValidation {
    async validateUserData(data: any) {
            if (!data.email) {
                throw new Error('Email is required');
            }
            
            if (!data.password) {
                throw new Error('Password is required');
            }

            if (!data.username) {
                throw new Error('Username is required');
            }
    }

    
}

export default new UserValidation();