// cross origin resource sharing

// const cors = require('cors');
// const whitelist = ['http://localhost:3000', 'https://localhost:3443'];
// var corsOptionsDelegate = (req, callback) => {
//     var corsOptions;
//     console.log(req.header('Origin'));
//     if (whitelist.indexOf(req.header('Origin')) !== -1) {
//         corsOptions = { origin: true };
//     } else {
//         corsOptions = { origin: false };
//     }
//     callback(null, corsOptions);
// };
//
// exports.cors = cors();
// exports.corsWithOptions = cors(corsOptionsDelegate);


// in cors preflight call is made befoure actuall api call is made which is also called as an options calls
// in this call the browser will send the request to the server to check if the server is ready to accept the request or not
// if the server is ready to accept the request then the server will send the response with the status code 200
// if the server is not ready to accept the request then the server will send the response with the status code 403


// origin A -> origin B
// preflight call -> we receicales adinall htpp header(options call)
// then after that it makes actual call
// http headers are accept control allow origin which we make an genereal api calls heder sets it as an *. * means all the origins are allowed