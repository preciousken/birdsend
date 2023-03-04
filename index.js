const express = require('express')
const app = express()

require('dotenv').config()

app.get('/',(req,res)=>{
    res.send({
        welcome:`You are very welcome dude 😘`
    })
})


// register on birdsend
app.post("/birdsend", async(req,res)=>{





    const axios = require('axios');






  const config = {
    email:'<YOUR-EMAIL>',
    grant_type: 'def502005ef5c667817b47c73c6d4bda36edd898bfd8215014b6999bd15647e6cb163028e4968d5f561c10f64d48c4a35ad3bf42cbc753443a0ddc4d817242c35d50da71997181f2ac2f00a33581fed5eea2453025e9e5b57a9f1670afa201f6cd7e42d907a16f4f0ebbcce9ca09b4ba02923262c906507a0d4dfad643603b3496ea91b6af2afdde4dd9051820f7a1720e90fbfd0bc4ad4ae9fb3d2e07f4164cceda3c856f7701fce13feb9ae5d927150051880f57c64e16d5b202d0cab8a9609f6a74fbd2da7d5b155d1148a5a27c0077656727468a0b4e2d5559d3dec6f0fcfb4f298e2575ce8a96913cbe593681ed4791b3548aa459710ec7bbcd185790c1178a704dd0a502824fcaa1122f387f69ef2df075fb5ef49236a9a830435b7b8f8c7b8afda0b1e351c6f5aa232c3f9688ed248a3f12a6a20c16e31eaf0b23ec45c9037583f668749cfcf68ea6065d6eb9f21cc80f47a3a4c1bee99b5031b37be65c763aeed412c1e493fcce261c',
    client_id: `${process.env.BIRDSEND_CLIENT_ID}`,
    client_secret: `${process.env.BIRDSEND_CLIENT_SECRET}`,
    redirect_uri: `${process.env.BIRDSEND_CALLBACK_URL}`,
    code: `${process.env.BIRDSEND_AUTHORIZATION_CODE}`,
    headers:{
      'Authorization': `Bearer https://app.birdsend.co/oauth/token`,
      'Content-Type': 'application/json',
      'Accept':'application/json'
    }
  };
//   const url = "https://api.birdsend.co/v1/contacts";
  
//   const data ={
//     // name: "Jake Taper",
//     email: "taperjake@gmail.com"
//   }


//   axios.post(url, data, config)
//   .then(res => console.log(res))
//   .catch(err => console.log(err))



    


  const data = {
    // grant_type: 'def50200b6ea7136b2293ed36e9e470f7560c51e371e73df203e56442fe7a8ee2b7808ee6ee7cb252dd370fc7ae0d7ca32414797b1cbab8a393bacea51c9b28223f11800ecba21aee68380fc3b796900288f487baeec15e6b83a60fd7026fbd3a72934ef76e095bcd1fb998c24e3020bf0934e769cc6788c0530794268df1b0b277f3d46f27f3f0a258aef9b5d15f469ae964923fa1162fb1029e90feb2c0f8cfecd653894bf70036a6ea57e0004ea8e540d0bb7fe01ac5146e7038784c44fd134d364f320193b6f45b8eab041e9732618442a7677acd9eadc4ff39513233e6ca5087839dd085d6b23086cba953b86600a62e82cfc657015e973e21b50f1938ef3b7b43cc808890e92a1e4f6795e71c74c23ccf99de59e96f3bc224396d45ffc7132e0c829eabf4c1d0d02a46e1fe7537442d146648510b3c17db460c186167a5d78ebefaa965eaaa3194098f5869e2512302b425586c44f5611123356eadfcd87dd47e8eb2e13e98a26e76fe4',
    client_id: `${process.env.BIRDSEND_CLIENT_ID}`,
    client_secret: `${process.env.BIRDSEND_CLIENT_SECRET}`,
    redirect_uri: `${process.env.BIRDSEND_CALLBACK_URL}`,
    code: `${process.env.BIRDSEND_AUTHORIZATION_CODE}`,
  };
  
  await axios.post('https://api.birdsend.co/v1',config)
    .then(response => {
      res.status(200).json(response.data);
    })
    .catch(error => {
      res.status(500).json(error);
    });
  


})



// 404 age
app.use('*',(req,res)=>{
    res.send({
        Oops:`You lost your way just like that dude 🤣🤦‍♀️`
    })
})

port = process.env.PORT || 5000


app.listen(port,()=>{
    console.log(`App listening on port ${port}`);
})
