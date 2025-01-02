const endpoints = {
    local: {
        point: "http://localhost:5000/api"
    },
    production: {
        point: "http://api.fudbit.co:5000/api"
    } 
};
const preferred = 'local'

export default endpoints[preferred]