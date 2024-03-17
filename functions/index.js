const express = require('express');
const serverless = require('serverless-http');
const faker = require('faker');
const app = express();
const router = express.Router();

const PORT = process.env.PORT || 80;
const { foodNames } = require('../data/foodname');
const { ingredients } = require('../data/inggredients');

const generateIngredient = () => {
  const count = faker.datatype.number({ min: 2, max: 20 });
  let result = [];
  for (let i = 0; i < count; i++) {
    const ing = generateCategory(ingredients, 1);
    const data = {
      name: ing[0].name,
      amount: faker.datatype.number({ min: 1, max: 50 }),
      amountType: ing[0].amountType,
    }
    result.push(data)
  }
  return result;
}
const generateInstructions = () => {
  const count = faker.datatype.number({ min: 2, max: 20 });
  let result = [];

  for (let i = 0; i < count; i++) {
    const data = {
      step: i + 1,
      name: faker.animal.dog(),
      description: faker.lorem.sentence(10, 5),
    }
    result.push(data)
  }
  return result;
}
const generateNutritionInformations = () => {
  const count = faker.datatype.number({ min: 2, max: 20 });
  let result = [];

  for (let i = 0; i < count; i++) {
    const data = {
      name: faker.animal.cat(),
      description: faker.lorem.sentence(10, 5),
    }
    result.push(data)
  }
  return result;
}
const generateCategory = (options, count) => {
  const results = [];
  for (let i = 0; i < count; i++) {
    const option = faker.random.arrayElement(options);
    if (!results.includes(option)) {
      results.push(option);
    }
  }
  return results;
}
const getFoodName = (category) => {
  const options = foodNames.find(e => { if (e.name == category) { return e } })
  return generateCategory(options.item, 1)[0]
}

const generateResponse = (count) => {
  let result = [];
  const options = ['Fruits', 'Vegetables', 'Grains', 'Meat', 'Seafood', 'Dairy', 'Legumes and Pulses', 'Nuts and Seeds', 'Herbs and Spices', 'Beverages'];
  const category = generateCategory(options, faker.datatype.number({ min: 1, max: options.length }));

  for (let i = 0; i < count; i++) {
    const fake = {
      id: faker.datatype.uuid(),
      title: getFoodName(category[0]),
      description: faker.lorem.sentence(10, 5),
      ingredients: generateIngredient(),
      instructions: generateInstructions(),
      preparationTime: faker.datatype.number({ min: 5, max: 50 }),
      cookingTime: faker.datatype.number({ min: 10, max: 180 }),
      servings: faker.datatype.number({ min: 1, max: 10 }),
      nutritionalInformation: generateNutritionInformations(),
      tags: category,
      thumbnail: faker.image.lorempicsum.image(100, 100, false, 0),
      image: faker.image.lorempicsum.image(500, 500, false, 0),
    };
    result.push(fake);
  }
  return result;
}
const reductedResponse = (data, options) => {
  const result = [];
  for (let j = 0; j < data.length; j++) {
    const item = {};
    for (let i = 0; i < options.length; i++) {
      if (data[j].hasOwnProperty(options[i])) {
        item[options[i]] = data[j][options[i]];
      }
    }
    result.push(item)
  }


  return result
}
app.use(express.json());

router.get('/', (req, res)=> {
  res.json({hello: 'wordl!'});
});

router.get('/costum', (req, res) => {
  const count = req.query.count || 1;
  const keyString = req.query.keys || 'id,title,description,ingredients,instructions,preparationTime,cookingTime,servings,nutritionalInformation,tags,thumbnail,image';
  const keys = keyString.split(',');
  const result = generateResponse(count);
  const reducted = reductedResponse(result, keys);
  res.json(reducted);
});

router.get('/list', (req, res) => {
  const count = req.query.count || 10;
  const keyString = 'id,title,description,tags';
  const keys = keyString.split(',');
  const result = generateResponse(count);
  const reducted = reductedResponse(result, keys);
  res.json(reducted);
});

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
// app.use('/', router);

app.use('/.netlify/functions/index', router);
module.exports.handler = serverless(app);