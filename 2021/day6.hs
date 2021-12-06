{-# OPTIONS_GHC -Wno-incomplete-patterns #-}
import Data.List

day6 :: IO ()
day6 =
    do
        input <- readFile "input/day6.txt"
        let input_list = read ("[" ++ input ++ "]") :: [Int]
        putStr "Part1: "
        print (length ( growth input_list 80))
        putStr "Part2: "
        print (length ( growth input_list 256))

growth :: [Int] -> Int -> [Int]
growth list n
    | n == 0 = list
    | otherwise = growth (replaceZeros(addElements(listIteration list))) (n-1)

listIteration :: [Int] -> [Int]
listIteration = map (\x -> x - 1)

replaceZeros :: [Int] -> [Int]
replaceZeros = map (\x -> if x == -1 then x + 7 else x)

addElements :: [Int] -> [Int]
addElements [] = []
addElements (x:xs)
    | x == -1 = [8,x] ++ addElements xs
    | otherwise = x : addElements xs
