const Product = require('../models/product');

const getAllProductsStatic = async(req,res)=>{
  let products = await Product.find({});
  res.status(200).json({length:products.length,products })
}


const getAllProducts= async(req,res)=>{
  const {featured, company, name, sort, field, numericFilters} = req.query;
  const queryObject = {}
  if (featured){
    queryObject.featured = featured
  }
  if (company){
    // var compNames = ['ikea', 'liddy', "caressa", 'marcos'];
    // queryObject.company = compNames.filter(e=>e===company).pop();
    // console.log("ASDF: ", queryObject.company)
    queryObject.company = company;
  }
  //[Filtering By Name
  if(name){
    queryObject.name = { $regex: name, $options: 'i'};
  }
  //[Filtering the price
  if(numericFilters){
    const operatorMap={
      ">": "$gt",
      ">=": "$gte",
      "=": "$eq",
      "<": "$lt",
      "<=": "$lte",
    }
    const regExp = /\b(<|<=|>|>=|=)\b/g;
    //*now we replace the symbols with the MongoDB operators
    let filters = numericFilters.replace(
      regExp,
      match=>`-${operatorMap[match]}-`
    )
    //* create a list of numeric propertyes that I'll let the user to filter
    const options =['price', 'rating'];
    //price-$gt-40,rating-$lt-2
    filters.split(",").forEach(item=>{
      //for each item.
      let [field, operator, value]= item.split('-');
      if(options.includes(field)){
        //with the destructuring we can set both higher and lower than "value" filters
        queryObject[field] ={ ...queryObject[field], [operator]:value }
      }
    })
  }

  let result =  Product.find(queryObject);

  //[Adding the user's selected sort filters
  if(sort){
    let newStr = sort.split(",").join(' ');
    result = result.sort(newStr);
  }else{
    //adding a default sort functionality
    result = result.sort('createdAt')
  }
  //[Adding the user's selected fields filters
  if(field){
    //setting the specific fields that we want to retrieve from the api
    let fields = field.split(',').join(' ');
    result = result.select(fields);
  }
  //[Adding the page and items per page.
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 25;
  result = result.limit(limit).skip((page-1)*limit);

  const products = await result;

  if(!products.length){
    res.status(404).json({msg:"Product not found"})
  }else{
    res.status(200).json({length:products.length,products})
  }
}

module.exports = {
  getAllProductsStatic,
  getAllProducts,
};
