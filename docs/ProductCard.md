# ProductCard Component

The `ProductCard` component is a reusable UI component designed to display a product's information, including image, title, price, rating, and available variants (size and color). It also allows the user to select variants and add the product to the cart.
It is visible on the product listing on the Products page as well at Home. I improved the already existing code for product card and had to add scss to give a modern touch to the design, with animations.
## Features

1. **Product Image & Navigation**
   - Clicking on the product image navigates the user to the product details page (`/product/:id`).
   - An overlay button appears on hover to add the product to the cart. Button is visible for screens smaller than portrait tablet.

2. **Variant Selection**
   - **Size variants**: Displays available sizes as clickable spans. Selecting a size highlights it.
   - **Diameter variants**: Displays available jelwery diameters as clickable spans. Selecting a size highlights it.
   - **Color variants**: Displays available colors as small circular divs. Selecting a color adds a border to indicate selection.
   - Supports fallback default sizes if size variants are not provided.
   - In a real life project we get the information for the variants from the product itself or the category. Tried to use a workaround to show size for clothes and diameter for jelwery.
3. **Add to Cart**
   - Clicking the "Add to Cart" button adds the product to the cart with the currently selected variant.
   - A toast notification confirms the action.
   - Prevents navigation when adding to cart to avoid accidental redirection.
   - For the first product (id=1) I added the check to show the "Out of stock" case, by disabling the button and change the styles to make the difference more obvious.

4. **Product Info**
   - Shows product title (truncated to 35 characters) and price.
   - Displays product rating with full, half, or empty stars.

## State & Props

- **Props**
  - `product`: Object containing product details (id, title, image, price, rating).
  - `addProduct`: Function to add the product to the cart.
- **State**
  - `selectedVariant`: Tracks the currently selected size or color.

## Example Usage

```jsx
<ProductCard product={product} addProduct={handleAddToCart} />
