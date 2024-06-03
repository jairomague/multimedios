<!DOCTYPE html>
<html>
<body>

<?php
$cars = array (
    array("Volvo", 22, 18),
    array("BMW", 15, 13),
    array("Saab", 5, 2),
    array("Land Rover", 17, 15)
);

foreach ($cars as $index => $car) {
    echo "<p><b>Row number $index</b></p>";
    echo "<ul>";
    echo "<li>$car[0]</li>";
    echo "<li>$car[1]</li>";
    echo "<li>$car[2]</li>";
    echo "</ul>";
}
?>

</body>
</html>
