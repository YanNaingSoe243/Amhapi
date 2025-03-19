
module.exports = (app) => {
const category_com=require("../controller/category.controller")
const annoment=require("../controller/annoment")


  app.get("/categoryreadll",category_com.readall)
  app.post("/categorycreate",category_com.write)
  
  app.get("/annomentreadll",annoment.readall)
  app.post("/annomentcreate",annoment.write)
}
