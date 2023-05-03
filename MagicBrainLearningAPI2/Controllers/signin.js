export const handelSignin = (req, res, postgres, bcrypt) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json('Incorrect form submission')
    }
    postgres.select('email', 'hash').from('login')
        .where('email', '=', email)
        .then(data => {
            const isValid = bcrypt.compareSync(password, data[0].hash);
            if (isValid) {
                return postgres.select('*').from('users')
                    .where('email', '=', email) 
                    .then(user => {
                        res.json(user[0])
                    })
                    .catch(error => res.status(400).json('Cannot login'))                    
            } else {
                res.status(400).json('Cannot login')
            }
    })
    .catch(error => console.log(error))
};