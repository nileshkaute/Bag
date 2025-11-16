import Cart from "../models/Cart.js";

export const addToCart = async (req, res) => {
  try {
    const userId = req.user.id;
    const { productId } = req.body;

    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = new Cart({ userId, items: [{ productId }] });
    } else {
      const item = cart.items.find(i => i.productId == productId);

      if (item) item.quantity += 1;
      else cart.items.push({ productId });
    }

    await cart.save();

    res.redirect("/cart");
  } catch (error) {
    res.send("Cart Error: " + error.message);
  }
};

export const getCart = async (req, res) => {
  try {
    const userId = req.user.id;

    const cart = await Cart.findOne({ userId }).populate("items.productId");

    res.render("pages/cart", { cart });
  } catch (error) {
    res.send("Error loading cart: " + error.message);
  }
};
