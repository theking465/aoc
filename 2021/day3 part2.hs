import Data.Char (digitToInt)

part2 :: IO ()
part2 =
    do
        input <- readFile "input/day3.txt"
        let list_input = lines input
        let oxygen = loopUntillOne True 0 list_input
        let co2 = loopUntillOne False 0 list_input
        putStr "Part2: "
        print (toDec oxygen * toDec co2)

-- if Bool return largest, else smallest
loopUntillOne :: Bool -> Int -> [String] -> String
loopUntillOne True index list
    | length list == 1 = head list
    | otherwise = loopUntillOne True (index + 1)(getSubList True index list)
loopUntillOne False index list
    | length list == 1 = head list
    | otherwise = loopUntillOne False (index + 1) (getSubList False index list)


-- if Bool return largest, else smallest
getSubList :: Bool -> Int-> [String] -> [String]
getSubList True index list
    | length zero > length one = zero
    | otherwise = one
    where one = filterOnChar '1' index list
          zero = filterOnChar '0' index list
getSubList False index list
    | length zero <= length one = zero
    | otherwise = one
    where one = filterOnChar '1' index list
          zero = filterOnChar '0' index list

filterOnChar :: Char -> Int -> [String] -> [String]
filterOnChar a index = filter (\x -> x!!index == a)

toDec :: String -> Int
toDec = foldl (\acc x -> acc * 2 + digitToInt x) 0
