const req = require.context("../pages", true, /^(.*\.(html$))[^.]*$/igm);
console.log("req", req);
// req.keys().forEach(function(key){
//     req(key);
// });

const loadHtml = () => {
    console.log("loadHtml");
}

export default loadHtml;