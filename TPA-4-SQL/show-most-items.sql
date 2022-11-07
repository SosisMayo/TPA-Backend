SELECT product_type, COUNT(*) as total FROM products 
GROUP BY product_type 
ORDER BY total DESC LIMIT 1;