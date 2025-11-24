<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bài 1</title>
</head>
<body>
    <?php

        //String 
        echo "hello World";
        echo "<br>";

        $name = "Xuan Kien";
        $age = 20 . "tuổi";

        define("PI", "3.14");

        echo '$name';
        echo "$name";

        echo "<br>";
        echo strlen($name);
        echo "<br>";
        echo str_word_count($name);

        echo "<br>";
        echo strpos($name, "K");

        echo "<br>";
        echo str_replace("Kien", "kien", $name);

        echo "<br>";

        //Number
        $num1 = 10;
        $num2 = 20;
        $sum = $num1 + $num2;

        //Condition
        if($sum < 15){
            echo "Nho hon 15";
        } elseif ($sum == 15){
            echo "Bang 15";
        } else {
            echo "Lon hon 15";
        }
        echo "<br>";

        $to_day = "Monday";
        switch ($to_day){
            case "Monday":
                echo "Today is Monday";
                break;
            default:
                echo "GoodMorning!!";
                break;
        }

        //Loop
        for($i = 0; $i < 100; $i++){
            echo $i . "<br>";
        }
    ?>
</body>
</html>