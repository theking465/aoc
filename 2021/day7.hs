day7 :: IO ()
day7 = do
    input <- readFile "input/day7.txt"
    let input_list = read ("[" ++ input ++ "]") :: [Int]
    print (part1 input_list)
    print (findIdealPosition input_list)

part1 :: [Int] -> Int
part1 list = minimum (generateFuelList1 list)

generateFuelList1 :: [Int] -> [Int]
generateFuelList1 list = map (\x -> calculateFuel1 x list) list

calculateFuel1 :: Int -> [Int] -> Int
calculateFuel1 pos = foldr (\n ns -> abs (n - pos) + ns) 0

findIdealPosition :: [Int] -> Int
findIdealPosition list = minimum (generateFuelList list)

generateFuelList :: [Int] -> [Int]
generateFuelList list = map (\x -> calculateFuel x list) l
    where l = [0..maximum list]

calculateFuel :: Int -> [Int] -> Int
calculateFuel pos =
    let var n = div (abs (n - pos) * (abs (n - pos)+ 1)) 2
    in foldr (\n ns -> var n + ns) 0
