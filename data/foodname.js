const foodNames = [
  {
    name: 'Fruits',
    item: ['Apple Pie', 'Banana Bread', 'Orange Sorbet', 'Strawberry Smoothie', 'Blueberry Muffins', 'Raspberry Tart', 'Pineapple Upside-Down Cake', 'Mango Salsa', 'Watermelon Salad', 'Grape Jelly', 'Kiwi Jam', 'Pear Crisp', 'Peach Cobbler', 'Cherry Pie', 'Plum Sauce', 'Lemon Bars', 'Lime Cheesecake', 'Avocado Toast', 'Papaya Salad', 'Grapefruit Sorbet'],
  }, {
    name: 'Vegetables',
    item: ['Grilled Zucchini', 'Stuffed Bell Peppers', 'Roasted Carrots', 'Spinach Salad', 'Mashed Potatoes', 'Broccoli Casserole', 'Cauliflower Curry', 'Brussels Sprouts Stir-Fry', 'Steamed Asparagus', 'Tomato Soup', 'Cucumber Sandwich', 'Eggplant Parmesan', 'Sweet Potato Fries', 'Green Bean Almondine', 'Butternut Squash Soup', 'Pea Risotto', 'Radish Salad', 'Cornbread Muffins', 'Artichoke Dip', 'Kale Chips'],
  }, {
    name: 'Grains',
    item: ['Spaghetti Carbonara', 'Quinoa Salad', 'Rice Pilaf', 'Oatmeal Raisin Cookies', 'Barley Soup', 'Wheat Bread', 'Corn Chowder', 'Couscous Salad', 'Farro Risotto', 'Buckwheat Pancakes', 'Millet Porridge', 'Polenta Fries', 'Sorghum Stir-Fry', 'Amaranth Pudding', 'Bulgur Salad', 'Teff Bread', 'Freekeh Pilaf', 'Rye Rolls', 'Kamut Salad', 'Spelt Pasta'],
  }, {
    name: 'Meat',
    item: ['Grilled Steak', 'Roast Chicken', 'Baked Ham', 'Pan-Seared Salmon', 'BBQ Ribs', 'Meatloaf', 'Lamb Stew', 'Pork Chops', 'Beef Stir-Fry', 'Turkey Burgers', 'Sausage Rolls', 'Duck Breast', 'Veal Scallopini', 'Venison Chili', 'Buffalo Wings', 'Corned Beef Hash', 'Goat Curry', 'Rabbit Stew', 'Quail Roast', 'Octopus Salad'],
  }, {
    name: 'Seafood',
    item: ['Shrimp Scampi', 'Grilled Tuna', 'Salmon Fillet', 'Fish Tacos', 'Lobster Bisque', 'Crab Cakes', 'Clam Chowder', 'Mussels Marinara', 'Swordfish Steak', 'Scallop Risotto', 'Oyster Rockefeller', 'Anchovy Pizza', 'Sardine Sandwich', 'Trout Almondine', 'Squid Ink Pasta', 'Haddock Chowder', 'Mahi Mahi Tacos', 'Caviar Blini', 'Surf and Turf', 'Sea Bass En Papillote'],
  }, {
    name: 'Dairy',
    item: ['Cheese Fondue', 'Milkshake', 'Yogurt Parfait', 'Butter Chicken', 'Creamy Alfredo Pasta', 'Cheesecake', 'Ice Cream Sundae', 'Cottage Cheese Pancakes', 'Ricotta Stuffed Shells', 'Brie and Fig Tart', 'Goat Cheese Salad', 'Mozzarella Sticks', 'Feta and Watermelon Salad', 'Parmesan Crusted Chicken', 'Gouda Mac and Cheese', 'Cheddar Broccoli Soup', 'Blue Cheese Burger', 'Swiss Mushroom Quiche', 'Provolone Panini', 'Havarti Grilled Cheese'],
  }, {
    name: 'Legumes and Pulses',
    item: ['Chickpea Curry', 'Lentil Soup', 'Black Bean Tacos', 'Split Pea Stew', 'Kidney Bean Chili', 'White Bean Hummus', 'Pinto Bean Burrito', 'Soybean Stir-Fry', 'Lima Bean Casserole', 'Navy Bean Salad', 'Black-eyed Pea Salad', 'Mung Bean Salad', 'Adzuki Bean Dessert', 'Fava Bean Puree', 'Cannellini Bean Dip', 'Green Lentil Salad', 'Red Lentil Curry', 'Yellow Split Pea Dal', 'Chickpea Fritters', 'Black Bean Brownies'],
  }, {
    name: 'Nuts and Seeds',
    item: ['Almond Butter', 'Peanut Brittle', 'Cashew Chicken', 'Pistachio Pesto Pasta', 'Walnut Crusted Salmon', 'Hazelnut Chocolate Spread', 'Pine Nut Risotto', 'Brazil Nut Cake', 'Macadamia Nut Cookies', 'Pecan Pie', 'Sunflower Seed Salad', 'Pumpkin Seed Granola', 'Flaxseed Crackers', 'Chia Seed Pudding', 'Hemp Seed Smoothie', 'Sesame Seed Crusted Tofu', 'Poppy Seed Dressing', 'Quinoa Salad with Almonds', 'Coconut Cashew Curry', 'Peanut Butter Banana Smoothie'],
  }, {
    name: 'Herbs and Spices',
    item: ['Basil Pesto Pasta', 'Cilantro Lime Chicken', 'Garlic Shrimp', 'Ginger Beef Stir-Fry', 'Cinnamon Roll Pancakes', 'Nutmeg Spiced Latte', 'Parsley Walnut Pesto', 'Rosemary Roast Potatoes', 'Thyme Roasted Chicken', 'Chili Powder Cornbread', 'Oregano Tomato Sauce', 'Tarragon Chicken Salad', 'Sage and Onion Stuffing', 'Turmeric Cauliflower', 'Cardamom Rice Pudding', 'Fennel Seed Biscotti', 'Dill Pickle Soup', 'Coriander Carrot Salad', 'Saffron Risotto', 'Cloves Glazed Ham'],
  }, {
    name: 'Beverages',
    item: ['Coffee Smoothie', 'Tea Infused Cocktails', 'Green Juice', 'Fruit Punch', 'Lemonade', 'Iced Tea', 'Hot Chocolate', 'Mojito Mocktail', 'Margarita', 'Sangria', 'Pina Colada', 'Milkshake', 'Smoothie Bowl', 'Matcha Latte', 'Coconut Water', 'Ginger Beer', 'Wine Spritzer', 'Beer Battered Fish', 'Whiskey Sour', 'Sake Martini']
  }
];
module.exports = {
  foodNames
};