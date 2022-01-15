test t k ls = maxEl [x + y + z | x <- ls, y <- ls, z <- ls, x + y + z <= t]

maxEl xs = foldr (\x m -> if x > m then x else m) 0 xs