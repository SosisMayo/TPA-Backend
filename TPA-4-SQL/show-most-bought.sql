SELECT COUNT(*) as total, product_order.product_id, products.name FROM product_order
JOIN products ON product_order.product_id = products.id
GROUP BY product_order.product_id
ORDER BY total DESC LIMIT 3;