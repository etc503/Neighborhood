Mr. Roboger's Neighborhood: 
  A web application that takes a number from a user and returns a range of numbers from 0 to the user inputted number changing all digits with "1"s to "Beep!", all digits "2"s to "Boop!" and all digits with 3's to "Won't you be my neighbor?". 

  These exceptions are written from least to most important. 

Author : Erin Cry

Installation:
  1. Clone down this repository: https://github.com/etc503/Neighbor.git 
  2. Open project in text editor 
  3. Open index.html in internet browser

Technologies used:
HTML
Javascript & Jquery-3.5.1
CSS & Booststap


Specs:
  1) The program returns a range of numbers from 0 to the users inputted number
      Input: "4"
      Output: "0, 1, 2, 3, 4"
  2)  The program doesn't allow any input other than numbers
  3)  The program changes all digits that contain "1" to "Beep!"
      Input: "4"
      Output: "0, Beep!, 2, 3, 4"
  4) The program changes all digits that contain "2" to "Boop!", overriding the prior command. 
      Input: "12"
      Output: "0, Beep!, Boop!, 3, 4, 5, 6, 7, 8, 9, Beep!, Beep!, Boop!"
  5) The program changes all digits that contain "3" to "Won't you be my neighbor?", overriding the prior two commands. 
      Input: "13"
      Output: "0, Beep!, Boop!, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, Beep!, Beep!, Boop!, Won't you be my neighbor?"


Copyright (c) 2020 Erin Cry

 