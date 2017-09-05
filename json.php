<?php

include('conn.php');


//$ajax=json_decode( file_get_contents('json.json'));

$sql="select * from users";
$result=mysqli_query($conn,$sql);
$myarray = array();
while($row = mysqli_fetch_assoc($result))
$myarray[]=$row;


header("content-type:application/json");
$ajax=json_encode($myarray);

echo $ajax;
?>