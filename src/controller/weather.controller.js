const dotenv= require('dotenv')
const axios= require('axios')
module.exports.HomePage = async(req,res)=>{
    res.render("home");
}

module.exports.WeatherReport = async (req,res) => {
    try{
        let { city }= req.body;
        let url = process.env.BASEURL + "q=" + city + "&appid=" + process.env.APPID
        let { data } = await axios.get(url);
        console.log('result', data.main.temp);
        let temperature = Math.ceil(data.main.temp-273.15);
        let min = Math.ceil(data.main.temp_min-273.15);
        let max = Math.ceil(data.main.temp_max-273.15);
        
        res.render("weatherreport",{city,temperature,min,max})
    }
    catch(error)
    {
        console.log("error is= ",error.message);
    }
}